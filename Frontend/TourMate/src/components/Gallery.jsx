import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import img1 from "../assets/images/K-2.jpg";
import img2 from "../assets/images/swat.jpg";
import img3 from "../assets/images/skardu.jpg";
import img4 from "../assets/images/nellum.jpg";
import img5 from "../assets/images/meadows.jpg";
import img6 from "../assets/images/murree.jpg";
import img7 from "../assets/images/gilgit.jpg";
import img8 from "../assets/images/lahore.jpg";
import img9 from "../assets/images/hunza.jpg";
import img10 from "../assets/images/nathiagali.jpg";
import img11 from "../assets/images/RattiGali.jpg";

const imagesData = [
    { src: img1, title: "K-2 Mountain", description: "World 2nd largest mountain in Pakistan" },
    { src: img2, title: "Swat Valley", description: "Known as the Switzerland of Pakistan, full of lush greenery and rivers." },
    { src: img3, title: "Skardu Valley", description: "Gateway to some of the world's highest peaks and scenic lakes." },
    { src: img4, title: "Neelum Valley", description: "Stunning valley in Azad Kashmir with rivers and mountains." },
    { src: img5, title: "Fairy Meadows", description: "A lush plateau with incredible views of Nanga Parbat." },
    { src: img6, title: "Murree", description: "A popular hill station with pine forests and cool climate." },
    { src: img7, title: "Gilgit", description: "The Jewel of Pakistan" },
    { src: img8, title: "Lahore", description: "Mughal architecture and historical grandeur." },
    { src: img9, title: "Hunza Valley", description: "A valley surrounded by majestic mountains in northern Pakistan." },
    { src: img10, title: "Nathia Gali", description: "A serene hill station in Abbottabad district surrounded by forests." },
    { src: img11, title: "Ratti Gali Lake", description: "An alpine glacial lake with breathtaking turquoise waters." }
];

const Gallery = () => {
    const [index, setIndex] = useState(-1);

    return (
        <section className="
          pt-28 pb-16 px-4 sm:px-6 md:px-12 lg:px-16
          bg-[#0F1917] text-white
          bg-linear-to-b from-[#0F1917] to-[#0A1412]
        ">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#E1E1D9]">Gallery</h2>
                <p className="mt-4 text-gray-300 max-w-xl mx-auto">
                    Explore stunning landscapes and scenic views from across Pakistan.
                </p>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {imagesData.map((data, i) => (
                    <div
                        key={i}
                        className="
                            mb-4 break-inside-avoid rounded-2xl
                            relative group overflow-hidden 
                            transform hover:scale-[1.03] hover:shadow-2xl
                            transition-all duration-300 cursor-pointer
                        "
                        onClick={() => setIndex(i)}
                    >

                        <img
                            src={data.src}
                            alt={data.title}
                            className="w-full object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105" // ⬅️ Added transition and hover zoom
                        />

                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center p-4 
                                       bg-black/40 // Overlay background for contrast
                                       opacity-0 group-hover:opacity-100 // Reveals on hover
                                       transition-opacity duration-300"
                        >
                            <div
                                className="absolute inset-0 bg-transparent transition-all duration-300 
                                           group-hover:backdrop-blur-sm
                                           pointer-events-none"
                            ></div>

                            <div className="relative z-10 text-center text-white">
                                <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    {data.title}
                                </h3>
                                <p className="text-sm text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                    {data.description}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {index >= 0 && (
                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={imagesData.map((data) => ({ src: data.src }))}
                    index={index}
                />
            )}
        </section>
    );
};

export default Gallery;