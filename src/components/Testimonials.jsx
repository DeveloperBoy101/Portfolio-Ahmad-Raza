import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

const reviews = [
  {
    id: 1,
    quote:
      "Muhammed transformed our outdated company site into a fast, responsive web app. He improved page load times, made the UI much cleaner, and integrated Google Analytics so we can actually track conversions.",
    name: "Richard Miles",
    title: "Chairman, BrightWave Solutions",
    photoUrl: "./Testi1.webp",
  },
  {
    id: 2,
    quote:
      "Excellent communication from day one. Ahmad built our marketing landing page with pixel-perfect design, SEO best practices, and a CMS so our team can update content without a developer..",
    name: "Vesta Shufelt",
    title: "Executive Director, MarketRise",
    photoUrl: "./Test2.jpg",
  },
  {
    id: 3,
    quote:
      "We hired him for a full-stack rebuild of our e-commerce site. The checkout flow is now much smoother, images are optimized, and the admin panel he implemented makes order management simple.",
    name: "Joseph Alves",
    title: "Managing Director, Harbor Retail",
    photoUrl: "./Test4.jpg",
  },
];


  const ReviewCard = ({ quote, name, title, photoUrl, delay }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col items-center p-4"
    >
      <div
        className="bg-gray-800 p-6 rounded-lg shadow-2xl mb-8 relative w-full max-w-sm
                    transition-all duration-500 ease-in-out
                    hover:shadow-yellow-400/50 hover:scale-[1.02] cursor-pointer"
      >
        <p className="text-gray-300 italic text-sm md:text-base">"{quote}"</p>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-800 translate-y-full"></div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay={delay + 200}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg transition-all duration-300 ease-in-out hover:border-yellow-300"
      >
        <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="mt-4 text-center">
        <p
          data-aos="fade-up"
          data-aos-delay={delay + 300}
          className="text-white text-lg font-semibold tracking-wide"
        >
          {name}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay={delay + 400}
          className="text-yellow-500 text-sm opacity-80"
        >
          {title}
        </p>
      </div>
    </div>
  );

  return (
    <section id="" className="py-16 px-4 md:px-12 relative overflow-hidden">
      <div className="text-center mb-12 relative">
        <h2
          data-aos="zoom-in"
          className="text-6xl md:text-8xl font-extrabold text-gray-800 opacity-20 uppercase tracking-widest absolute inset-x-0 lg:-mt-3 pointer-events-none"
        >
          REVIEWS
        </h2>

        <h3
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest relative inline-block pb-1 sm:mt-4 mt-4"
        >
          REACTIONS
          <span className="block h-1 w-16 mx-auto bg-yellow-500 mt-1"></span>
        </h3>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-out p-4 rounded-xl"
      >
        {reviews.map((review, i) => (
          <ReviewCard
            key={review.id}
            quote={review.quote}
            name={review.name}
            title={review.title}
            photoUrl={review.photoUrl}
            delay={i * 200}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
