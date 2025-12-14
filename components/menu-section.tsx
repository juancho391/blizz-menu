"use client";

import { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  comboPrice: number;
  image: string;
  ingredients: string[];
}

export default function MenuSection() {
  const productsData: Product[] = [
    {
      id: 1,
      name: "Blizz Smash",
      description: "Deliciosa Smash Burguer",
      price: 20000,
      image: "/smash.png",
      ingredients: [
        "Pan brioche",
        "Carne De Res",
        "Queso cheddar",
        "Salsa de la casa",
        "Pepinillos",
        "Cebolla Caramelizada",
      ],
      comboPrice: 25000,
    },
    {
      id: 2,
      name: "Fresh Blizz",
      description: "Deliciosa Fresh Burguer clasica",
      price: 18000,
      image: "/freshBlizz.png",
      ingredients: [
        "Pan brioche",
        "Carne Angus",
        "Queso",
        "Tomate",
        "Lechuga",
        "Salsa de la casa",
        "Cebolla Caramelizada",
      ],
      comboPrice: 24000,
    },
    {
      id: 3,
      name: "Tropical Blizz",
      description: "Deliciosa Tropical Burguer",
      price: 20000,
      image: "/tropical.png",
      ingredients: [
        "Pan brioche",
        "Carne Angus",
        "Queso Americano",
        "Piña en rodajas",
        "Salsa de la casa",
        "Tocineta",
      ],
      comboPrice: 25000,
    },
  ];
  const [products, setProducts] = useState<Product[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(productsData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="text-center text-gray-400">Cargando menú...</div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
          NUESTRO{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            MENÚ
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-full max-w-md transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setIsHovered(product.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {/* Brillo de fondo dinámico */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-red-500/20 to-yellow-400/20 rounded-3xl blur-2xl transition-all duration-300 ${
                isHovered === product.id
                  ? "opacity-100 scale-110"
                  : "opacity-50 scale-100"
              }`}
            ></div>

            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 border-2 border-yellow-400/50 hover:border-red-500/50 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300">
              {/* Imagen */}
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Información */}
              <h3 className="text-3xl font-black text-white mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {product.description}
              </p>

              <div className="space-y-3 mb-6">
                {product.ingredients.map((ingredient, idx) => (
                  <p
                    key={idx}
                    className="text-yellow-400 font-semibold flex items-center gap-2"
                  >
                    <span className="text-red-500">★</span> {ingredient}
                  </p>
                ))}
              </div>

              {/* Precio */}
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-400/30 rounded-xl">
                <p className="text-gray-300 text-sm">Precio</p>
                <p className="text-4xl font-black text-red-500">
                  ${product.price.toFixed(0)}
                </p>
                <p className="text-gray-300 text-sm">Con Papas + Gaseosa</p>
                <p className="text-4xl font-black text-yellow-400">
                  ${product.comboPrice.toFixed(0)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
