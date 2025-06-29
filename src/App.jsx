import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showContent, setShowContent] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.4,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });

    // ✅ Section Scroll Animation
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (contactRef.current) {
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [showContent]);

  return (
    <>
      {/* Intro SVG Loader */}
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  WELCOME
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* Main Portfolio */}
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          {/* NavBar */}
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex space-x-8 bg-white px-6 py-2 rounded-full shadow-md text-sm font-medium">
              <button
                onClick={() =>
                  aboutRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </button>
              <button
                onClick={() =>
                  projectsRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </button>
              <button
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </button>
            </div>
          </div>

          {/* Floating Bottom Navigation */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#111] text-white rounded-full px-8 py-4 flex items-center justify-between gap-8 shadow-xl">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-yellow-400 transition transform hover:scale-125 duration-300"
            >
              <i className="ri-home-line text-2xl"></i>
            </button>
            <button
              onClick={() => scrollTo(aboutRef)}
              className="hover:text-yellow-400 transition transform hover:scale-125 duration-300"
            >
              <i className="ri-user-line text-2xl"></i>
            </button>
            <button
              onClick={() => scrollTo(projectsRef)}
              className="hover:text-yellow-400 transition transform hover:scale-125 duration-300"
            >
              <i className="ri-code-line text-2xl"></i>
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="hover:text-yellow-400 transition transform hover:scale-125 duration-300"
            >
              <i className="ri-mail-line text-2xl"></i>
            </button>
          </div>

          {/* Landing Section */}
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Visualist
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none -ml-40">Mohammed</h1>
                <h1 className="text-[10rem] leading-none ml-20">Waleed</h1>
                <h1 className="text-[10rem] leading-none -ml-40">Khawaja</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
                src="./professinal_waleed-re1movebg-preview.png"
                alt=""
              />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./Untitled_design__1_-removebg-preview.png"
                alt=""
              />
            </div>
          </div>

          {/* About Section */}
          <div
            ref={aboutRef}
            className="w-full h-screen flex items-center justify-center bg-[#111]"
          >
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./style.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-4xl -mt-10">Still Running,</h1>
                <h1 className="text-4xl -mt-1">Not Hunting</h1>
                <p className="mt-10 text-xl font-sans leading-relaxed text-white-800">
                  I'm a creative and detail-oriented individual with a strong
                  passion for visual storytelling and design. Whether it's
                  graphic designing, CG art, or video editing, I enjoy
                  transforming ideas into engaging visual content.
                </p>
                <a
                  href="/Resume-2025.pdf"
                  download
                  className="bg-yellow-500 px-10 py-10 text-black mt-10 text-4xl inline-block text-center transition duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div
            ref={projectsRef}
            className="w-full min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white py-16 px-8"
          >
            <h2 className="text-6xl mb-10">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
              {/* Card 1 */}
              <a
                href="https://github.com/Waleed1234-pixel/Eagle-Time-Square/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2a2a2a] shadow-lg rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition duration-300"
              >
                <img
                  src="./Eagle logo.jpg"
                  alt="Portfolio Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Professinal Experience
                  </h3>
                  <p className="text-sm mb-3 font-sans leading-relaxed text-white-800">
                    Handled social media content design and promotional video
                    editing as a Design Associate at Eagle Time Square, Citi
                    Housing, Gujranwala
                  </p>
                  <span className="text-xl text-yellow-800 text-center block mt-2 font-semibold transition duration-300 hover:text-blue-600 hover:scale-105">
                    CLICK TO VIEW
                  </span>
                </div>
              </a>

              {/* Card 2 */}
              <a
                href="https://github.com/Waleed1234-pixel/Final-Year-Project-Science-Seekrs-"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2a2a2a] shadow-lg rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition duration-300"
              >
                <img
                  src="./logo.JPG"
                  alt="Portfolio Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Final Year Project
                  </h3>
                  <p className="text-sm mb-3 font-sans leading-relaxed text-white-800">
                    Science Seerkrz is an interactive science learning app that
                    explains science concepts through engaging 2D and 3D
                    animations. Aimed at young students, the app uses animated
                    characters, storytelling, and visual effects to make complex
                    topics easy to understand.
                  </p>
                  <span className="text-xl text-yellow-800 text-center block mt-2 font-semibold transition duration-300 hover:text-blue-600 hover:scale-105">
                    CLICK TO VIEW
                  </span>
                </div>
              </a>

              {/* Card 3 */}
              <a
                href="https://github.com/Waleed1234-pixel/CREATIVE-MEDIA-PROJECTS"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2a2a2a] shadow-lg rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition duration-300"
              >
                <img
                  src="./ChatGPT Image Jun 28, 2025, 02_06_12 AM.png"
                  alt="Portfolio Project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    CREATIVE MEDIA PROJECTS
                  </h3>
                  <p className="text-sm mb-3 font-sans leading-relaxed text-white-800">
                    Showcases a diverse mix of creative projects including 3D
                    animation videos, brochure designs, and various multimedia
                    works. Highlights my passion for bringing ideas to life
                    through engaging visuals.
                  </p>
                  <span className="text-xl text-yellow-800 text-center block mt-2 font-semibold transition duration-300 hover:text-blue-600 hover:scale-105">
                    CLICK TO VIEW
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div
            ref={contactRef}
            className="w-full h-screen flex flex-col gap-6 items-center justify-center bg-[#000] text-white"
          >
            <h2 className="text-6xl">Contact Me</h2>
            <p>Email: muhammadwaleedkhawaja9@gmail.com</p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/Waleed1234-pixel">
                github.com/Waleed1234-pixel
              </a>
            </p>

            <p class="text-5xl font-medium text-center text-yellow-700 mt-8 tracking-wider">
              Reach Out, Let’s Design the Difference.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
