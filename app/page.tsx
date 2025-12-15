"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/hero-section";
import MenuSection from "@/components/menu-section";
import Header from "@/components/header";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Fondo animado con efecto dinámico */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>

        {/* Elementos de fondo animados */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Gradiente animado sutil */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(45deg, transparent 0%, rgba(234, 179, 8, 0.1) 25%, transparent 50%, rgba(239, 68, 68, 0.1) 75%, transparent 100%)",
            backgroundSize: "400% 400%",
            animation: "gradientShift 15s ease infinite",
          }}
        ></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        <Header />
        <HeroSection isLoaded={isLoaded} />
        <MenuSection />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
