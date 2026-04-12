import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const bgColor = "bg-[#0A1412]";
    const borderColor = "border-white/10";

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Destinations", path: "/destinations" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "About", path: "/about" },
        { name: "Reviews", path: "/reviews" },
        { name: "Contact", path: "/contact" }
    ];

    const utilityLinks = [
        { name: "Privacy Policy" },
        { name: "Terms of Use" },
        { name: "FAQs" },
        { name: "Sitemap" }
    ];

    return (
        <footer className={`w-full ${bgColor} text-white/90 border-t ${borderColor}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

                    <div className="col-span-2 md:col-span-2 lg:col-span-2">
                        <NavLink to="/" className="text-2xl font-extrabold tracking-wide text-white hover:text-gray-300 transition">
                            TourMate
                        </NavLink>
                        <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
                            Your trusted guide to the majestic mountains, lush valleys, and rich culture of Pakistan. Plan your perfect journey with us.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            {[
                                { icon: faFacebookF, color: "hover:text-blue-500", link: "#" },
                                { icon: faTwitter, color: "hover:text-blue-400", link: "#" },
                                { icon: faInstagram, color: "hover:text-pink-500", link: "#" },
                                { icon: faLinkedinIn, color: "hover:text-blue-700", link: "#" },
                            ].map((social, i) => (
                                <Link key={i} href={social.link}
                                    className={`text-xl text-white/50 ${social.color} transition-colors duration-300`}>
                                    <FontAwesomeIcon icon={social.icon} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {menuItems.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.path}
                                        className="text-white/70 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            {utilityLinks.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.path}
                                        className="text-white/70 hover:text-white transition-colors duration-200"
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={`text-white/50 w-4 h-4 mt-1 mr-3 shrink-0`} />
                                <span className="text-white/70">Islamabad, Pakistan</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faEnvelope} className={`text-white/50 w-4 h-4 mr-3`} />
                                <a href="mailto:info@tourmate.pk" className="text-white/70 hover:text-white transition">
                                    info@tourmate.pk
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faPhone} className={`text-white/50 w-4 h-4 mr-3`} />
                                <a href="tel:+923001234567" className="text-white/70 hover:text-white transition">
                                    +92 (300) 123-4567
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className={`border-t ${borderColor} py-6`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p className="order-2 md:order-1 mt-4 md:mt-0">
                        &copy; {new Date().getFullYear()} TourMate. All rights reserved.
                    </p>
                    <p className="order-1 md:order-2">
                        <a href="#" className={`hover:text-white transition`}>Built with <span role="img" aria-label="love">💖</span> in Pakistan</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;