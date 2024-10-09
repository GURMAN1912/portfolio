"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Import necessary types
import { loadSlim } from "@tsparticles/slim"; // slim version for smaller bundle size
import type { ISourceOptions } from "tsparticles-engine"; // Use the built-in type for options

interface ParticlesComponentProps {
  id?: string; // Optional id for the component
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id = "tsparticles" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch((error) => {
        console.error("Error initializing particles engine:", error);
      });
  }, []);

  // Particles loaded callback
  const particlesLoaded = (container:any): void => {
    console.log("Particles loaded", container);
  };

  // Define particle options with the correct type
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000", // Background color
        },
      },
      fpsLimit: 120, // Limit the frame rate
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse", // Repulse on click
          },
          onHover: {
            enable: true,
            mode: "grab", // Grab effect on hover
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Particle color
        },
        links: {
          color: "#FFFFFF", // Link color
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none", // Valid values are "none", "top", "bottom", etc.
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1, // Particle speed
          straight: false,
        },
        number: {
          density: {
            enable: true, // Enable density
          },
          value: 150, // Number of particles
        },
        opacity: {
          value: 1.0, // Particle opacity
        },
        shape: {
          type: "circle", // Particle shape
        },
        size: {
          value: { min: 1, max: 3 }, // Size of particles
        },
      },
      detectRetina: true, // Retina support
    }),
    []
  );

  return init ? <Particles id={id} options={options} loaded={particlesLoaded} /> : null;
};

export default ParticlesComponent;
