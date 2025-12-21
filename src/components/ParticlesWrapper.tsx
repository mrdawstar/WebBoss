// components/ParticlesWrapper.tsx
"use client";

import ParticlesBackground from "./ParticlesBackground";

const ParticlesWrapper = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Particles z Twoimi ustawieniami */}
      <ParticlesBackground />
      
      {/* Overlay dla lepszej czytelności tekstu (opcjonalnie) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/70 to-white/60" />
    </div>
  );
};

export default ParticlesWrapper;