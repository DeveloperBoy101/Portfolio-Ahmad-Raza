import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader,
  CheckCircle,
  Facebook,
  Linkedin,
} from "lucide-react"; // removed twitter

import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const SERVICE_ID = "service_6w6hkur";
const TEMPLATE_ID = "template_umnx71e";
const PUBLIC_KEY = "VyHHgPF_UAO3KWn0B";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState({
    visible: false,
    text: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const showNotification = (text, type) => {
    setSubmissionMessage({ visible: true, text, type });
    setTimeout(() => {
      setSubmissionMessage({ visible: false, text: "", type: "" });
    }, 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setIsLoading(false);
      showNotification(
        "Please fill in all required fields (Name, Email, Message).",
        "error"
      );
      return;
    }

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        showNotification("Your message has been sent successfully!", "success");
      })
      .catch(() => {
        showNotification(
          "Failed to send message. Please try again later.",
          "error"
        );
      })
      .finally(() => setIsLoading(false));
  };

  const ContactItem = ({ Icon, title, lines }) => (
    <div className="flex items-start mb-6 group cursor-pointer p-3 rounded-xl transition duration-300 hover:bg-gray-800/50">
      <div className="p-3 bg-yellow-500/10 rounded-full mr-4 mt-1 transition-all duration-300 group-hover:bg-yellow-500/20">
        <Icon size={20} className="text-yellow-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-0.5">{title}</h3>
        <div className="text-gray-300 space-y-0.5">
          {lines.map((line, i) => (
            <p key={i} className="text-sm">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="Contact"
      className="py-40 md:py-52 min-h-screen font-sans p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden"
    >
      {submissionMessage.visible && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl shadow-2xl flex items-center space-x-3 ${
            submissionMessage.type === "success"
              ? "bg-yellow-500 text-gray-200"
              : "bg-red-600 text-white"
          }`}
        >
          {submissionMessage.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <Mail size={20} />
          )}
          <p className="font-semibold">{submissionMessage.text}</p>
        </div>
      )}

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* ===== Left Side (Form) ===== */}
        <div
          data-aos="fade-up"
          className="p-8 md:p-10 rounded-2xl bg-gray-800/70 shadow-2xl shadow-black/80 border border-gray-800/50 transition-all duration-500 hover:border-yellow-500/20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Just say <span className="text-yellow-500">Hello</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-white text-base font-light bg-gray-700/70 rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 border border-transparent"
              required
            />

            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 text-white text-base font-light bg-gray-700/70 rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 border border-transparent"
              required
            />

            <textarea
              id="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 text-white text-base font-light bg-gray-700/70 rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 resize-none border border-transparent"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full md:w-auto mt-4 px-8 py-3 rounded-lg font-bold transition duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-0.5 ${
                isLoading
                  ? "bg-gray-700 cursor-not-allowed text-gray-400"
                  : "bg-yellow-500 text-gray-900 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/50 hover:bg-yellow-400"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* ===== Right Side (Contact Info) ===== */}
        <div className="p-8 md:p-10 rounded-2xl bg-gray-800/70 shadow-2xl shadow-black/80 border border-gray-800/50 transition-all duration-500 hover:border-blue-500/20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Contact <span className="text-yellow-500">Info</span>
          </h2>

          <p className="text-gray-400 mb-10 text-base">
            Reach out directly using the details below or use the form to send a
            quick message.
          </p>

          <div className="space-y-4">
            <a href="">
              <ContactItem
                Icon={Mail}
                title="Email"
                lines={["ahmadraza.bablo1@gmail.com", "linksbunny@gmail.com"]}
              />
            </a>
            <ContactItem
              Icon={Phone}
              title="Phone"
              lines={["+92 314146079-7", "+92 308415000-6"]}
            />
            <ContactItem
              Icon={MapPin}
              title="Address"
              lines={["Taj colony Depalpur Okara/Pakistan"]}
            />
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800">
            <p className="text-gray-300 font-semibold text-center mb-4">
              Visit my social profile and get connected
            </p>
            <div className="flex justify-center space-x-4 text-gray-500 text-xl">
              {[
                {
                  Icon: Facebook,
                  link: "https://www.facebook.com/profile.php?id=61559426507421",
                  label: "Facebook",
                },
                {
                  Icon: Mail,
                  link: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmadraza.bablo1@gmail.com&su=Let's%20Connect!&body=Hi%20Ahmad,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.%20Let's%20discuss%20a%20project%20or%20collaboration!%0A%0ARegards,%0A[Your%20Name]",
                  label: "Gmail",
                },
                {
                  Icon: Linkedin,
                  link: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
                  label: "LinkedIn",
                },
              ].map(({ Icon, link, label }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  {/* Icon */}
                  <div className="p-3 rounded-full bg-gray-700/40 backdrop-blur-sm transition-all duration-500 transform group-hover:scale-110 group-hover:bg-yellow-500/10">
                    <Icon
                      size={22}
                      className="text-gray-400 transition-all duration-500 group-hover:text-yellow-500"
                    />
                  </div>

                  {/* Tooltip */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 text-sm text-yellow-400 font-semibold opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
