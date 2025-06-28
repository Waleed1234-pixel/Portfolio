// src/pages/PortfolioProject.jsx
import React from "react";

const PortfolioProject = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-6">Portfolio Website</h1>
      <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl">
        This project is a sleek, animated portfolio site built using React,
        TailwindCSS, and GSAP. Below are the visuals and walkthrough of the
        project.
      </p>

      {/* Screenshots Section */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-3xl font-semibold mb-4">📸 Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/screenshots/portfolio1.png"
            alt="Screenshot 1"
            className="w-full rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/portfolio2.png"
            alt="Screenshot 2"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-4">🎥 Demo Video</h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <video controls className="w-full h-full">
            <source src="/videos/portfolio_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
