import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "Admin@123") {
            localStorage.setItem("token", "dummyToken");
            navigate("/dashboard");
        } else {
            alert("Login failed! Check credentials.");
        }
    };

    return (
        <div className="tw:min-h-screen tw:flex tw:items-center tw:justify-center tw:bg-gradient-to-r tw:from-blue-500 tw:to-blue-700">
            <div className="tw:card tw:w-96 tw:bg-white tw:shadow-2xl tw:p-6 tw:rounded-lg">
                <div className="tw:card-body">
                    <h2 className="tw:card-title tw:text-3xl tw:font-bold tw:text-center tw:text-blue-600 tw:mb-4">
                        Admin Login
                    </h2>
                    <form onSubmit={handleLogin} className="tw:space-y-6">
                        <div className="tw:form-control">
                            <label className="tw:label">
                                <span className="tw:label-text tw:font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="tw:input tw:input-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div className="tw:form-control">
                            <label className="tw:label">
                                <span className="tw:label-text tw:font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                                className="tw:input tw:input-bordered tw:w-full tw:border-blue-500 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-blue-400"
                                required
                            />
                        </div>

                        <div className="tw:form-control tw:mt-6">
                            <button className="tw:btn tw:btn-primary tw:w-full tw:bg-blue-600 tw:hover:bg-blue-700 tw:text-white tw:font-semibold tw:text-lg">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
