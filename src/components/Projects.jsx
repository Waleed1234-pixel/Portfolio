import React from "react";

function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-10">
      <h1 className="text-5xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl mb-2">Solar System Game</h2>
          <p>Drag and drop planets into their orbits using Scratch.</p>
          <a
            href="https://example.com"
            className="text-blue-400 mt-2 inline-block"
          >
            View Project
          </a>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl mb-2">Water Cycle Animation</h2>
          <p>Frog explains evaporation, condensation, and precipitation!</p>
          <a
            href="https://example.com"
            className="text-blue-400 mt-2 inline-block"
          >
            Watch Video
          </a>
        </div>
        {/* Add more project cards */}
      </div>
    </div>
  );
}

export default Projects;
