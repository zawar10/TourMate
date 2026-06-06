import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import heroImg from "../assets/images/pakflag.jpg";
import hunza from "../assets/images/hunza.jpg";
import lahore from "../assets/images/lahore.jpg";
import gwadar from "../assets/images/gwadar.jpg";

const About = () => {
  return (
    <div className="text-white min-h-screen pt-30 bg-linear-to-b from-[#0F1917] to-[#0A1412]">

      <section className="w-full min-h-[60vh] bg-[#16423C] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16">

        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
            About TourMate
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-7">
            Discover Pakistan like never before with a platform built for
            adventure lovers, culture seekers, and travelers who want authentic
            experiences.
          </p>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt=""
            className="rounded-xl shadow-xl w-[60%] md:w-[50%] object-cover 
            transition transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-white/80 max-w-3xl mx-auto leading-7">
          Our mission is to simplify travel in Pakistan...
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { icon: "🌍", title: "Promote Tourism", text: "Showcasing Pakistan’s beauty." },
            { icon: "🗻", title: "Highlight Hidden Places", text: "Undiscovered valleys & lakes." },
            { icon: "🤝", title: "Connect Travelers", text: "Guides, tours & experiences." }
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#16423C]/40 border border-white/10
              transition transform duration-300 hover:-translate-y-2 hover:bg-[#16423C]/60 hover:shadow-xl"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
              <p className="text-white/70 text-sm mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#16423C]/20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose TourMate?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🧭", title: "Personalized Travel", desc: "Trips based on your style." },
            { icon: "📸", title: "Photo Galleries", desc: "Explore stunning visuals." },
            { icon: "⭐", title: "Trusted Reviews", desc: "Real traveler experiences." },
            { icon: "🛡️", title: "Safe Information", desc: "Accurate travel details." },
            { icon: "🚌", title: "Custom Trips", desc: "Plan your perfect tour." },
            { icon: "🎉", title: "Cultural Experiences", desc: "Food & festivals." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-[#16423C]/30 rounded-xl border border-white/10
              transition transform duration-300 hover:scale-105 hover:bg-[#16423C]/50 hover:shadow-xl"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-white/70 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Pakistan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ img: hunza, title: "Hunza Valley", desc: "Paradise of Pakistan" },
          { img: lahore, title: "Lahore", desc: "Culture & food capital" },
          { img: gwadar, title: "Gwadar", desc: "Blue sea and golden sand" }]
            .map((place) => (
              <div
                key={place.title}
                className="rounded-xl overflow-hidden bg-[#16423C]/20 border border-white/10
              hover:shadow-xl transition"
              >
                <div className="overflow-hidden">
                  <img
                    src={place.img}
                    className="w-full h-56 object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{place.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{place.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="py-16 bg-[#16423C] text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Explore Pakistan?
        </h2>
        <p className="text-white/80 mt-3 mb-8 max-w-xl mx-auto">
          Start your journey with TourMate today.
        </p>

        <button className="px-10 py-3 rounded-full bg-white text-[#16423C] 
        font-semibold text-lg transition duration-300 hover:scale-105 hover:bg-gray-200">
          <Link
            to="/destinations"
          >
            Start Your Journey <FontAwesomeIcon icon={faArrowRight} className="ml-2" /> 
          </Link>
        </button>
      </section>

    </div>
  );
};

export default About;