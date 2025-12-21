// components/ParticlesBackgroundComplete.tsx
"use client";

import { useEffect, useRef } from "react";

const ParticlesBackgroundComplete = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesLoaded = useRef(false);

  useEffect(() => {
    const checkParticlesLoaded = () => {
      if (typeof window !== "undefined" && (window as any).particlesJS) {
        initParticles();
      } else {
        setTimeout(checkParticlesLoaded, 100);
      }
    };

    const initParticles = () => {
      if (particlesLoaded.current) return;
      
      if (typeof window !== "undefined" && (window as any).particlesJS) {
        (window as any).particlesJS("particles-js", {
          particles: {
            number: { 
              value: 80, 
              density: { enable: true, value_area: 800 } 
            },
            color: { value: "#8b5cf6" }, // Fioletowy
            opacity: { value: 0.6 },
            size: { value: 3.5, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#d946ef", // Różowy
              opacity: 0.9,
              width: 1.2
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              out_mode: "out"
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
        
        particlesLoaded.current = true;
        console.log("✅ Particles loaded");
      }
    };

    if (!(window as any).particlesJS) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = checkParticlesLoaded;
      document.head.appendChild(script);
    } else {
      checkParticlesLoaded();
    }

    return () => {
      const container = document.getElementById("particles-js");
      if (container) container.innerHTML = "";
      particlesLoaded.current = false;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -50,
        pointerEvents: 'none',
        overflow: 'hidden',
        // GRADIENT FIOŁETOWO-RÓŻOWY
        background: 'linear-gradient(135deg, #2b00ffcd 1%, #ffffffff 51%, #ff9500a9 100%)',
      }}
    >
      <div 
        id="particles-js" 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }} 
      />
      
      {/* Delikatny overlay gradientowy */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(245, 243, 255, 0.7) 0%, rgba(253, 244, 255, 0.5) 50%, rgba(245, 243, 255, 0.7) 100%)',
      }} />
      
      {/* Opcjonalnie możesz dodać jeszcze jeden gradient dla głębi */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, rgba(244, 114, 182, 0.05) 50%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      
      <style>
        {`
          @media (max-width: 768px) {
            html {
              touch-action: manipulation;
              overflow-x: hidden;
            }
            
            body {
              overflow-x: hidden !important;
              position: relative;
              width: 100vw;
            }
            
            * {
              max-width: 100vw;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ParticlesBackgroundComplete;