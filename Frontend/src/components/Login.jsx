import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from 'lucide-react';
import CustomMessageBox from "./CustomMessageBox";
import loginBg from '../assets/login-bg.png';

const API_URL = import.meta.env.VITE_LOGIN_URL;

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState('error');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);
        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("mock_tourmate_user", JSON.stringify({
                    name: data.user.name,
                    email: data.user.email
                }));

                setIsLoggedIn(true);
                setMessage("Login Successful! Redirecting...", 'success');
                setMessageType('success');

                setTimeout(() => navigate("/userpanel"), 1000);
            } else {
                setMessage(`Login Failed: ${data.message || 'Invalid Credentials'}`, 'error');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Network Error:', error);
            setMessage('Network error. Check if the backend server is running.', 'error');
            setMessageType('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <CustomMessageBox message={message} type={messageType} onClose={() => setMessage(null)} />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="relative z-10 bg-[#1A1A1A]/70 border border-white/10 rounded-2xl 
                            shadow-2xl p-8 sm:p-10 md:p-12 w-full max-w-md 
                            transform transition-all duration-300 hover:shadow-white/20">

                <h2 className="text-white text-4xl font-extrabold text-center mb-6">Welcome Back</h2>
                <p className="text-white/80 text-center mb-8">Sign in to explore your next adventure.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-white/80 text-sm font-semibold mb-2 sr-only">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full p-3 pl-12 rounded-lg bg-[#0A1412] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-white/80 text-sm font-semibold mb-2 sr-only">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full p-3 pl-12 rounded-lg bg-[#0A1412] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="text-white/70 hover:text-white text-sm transition">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-8 py-3 rounded-full bg-white text-[#16423C] font-semibold text-lg 
                                transition duration-300 hover:scale-[1.02] hover:bg-gray-200 shadow-md disabled:opacity-50"
                    >
                        {loading ? 'Logging In...' : 'Log In'}
                    </button>
                </form>

                <p className="text-white/80 text-center mt-8">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-[#16423C] hover:text-white font-semibold transition">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;