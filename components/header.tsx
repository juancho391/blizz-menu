export default function Header() {
  return (
    <header className="border-b border-yellow-400/20 backdrop-blur-sm bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo con efecto */}
          <div className="text-4xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              BLIZZ
            </span>
            <span className="text-white ml-1">BURGER</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-white hover:text-yellow-400 transition-colors font-semibold">
            Menu
          </a>
          <a href="#pronto" className="text-white hover:text-yellow-400 transition-colors font-semibold">
            Próximamente
          </a>
          <button className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95">
            Contacto
          </button>
        </nav>
      </div>
    </header>
  )
}
