import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="text-white min-h-screen pt-30 bg-linear-to-b from-[#0F1917] to-[#0A1412]">

      <section className="w-full min-h-[40vh] bg-[#16423C] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center">
          Contact TourMate
        </h1>
        <p className="text-base md:text-lg text-white/80 leading-7 mt-4 max-w-2xl text-center">
          Have questions or need assistance planning your trip? We're here to help!
          Reach out to us through the form below or using our direct contact details.
        </p>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          <div className="bg-[#16423C]/30 rounded-xl border border-white/10 p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white text-center lg:text-left">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full p-3 rounded-md bg-[#0A1412] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-md bg-[#0A1412] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-white/80 text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about trips, booking, etc."
                  className="w-full p-3 rounded-md bg-[#0A1412] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full p-3 rounded-md bg-[#0A1412] border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#16423C]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 rounded-full bg-white text-[#16423C] font-semibold text-lg 
                           transition duration-300 hover:scale-[1.02] hover:bg-gray-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-10">
            <div className="bg-[#16423C]/30 rounded-xl border border-white/10 p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-white text-center lg:text-left">Our Details</h2>
              <div className="space-y-4 text-white/80">
                <p className="flex items-start">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#16423C] text-xl mr-3 mt-1 shrink-0" />
                  <span>
                    <strong>TourMate HQ</strong><br />
                    123 Adventure Lane, Travelers City,<br />
                    Islamabad, Pakistan
                  </span>
                </p>
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#16423C] text-xl mr-3" />
                  <a href="mailto:info@tourmate.pk" className="hover:text-white transition">info@tourmate.pk</a>
                </p>
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-[#16423C] text-xl mr-3" />
                  <a href="tel:+923001234567" className="hover:text-white transition">+92 (300) 123-4567</a>
                </p>
                <p className="flex items-center">
                  <FontAwesomeIcon icon={faClock} className="text-[#16423C] text-xl mr-3" />
                  <span>Mon - Fri: 9:00 AM - 5:00 PM PKT</span>
                </p>
              </div>
            </div>

            <div className="bg-[#16423C]/30 rounded-xl border border-white/10 p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-white text-center lg:text-left">Connect With Us</h2>
              <div className="flex justify-center lg:justify-start space-x-6 text-3xl">
                <a href="#" className="text-white/70 hover:text-blue-600 transition duration-300">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="text-white/70 hover:text-blue-400 transition duration-300">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-white/70 hover:text-pink-500 transition duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-white/70 hover:text-blue-700 transition duration-300">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>

            <div className="bg-[#16423C]/30 rounded-xl border border-white/10 p-4 shadow-xl overflow-hidden">
              <h2 className="text-3xl font-bold mb-4 text-white text-center lg:text-left">Find Us on the Map</h2>
              <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden">
                <iframe
                  title="TourMate Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217742.60742512616!2d72.82585253594879!3d33.61580226458535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd0787e9b05%3A0xf69c5e00b6522c0!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1709489566946!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;