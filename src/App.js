import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import "./App.css";
import officeimg from "./assests/At the office-cuate.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000,
      mirror: true,
     });
    
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl mx-2 sm:mx-32 "
            data-aos="fade-up"
          >
            Let us solve your critical website development challenges
          </h1>
          <p
            className="mt-6 text-md mx-2 text-gray-600 sm:mx-64"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quam nihil
            enim maxime corporis cumque totam aliqui nam sint inventore optio
            modi neque laborum officiis necessitatibus.
          </p>
          <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
            <img
              src={officeimg}
              alt="Illustration"
              className="mx-auto w-4/5 sm:w-4/5 lg:w-1/3"
            />
          </div>
        </div>
      </header>
      <Features />
      <Footer/>
    </div>
  );
}

export default App;
