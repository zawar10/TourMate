import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import back1 from "../assets/back1.png";
import back2 from "../assets/back2.png";
import back3 from "../assets/back3.png";
import back4 from "../assets/back4.png";

const Homepage = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${back4})` }}
    >
      <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-transparent to-black/90"></div>

      <img
        src={back3}
        alt=""
        className="absolute bottom-[-8%] sm:bottom-[-10%] md:bottom-[-12%] w-full z-0 
        animate-[bottomIn_1.5s_ease-out_forwards]"
      />
      <img
        src={back2}
        alt=""
        className="absolute bottom-[-8%] sm:bottom-[-10%] md:bottom-[-12%] w-full z-0 
        animate-[bottomIn_1.3s_ease-out_forwards]"
      />
      <img
        src={back1}
        alt=""
        className="absolute bottom-[-8%] sm:bottom-[-10%] md:bottom-[-12%] w-full z-0 
        animate-[bottomIn_1s_ease-out_forwards]"
      />

      <div className="absolute z-30 w-full text-center 
        top-[34%] sm:top-[38%] md:top-[42%] lg:top-[44%] 
        left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">

        <h3 className="text-white 
          text-[0.75rem] sm:text-[1rem] md:text-[1.2rem] 
          tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.6em] 
          opacity-100 animate-[bottomInText_1s_ease-out_forwards]">
          The Land of Serene Beauty
        </h3>

        <h1
          className="uppercase text-white font-extrabold 
          leading-[0.9] 
          text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem]
          tracking-widest sm:tracking-[0.15em] md:tracking-[0.18em]
          opacity-100 animate-[bottomInText_1.2s_ease-out_forwards] 
          drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]
        "
        >
          PAKISTAN
        </h1>
      </div>

      <div
        className="absolute z-30 w-full flex justify-center top-[55%] sm:top-[57%] md:top-[58%] lg:top-[60%] px-4"
      >
        <p className="text-white/90 w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] text-xs sm:text-sm md:text-base 
        leading-6 sm:leading-7 tracking-wide text-center animate-[bottomInText_1.4s_ease-out_forwards]">
          Pakistan is a land of majestic mountains, lush valleys, historic cities, and warm hospitality.
          From the towering peaks of the north to the sweeping deserts and coastal beaches, Pakistan
          offers diverse landscapes and rich cultural experiences for every traveler.
        </p>
      </div>

      <div className="absolute z-30 w-full flex justify-center 
        bottom-[10%] sm:bottom-[9%] md:bottom-[8%]">

        <button className="uppercase 
          tracking-[2px] sm:tracking-[3px] 
          px-8 sm:px-10 md:px-12 
          py-2 sm:py-3 
          rounded-full border border-white/70 
          text-white/90 
          hover:bg-white hover:text-black transition 
          flex items-center gap-2 
          text-sm sm:text-base">
          <Link to="/services">Explore More <FontAwesomeIcon icon={faArrowRight} /></Link>
        </button>
      </div>

    </div>
  );
};

export default Homepage;
