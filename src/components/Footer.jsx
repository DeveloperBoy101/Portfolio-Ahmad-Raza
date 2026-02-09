import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=61559426507421",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/DeveloperBoy101?tab=repositories",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ahmad_32_r/",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      // 👇 Yeh link direct Gmail Compose open karega
      link:
        "https://mail.google.com/mail/?view=cm&fs=1&to=ahmadraza.bablo1@gmail.com&su=Let's%20Connect!&body=Hi%20Ahmad,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.%20Let's%20discuss%20a%20project%20or%20collaboration!%0A%0ARegards,%0A[Your%20Name]",
    },
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group text-gray-400 hover:text-yellow-400 transition duration-300 text-2xl"
            >
              {social.icon}

              {/* Hover Label */}
              <span
                className="absolute left-1/2 transform -translate-x-1/2 -top-6 text-sm text-yellow-400 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300"
              >
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Ahmad Raza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
