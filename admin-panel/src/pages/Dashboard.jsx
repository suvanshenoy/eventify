import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../components/Sidebar"; // Import Sidebar
import Navbar from "../components/Navbar"; // Import Navbar

const Dashboard = () => {
  const [organizersCount, setOrganizersCount] = useState(0);
  const [attendeesCount, setAttendeesCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/stats");
      setOrganizersCount(response.data.organizers);
      setAttendeesCount(response.data.attendees);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />

        <div className="dashboard-content">
          <h2 className="dashboard-title">Admin Dashboard</h2>
          <div className="stats-container">
            <div className="stat-card">
              <h3>Event Organizers</h3>
              <p>{organizersCount}</p>
            </div>
            <div className="stat-card">
              <h3>Attendees</h3>
              <p>{attendeesCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
