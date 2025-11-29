"use client";

import { useEffect, useState } from "react";

interface HeroSectionProps {
  isLoaded: boolean;
}

export default function HeroSection({ isLoaded }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsVisible(true);
    }
  }, [isLoaded]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Contenido de texto */}
        <div className="space-y-6 order-2 md:order-1">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight text-white">
              <span className="block">¡EXPLOSIÓN</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                DE SABOR
              </span>
            </h1>
          </div>

          <p
            className={`text-lg md:text-xl text-gray-300 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Bienvenido a{" "}
            <span className="font-bold text-yellow-400">Blizz Burger</span>,
            donde la calidad y el sabor se encuentran con la velocidad. Cada
            hamburguesa es una experiencia única.
          </p>
        </div>

        {/* Imagen de hamburguesa con animación flotante */}
        <div
          className={`flex justify-center items-center order-1 md:order-2 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Glow de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-yellow-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

            {/* Contenedor de hamburguesa con animación flotante */}
            <div className="absolute inset-0 flex items-center justify-center animate-float ">
              <img
                src="/smash.png"
                alt="Blizz Burger"
                className="w-full h-full object-contain drop-shadow-2xl "
              />
            </div>

            {/* Partículas flotantes decorativas */}
            <div className="absolute inset-0">
              <div
                className="absolute top-10 left-5 w-4 h-4 bg-yellow-400 rounded-full opacity-70 animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-20 right-10 w-3 h-3 bg-red-500 rounded-full opacity-70 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 right-0 w-3 h-3 bg-yellow-300 rounded-full opacity-60 animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
