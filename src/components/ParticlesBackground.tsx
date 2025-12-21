// components/ParticlesBackgroundComplete.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

const ParticlesBackgroundComplete = () => {
  useEffect(() => {
    const initParticles = () => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#060075" },
            opacity: { value: 0.6 },
            size: { value: 3.5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#5a00ff",
              opacity: 0.4,
              width: 1.2
            },
            move: {
              enable: true,
              speed: 2, // WOLNIEJ
              direction: "none",
              out_mode: "out"
            }
          },
          interactivity: {
            detect_on: "window", // WAŻNE: window zamiast canvas
            events: {
              onhover: {
                enable: true,
                mode: "repulse" // ODSYŁANIE
              },
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              repulse: {
                distance: 150, // Jak daleko się odsuwają
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
        
        console.log("✅ Particles: SLOW movement + REPULSE on hover");
      } else {
        setTimeout(initParticles, 100);
      }
    };

    setTimeout(initParticles, 500);

    return () => {
      const container = document.getElementById("particles-js");
      if (container) container.innerHTML = "";
    };
  }, []);

  // Inline styles zamiast osobnego CSS
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -50,
    pointerEvents: 'none',
  };

  const particlesStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#f9f0ff', // Twój kolor
    backgroundImage: 'url("")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.4) 100%)',
  };

  return (
    <div style={containerStyle}>
      <div id="particles-js" style={particlesStyle} />
      <div style={overlayStyle} />
      
  
    </div>
  );
};

export default ParticlesBackgroundComplete;