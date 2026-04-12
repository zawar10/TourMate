import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LogOut, User } from 'lucide-react';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";

    const navBg = isHome
        ? "bg-white/20 backdrop-blur-xl border border-white/10"
        : "bg-[#16423C] border border-[#0F1917]/30 shadow-lg";

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "About", path: "/about" },
        { name: "Reviews", path: "/reviews" },
        { name: "Contact", path: "/contact" }
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("mock_tourmate_user");

        setIsLoggedIn(false);

        navigate("/login");
        setOpen(false);
    };

    const AuthButtonsDesktop = () => {
        if (isLoggedIn) {
            return (
                <div className="flex gap-3 md:gap-4 items-center">
                    <NavLink
                        to="/userpanel"
                        className={`px-4 py-2 rounded-full border ${isHome ? "border-white/60 text-white" : "border-white/40 text-white"
                            } hover:bg-white hover:text-[#16423C] transition flex items-center`}
                    >
                        <User className="w-4 h-4 mr-1" /> Panel
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className={`px-4 py-2 rounded-full ${isHome
                            ? "bg-[#16423C] text-white hover:bg-[#0F3D3E]"
                            : "bg-white text-[#16423C] hover:bg-gray-100"
                            } font-semibold transition flex items-center`}
                    >
                        <LogOut className="w-4 h-4 mr-1" /> Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div className="flex gap-3 md:gap-4 items-center">
                    <NavLink
                        to="/login"
                        className={`px-4 py-2 rounded-full border ${isHome ? "border-white/60 text-white" : "border-white/40 text-white"
                            } hover:bg-white hover:text-[#16423C] transition`}
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className={`px-4 py-2 rounded-full ${isHome
                            ? "bg-[#16423C] text-white hover:bg-[#0F3D3E]"
                            : "bg-white text-[#16423C] hover:bg-gray-100"
                            } font-semibold transition`}
                    >
                        Signup
                    </NavLink>
                </div>
            );
        }
    };

    const AuthButtonsMobile = () => {
        if (isLoggedIn) {
            return (
                <>
                    <NavLink
                        to="/userpanel"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#16423C] transition"
                    >
                        Panel
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className={`block w-full text-left px-4 py-2 rounded-full font-semibold ${isHome ? "bg-[#16423C] text-white" : "bg-white text-[#16423C]"
                            }`}
                    >
                        Logout
                    </button>
                </>
            );
        } else {
            return (
                <>
                    <NavLink
                        to="/login"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 rounded-full border border-white/60 text-white hover:bg-white hover:text-[#16423C] transition"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        to="/signup"
                        onClick={() => setOpen(false)}
                        className={`block px-4 py-2 rounded-full font-semibold ${isHome ? "bg-[#16423C] text-white" : "bg-white text-[#16423C]"
                            }`}
                    >
                        Signup
                    </NavLink>
                </>
            );
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav
                className={`flex items-center justify-between w-[92%] md:w-[80%] mx-auto mt-4 px-4 md:px-6 py-3 rounded-3xl transition ${navBg}`}
            >
                <NavLink to="/" className="text-white text-lg md:text-2xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition">
                    TourMate
                </NavLink>

                <ul className="hidden md:flex gap-4 md:gap-6 items-center">
                    {menuItems.map((item, i) => (
                        <NavLink
                            key={i}
                            to={item.path}
                            className={({ isActive }) => {
                                if (isHome) {
                                    return isActive
                                        ? "px-4 py-2 rounded-full bg-[#16423C] text-white font-semibold shadow-md transition"
                                        : "px-4 py-2 rounded-full text-white/90 hover:bg-white/10 hover:text-white transition";
                                } else {
                                    return isActive
                                        ? "px-4 py-2 rounded-full bg-white text-[#16423C] font-semibold shadow-md transition"
                                        : "px-4 py-2 rounded-full text-white/90 hover:bg-white/10 hover:text-white transition";
                                }
                            }}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </ul>

                <div className="hidden md:flex">
                    <AuthButtonsDesktop />
                </div>

                <div
                    className="md:hidden text-white text-2xl cursor-pointer px-2 py-1 rounded-md hover:bg-white/10 transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </div>
            </nav>

            {open && (
                <div
                    className={`md:hidden absolute top-full left-0 w-full ${isHome ? "bg-white/20 backdrop-blur-xl border-t border-white/10" : "bg-[#16423C] border-t border-[#0F1917]/30"
                        } z-40`}
                >
                    <div className="w-[92%] mx-auto py-4">
                        <ul className="flex flex-col gap-3">
                            {menuItems.map((item, i) => (
                                <NavLink
                                    key={i}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? isHome
                                                ? "block px-4 py-2 rounded-full bg-[#16423C] text-white font-semibold"
                                                : "block px-4 py-2 rounded-full bg-white text-[#16423C] font-semibold"
                                            : "block px-4 py-2 rounded-full text-white/90 hover:bg-white/10"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            {isLoggedIn && (
                                <NavLink
                                    to="/userpanel"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? isHome
                                                ? "block px-4 py-2 rounded-full bg-[#16423C] text-white font-semibold"
                                                : "block px-4 py-2 rounded-full bg-white text-[#16423C] font-semibold"
                                            : "block px-4 py-2 rounded-full text-white/90 hover:bg-white/10"
                                    }
                                >
                                    Panel
                                </NavLink>
                            )}
                        </ul>

                        <div className="mt-4 flex flex-col gap-3">
                            <AuthButtonsMobile />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;