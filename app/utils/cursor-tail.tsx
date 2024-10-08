"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine, } from "@tsparticles/react"; // Import necessary types
import { loadSlim } from "@tsparticles/slim"; // slim version for smaller bundle size

// Define the props interface (if needed)
interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Use the slim version to load particles for smaller bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particles loaded callback (use the correct type)
  const particlesLoaded = (container:  undefined): void => {
    console.log(container);
  };
interface ISourceOptions {
    background: {
        color: {
        value: string;
        };
    };
    fpsLimit: number;
    interactivity: {
        events: {
        onClick: {
            enable: boolean;
            mode: string;
        };
        onHover: {
            enable: boolean;
            mode: string;
        };
        };
        modes: {
        push: {
            distance: number;
            duration: number;
        };
        grab: {
            distance: number;
        };
        };
    };
    particles: {
        color: {
        value: string;
        };
        links: {
        color: string;
        distance: number;
        enable: boolean;
        opacity: number;
        width: number;
        };
        move: {
        direction: string;
        enable: boolean;
        outModes: {
            default: string;
        };
        random: boolean;
        speed: number;
        straight: boolean;
        };
        number: {
        density: {
            enable: boolean;
        };
        value: number;
        };
        opacity: {
        value: number;
        };
        shape: {
        type: string;
        };
        size: {
        value: {
            min: number;
            max: number;
        };
        };
    };
    detectRetina: boolean;
}
  // Define particle options with ISourceOptions type
  const options:ISourceOptions  = useMemo(
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
          direction: "none",
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

  return init ? <Particles id={props.id}  options={options} /> : null;
};

export default ParticlesComponent;
