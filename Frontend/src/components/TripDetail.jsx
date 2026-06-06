import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faUsers, faRoute, faCalendarAlt, faBed, faUtensils, faBus } from '@fortawesome/free-solid-svg-icons';

const dummyTripData = {
    id: "hunza-expedition",
    title: "7-Day Majestic Hunza Valley Expedition",
    rating: 4.8,
    reviews: 125,
    duration: "7 Days / 6 Nights",
    price: 30500,
    image: "hunza.jpg",
    highlights: [
        "Experience the stunning colors of Attabad Lake.",
        "Visit the ancient Baltit and Altit Forts.",
        "Witness the majestic view of Rakaposhi Peak.",
        "Explore Passu Cones and the Sost Border region.",
    ],
    itinerary: [
        { day: 1, title: "Arrival in Islamabad & Travel to Besham", details: "Meet and greet in Islamabad, followed by a scenic drive towards Besham via the Hazara Motorway." },
        { day: 2, title: "Journey to Gilgit & Rakaposhi Viewpoint", details: "Continue the drive on the Karakoram Highway (KKH) to Gilgit, stopping at the breathtaking Rakaposhi viewpoint." },
        { day: 3, title: "Hunza Valley & Altit/Baltit Forts", details: "Explore the cultural heart of Hunza, visiting the historic forts and enjoying local cuisine." },
        { day: 4, title: "Attabad Lake & Passu Cones", details: "Boat ride across the turquoise Attabad Lake and sightseeing near the iconic Passu Cones." },
        { day: 5, title: "Day Trip to Khunjerab Pass (Optional)", details: "Long scenic drive to the Pakistan-China border (subject to weather/road conditions)." },
        { day: 6, title: "Return Journey to Naran/Kewai", details: "Begin the journey back, driving through the beautiful Naran Valley (weather permitting)." },
        { day: 7, title: "Departure from Islamabad", details: "Final leg of the journey to Islamabad for drop-off and departure." },
    ],
    inclusions: [
        { icon: faBus, text: "Luxury Private Transport (4x4 jeeps where necessary)" },
        { icon: faBed, text: "6 Nights Accommodation (3-4 Star Hotels/Guesthouses)" },
        { icon: faUtensils, text: "Daily Breakfast and Dinner" },
        { icon: faUsers, text: "Certified Local Guide and Driver" },
    ],
};

const BookingWidget = ({ price }) => {
    const [date, setDate] = useState('');
    const [travelers, setTravelers] = useState(1);

    const handleBooking = (e) => {
        e.preventDefault();
        alert(`Booking requested for ${travelers} people on ${date}. Total Est. Price: PKR ${price * travelers}`);
    };

    return (
        <div className="sticky top-28 bg-[#1A1A1A]/70 border border-white/10 rounded-xl p-6 shadow-2xl">
            <p className="text-white/70 text-lg mb-2">Price Per Person</p>
            <h3 className="text-white text-4xl font-extrabold mb-6">
                PKR {price} <span className="text-base font-normal text-white/50">/ person</span>
            </h3>

            <form onSubmit={handleBooking} className="space-y-4">
                <div>
                    <label className="block text-white/80 text-sm font-semibold mb-2" htmlFor="travelDate">
                        Select Start Date
                    </label>
                    <input
                        type="date"
                        id="travelDate"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#0A1412] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                        required
                    />
                </div>

                <div>
                    <label className="block text-white/80 text-sm font-semibold mb-2" htmlFor="travelers">
                        Number of Travelers
                    </label>
                    <input
                        type="number"
                        id="travelers"
                        value={travelers}
                        onChange={(e) => setTravelers(Math.max(1, parseInt(e.target.value || 1)))}
                        min="1"
                        className="w-full p-3 rounded-lg bg-[#0A1412] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-8 py-3 rounded-full bg-white text-[#16423C] font-semibold text-lg 
                               transition duration-300 hover:scale-[1.02] hover:bg-gray-200 shadow-md mt-6"
                >
                    Book This Trip
                </button>
            </form>
        </div>
    );
};

const TripDetail = () => {
    const trip = dummyTripData;

    if (!trip) {
        return <div className="min-h-screen pt-40 text-center text-white bg-[#0F1917]">Trip Not Found</div>;
    }

    return (
        <div className="text-white min-h-screen bg-linear-to-b from-[#0F1917] to-[#0A1412] pt-24">

            <div
                className="w-full h-[50vh] bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(../assets/images/${trip.image})`,
                    backgroundColor: '#16423C'
                }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8 md:p-16">
                    <p className="text-white/80 text-lg flex items-center mb-2">
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-[#E1E1D9]" /> {trip.duration}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-white mb-3">
                        {trip.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                        </div>
                        <p className="text-white/80">({trip.reviews} Reviews)</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 p-8 md:p-12">

                <div className="lg:col-span-2 space-y-12">

                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#E1E1D9] border-b border-white/10 pb-2">Trip Highlights</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
                            {trip.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <FontAwesomeIcon icon={faRoute} className="text-[#16423C] shrink-0" />
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-[#E1E1D9] border-b border-white/10 pb-2">Detailed Itinerary</h2>
                        {trip.itinerary.map((item) => (
                            <div key={item.day} className="mb-6 p-4 bg-[#1A1A1A]/30 rounded-lg border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-3 text-[#16423C]" />
                                    Day {item.day}: {item.title}
                                </h3>
                                <p className="text-white/80 pl-8">{item.details}</p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-[#E1E1D9] border-b border-white/10 pb-2">What's Included</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
                            {trip.inclusions.map((item, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <FontAwesomeIcon icon={item.icon} className="text-[#16423C] text-lg mt-1 shrink-0" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h4 className="text-lg font-semibold text-red-300 mb-1">Exclusions Note:</h4>
                            <p className="text-red-300/80 text-sm">Flights, personal shopping, travel insurance, and tips for guides are NOT included.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <BookingWidget price={trip.price} />
                </div>
            </div>

        </div>
    );
};

export default TripDetail;