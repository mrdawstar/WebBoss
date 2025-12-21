// components/GlobalLayout.tsx - uproszczony
import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className="relative min-h-screen w-full">
      {/* ParticlesBackground jest teraz w app.tsx */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlobalLayout;