import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faTools, faHiking, faBuilding, faUsers, faMapMarkedAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import servicesBg from "../assets/services-bg.png";

const servicesCategories = [
    {
        icon: faGlobeAsia,
        title: "Curated Tour Packages",
        description: "Explore Pakistan's most iconic destinations with our expertly crafted tour packages. From the majestic northern mountains to historical cityscapes, we offer diverse itineraries for every traveler.",
        features: [
            "All-Inclusive Guided Tours",
            "Fixed & Flexible Departures",
            "Small Group & Private Options",
            "Cultural Immersion & Sightseeing",
        ],
    },
    {
        icon: faTools,
        title: "Custom Trip Planning",
        description: "Dreaming of a unique adventure? Our specialists will design a personalized itinerary tailored to your interests, budget, and schedule. Your vision, our expertise.",
        features: [
            "Bespoke Itinerary Creation",
            "Personalized Consultations",
            "Accommodation & Transport Booking",
            "Activity & Excursion Management",
        ],
    },
    {
        icon: faHiking,
        title: "Adventure & Trekking Expeditions",
        description: "For the thrill-seekers and nature lovers, we organize challenging treks and exhilarating adventures to Pakistan's highest peaks and remote wilderness areas.",
        features: [
            "High-Altitude Trekking",
            "Mountaineering Logistics",
            "Camping & Wilderness Stays",
            "Expert Mountain Guides",
        ],
    },
    {
        icon: faBuilding,
        title: "Cultural & Heritage Tours",
        description: "Immerse yourself in the rich history and vibrant traditions of Pakistan. Discover ancient ruins, bustling bazaars, and architectural marvels with our cultural experts.",
        features: [
            "Historical Site Visits",
            "Local Food & Cuisine Tours",
            "Traditional Festivals & Events",
            "Art & Craft Workshops",
        ],
    },
    {
        icon: faUsers,
        title: "Logistics & On-Ground Support",
        description: "We handle all the details so you can focus on enjoying your trip. From comfortable transport to reliable local support, we ensure a smooth journey.",
        features: [
            "Private & Group Transportation",
            "24/7 Local Support Hotlines",
            "Permit & Visa Assistance",
            "Safety & Security Briefings",
        ],
    },
    {
        icon: faMapMarkedAlt,
        title: "Specialized Experiences",
        description: "Beyond standard tours, we offer unique experiences like photography tours, wildlife safaris, and specialized educational trips. Ask us about bespoke themes!",
        features: [
            "Photography Expeditions",
            "Wildlife & Bird Watching",
            "Educational & Research Trips",
            "Luxury & Glamping Experiences",
        ],
    },
];

const Services = () => {
    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat pt-28 pb-16"
            style={{ backgroundImage: `url(${servicesBg})` }}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                <div className="text-center mb-16">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4">
                        Our Expert Services
                    </h1>
                    <p className="text-white/80 text-lg max-w-3xl mx-auto">
                        TourMate offers a comprehensive range of travel services designed to make your journey through Pakistan effortless and memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesCategories.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A]/70 border border-white/10 rounded-2xl shadow-2xl p-8 
                                       transform transition duration-300 hover:scale-[1.02] hover:shadow-white/20 flex flex-col items-center text-center"
                        >
                            <FontAwesomeIcon icon={service.icon} className="text-[#16423C] text-5xl mb-6" />
                            <h2 className="text-white text-2xl font-bold mb-4">{service.title}</h2>
                            <p className="text-white/70 text-base leading-relaxed mb-6 grow">
                                {service.description}
                            </p>
                            <ul className="text-white/80 text-sm list-disc list-inside space-y-2 mt-auto">
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                        Ready to Plan Your Adventure?
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                        Contact us today for a personalized consultation or to book your next trip to Pakistan!
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-10 py-4 rounded-full bg-white text-[#16423C] font-semibold text-lg 
                                   transition duration-300 hover:scale-105 hover:bg-gray-200 shadow-md"
                    >
                        Contact Us <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Services;