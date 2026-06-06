import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import hunzaImg from "../assets/images/hunza.jpg";
import skarduImg from "../assets/images/skardu.jpg";
import swatImg from "../assets/images/swat.jpg";
import murreeImg from "../assets/images/murree.jpg";
import neelumImg from "../assets/images/nellum.jpg";
import meadowsImg from "../assets/images/meadows.jpg";
import rattiImg from "../assets/images/RattiGali.jpg";
import nathiagaliImg from "../assets/images/nathiagali.jpg";

const destinations = [
    {
        name: "Hunza Valley",
        image: hunzaImg,
        description: "A valley surrounded by majestic mountains in northern Pakistan.",
    },
    {
        name: "Skardu",
        image: skarduImg,
        description: "Gateway to some of the world's highest peaks and scenic lakes.",
    },
    {
        name: "Swat",
        image: swatImg,
        description: "Known as the Switzerland of Pakistan, full of lush greenery and rivers.",
    },
    {
        name: "Murree",
        image: murreeImg,
        description: "A popular hill station with pine forests and cool climate.",
    },
    {
        name: "Neelum Valley",
        image: neelumImg,
        description: "Stunning valley in Azad Kashmir with rivers and mountains.",
    },
    {
        name: "Fairy Meadows",
        image: meadowsImg,
        description: "A lush plateau with incredible views of Nanga Parbat.",
    },
    {
        name: "Ratti Gali Lake",
        image: rattiImg,
        description: "An alpine glacial lake with breathtaking turquoise waters.",
    },
    {
        name: "Nathiagali",
        image: nathiagaliImg,
        description: "A serene hill station in Abbottabad district surrounded by forests.",
    }
];

const Destinations = () => {
    return (
        <section className="bg-linear-to-b from-[#0F1917] to-[#0A1412] pt-30 pb-24 overflow-hidden 
        shadow-lg border border-white/10 transform transition duration-300">
            <div className="text-center mb-12">
                <h2 className="text-white text-3xl md:text-4xl font-bold">Explore Destinations</h2>
                <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                    Discover some of the most breathtaking places in Pakistan. Plan your next adventure today!
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px]">
                    {destinations.map((dest, i) => (
                        <Link
                            key={i}
                            to={`/destinations/${dest.slug}`}
                            className="block h-full"
                        >
                            <div
                                key={i}
                                className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
                            >
                                <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4 flex flex-col items-center">
                                    <h3 className="text-gray-300 text-xl font-semibold">{dest.name}</h3>
                                    <p className="text-gray-300 mt-2 text-sm text-center">{dest.description}</p>

                                    <button className="w-30 h-10 flex items-center justify-center rounded-full border-2 border-white/70
                                     text-white text-base mt-4 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                                        More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
