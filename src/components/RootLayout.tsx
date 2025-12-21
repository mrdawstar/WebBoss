// components/RootLayout.tsx
import { ReactNode } from "react";
import AnimatedBackground from "./ParticlesBackground";
import { Outlet } from "react-router-dom"; // ← DODAJ IMPORT

const RootLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Tło na CAŁEJ stronie */}
      <AnimatedBackground />
      
      {/* Treść strony - ZAWSZE nad tłem */}
      <div className="relative z-10">
        <Outlet /> {/* ← TO WYŚWIETLI AKTYWNĄ STRONĘ */}
      </div>
    </div>
  );
};

export default RootLayout;