import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import reviewsBg from "../assets/review-bg.png";

const dummyReviews = [
    {
        id: 1,
        author: "Ahmed Khan",
        rating: 5,
        title: "Unforgettable Hunza Trip!",
        comment: "TourMate organized an incredible trip to Hunza. The guides were professional, accommodation was excellent, and the views were simply breathtaking. Highly recommend!",
        date: "2023-11-15",
    },
    {
        id: 2,
        author: "Fatima Ali",
        rating: 4,
        title: "Skardu Adventure",
        comment: "Skardu was amazing! The booking process was smooth. Minor hiccup with transportation, but quickly resolved. Would use TourMate again.",
        date: "2023-10-28",
    },
    {
        id: 3,
        author: "Usman Tariq",
        rating: 5,
        title: "Fairy Meadows Dream",
        comment: "Fairy Meadows truly lives up to its name. TourMate made it a hassle-free experience. Every detail was taken care of. A must-do for nature lovers!",
        date: "2023-09-01",
    },
    {
        id: 4,
        author: "Sara Imtiaz",
        rating: 5,
        title: "Seamless Experience",
        comment: "From booking to departure, everything was seamless. The information provided was accurate and very helpful. Thank you, TourMate!",
        date: "2023-08-20",
    },
    {
        id: 5,
        author: "Zainab Riaz",
        rating: 4,
        title: "Murree Getaway",
        comment: "Enjoyed my Murree trip. The hotel selection was good. Maybe add more activity options in the future. Overall, a pleasant experience.",
        date: "2023-07-10",
    },
    {
        id: 6,
        author: "Hamza Naveed",
        rating: 5,
        title: "Explore Pakistan with TourMate!",
        comment: "TourMate truly helps you discover Pakistan's hidden gems. Their local insights are invaluable. I'm already planning my next trip with them!",
        date: "2023-06-25",
    },
];

const Reviews = () => {
    const [reviews, setReviews] = useState(dummyReviews);
    const [newReview, setNewReview] = useState({
        author: "",
        rating: 0,
        title: "",
        comment: "",
    });

    const handleFormChange = (e) => {
        setNewReview({ ...newReview, [e.target.name]: e.target.value });
    };

    const handleRatingChange = (rating) => {
        setNewReview({ ...newReview, rating: rating });
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (newReview.rating === 0) {
            alert("Please provide a star rating.");
            return;
        }

        const submittedReview = {
            ...newReview,
            id: reviews.length + 1,
            date: new Date().toISOString().slice(0, 10),
        };

        setReviews([submittedReview, ...reviews]);
        alert("Thank you for your review!");
        setNewReview({ author: "", rating: 0, title: "", comment: "" });
    };

    return (
        <div
            className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat pt-28 pb-16"
            style={{ backgroundImage: `url(${reviewsBg})` }}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                <div className="text-center mb-16">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4">
                        What Our Travelers Say
                    </h1>
                    <p className="text-white/80 text-lg max-w-3xl mx-auto">
                        Read genuine reviews from adventurers who experienced the beauty of Pakistan with TourMate. Share your story too!
                    </p>
                </div>

                <div className="bg-[#1A1A1A]/70 border border-white/10 rounded-2xl shadow-2xl p-8 mb-16 max-w-3xl mx-auto">
                    <h2 className="text-white text-3xl font-bold text-center mb-6">Share Your Experience</h2>
                    <form onSubmit={handleSubmitReview} className="space-y-6">
                        <div>
                            <label htmlFor="author" className="block text-white/80 text-sm font-semibold mb-2 sr-only">Your Name</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={newReview.author}
                                onChange={handleFormChange}
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-[#0A1412] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white/80 text-sm font-semibold mb-2">Your Rating</label>
                            <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FontAwesomeIcon
                                        key={star}
                                        icon={faStar}
                                        className={`cursor-pointer text-2xl ${newReview.rating >= star ? 'text-yellow-400' : 'text-gray-500'
                                            } hover:text-yellow-300 transition-colors`}
                                        onClick={() => handleRatingChange(star)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-white/80 text-sm font-semibold mb-2 sr-only">Review Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={newReview.title}
                                onChange={handleFormChange}
                                placeholder="Summarize your experience (e.g., 'Amazing Trip!')"
                                className="w-full p-3 rounded-lg bg-[#0A1412] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="comment" className="block text-white/80 text-sm font-semibold mb-2 sr-only">Your Review</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={newReview.comment}
                                onChange={handleFormChange}
                                rows="5"
                                placeholder="Tell us about your adventure with TourMate..."
                                className="w-full p-3 rounded-lg bg-[#0A1412] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 rounded-full bg-white text-[#16423C] font-semibold text-lg 
                                       transition duration-300 hover:scale-[1.02] hover:bg-gray-200 shadow-md"
                        >
                            Submit Review
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-[#1A1A1A]/70 border border-white/10 rounded-2xl shadow-lg p-6 
                                       transform transition duration-300 hover:scale-[1.02] hover:shadow-white/10 flex flex-col"
                        >
                            <div className="flex items-center mb-3">
                                <FontAwesomeIcon icon={faUserCircle} className="text-white/50 text-3xl mr-3" />
                                <div>
                                    <h3 className="text-white text-lg font-semibold">{review.author}</h3>
                                    <div className="flex text-yellow-400 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className={`${review.rating > i ? 'text-yellow-400' : 'text-gray-500'
                                                }`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-white text-xl font-bold mb-2">{review.title}</h4>
                            <p className="text-white/70 text-base leading-relaxed grow">{review.comment}</p>
                            <p className="text-white/50 text-xs mt-4 pt-3 border-t border-white/5">Reviewed on: {review.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;