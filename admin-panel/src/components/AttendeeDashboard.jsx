// src/components/AttendeeDashboard.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AttendeeDashboard() {
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/sign-in');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  return (
    <div className="tw:min-h-screen tw:bg-gray-100">
      <nav className="tw:bg-blue-600 tw:p-4">
        <div className="tw:container tw:mx-auto tw:flex tw:justify-between tw:items-center">
          <h1 className="tw:text-white tw:text-2xl tw:font-bold">Attendee Dashboard</h1>
          <button
            onClick={handleLogout}
            className="tw:bg-red-500 tw:text-white tw:px-4 tw:py-2 tw:rounded tw:hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="tw:container tw:mx-auto tw:p-6">
        <h2 className="tw:text-3xl tw:font-semibold tw:mb-4">Welcome, Attendee!</h2>
        <div className="tw:bg-white tw:p-6 tw:rounded-lg tw:shadow-md">
          {/* Add attendee-specific content here */}
          <p>This is your attendee dashboard. Here you can view events, register, etc.</p>
        </div>
      </div>
    </div>
  );
}