"use client"

import { useEffect, useState } from "react"

export default function ComingSoonSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="pronto" className="py-20 px-4 mb-20">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-red-500/10 rounded-3xl blur-2xl"></div>

          {/* Contenido */}
          <div className="relative bg-gradient-to-br from-yellow-400/5 to-red-500/5 border-2 border-yellow-400/30 rounded-3xl p-12 md:p-16 backdrop-blur-sm text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-400/20 border border-yellow-400/50 rounded-full">
              <span className="text-yellow-400 font-bold text-sm">⚡ PRÓXIMAMENTE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              ¡Prepárate! <br />
              <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
                Nuevas explosiones de sabor
              </span>
              <br />
              llegarán muy pronto
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Estamos trabajando en creaciones alucinantes que te volarán la mente. Suscríbete para ser de los primeros
              en probar nuestras nuevas combinaciones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Tu correo"
                className="px-6 py-3 bg-black/50 border border-yellow-400/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-red-500 hover:from-yellow-300 hover:to-red-600 text-black font-bold rounded-xl transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
                Notificarme
              </button>
            </div>

            {/* Iconos decorativos */}
            <div className="mt-12 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🍟</div>
                <p className="text-yellow-400 font-bold text-sm">Papas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🥤</div>
                <p className="text-yellow-400 font-bold text-sm">Bebidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
