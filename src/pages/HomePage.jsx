// src/pages/HomePage.jsx
import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing, { allProducts } from "../components/ProductListing";

const images = [
  { src: "/home-slide-7.jpeg" },
  { src: "/home-slide-6.jpeg" },
  { src: "/home-slide-2.jpeg" },
  { src: "/home-slide-4.jpeg" },
  { src: "/home-slide-8.jpeg" },
  { src: "/home-slide-5.jpeg" },
];

// Filtra os produtos em alta (highDemand === true)
const featuredProducts = allProducts.filter((product) => product.highDemand);

function HomePage() {
  return (
    <div className="w-full">
      {/* Galeria de slides */}
      <Gallery images={images} width="100%" radius="0px" />

      {/* Coleções em destaque */}
      <div className="bg-[#F5F5F5] py-10">
        <Section title="Coleções em destaque" titleAlign="left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-27 mt-7">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="relative w-full h-auto rounded-[4px] overflow-hidden group"
              >
                <span className="absolute top-3 left-7 inline-block bg-[#f0ff8c] text-blue-900 font-semibold rounded-xl px-3 py-2 text-sm shadow">
                  30% OFF
                </span>
                <img
                  src={`/collection-${num}.png`}
                  alt={`Coleção ${num}`}
                  className="w-full h-auto object-cover rounded-[4px]"
                />
                <button className="absolute bottom-[38px] left-[27px] w-[150px] h-[47px] bg-[#F5F5F5] text-[#C92071] text-base px-4 py-2 rounded-md font-bold shadow hover:bg-[#B5B6F2] hover:text-white transition-all duration-300">
                  Comprar
                </button>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Produtos em alta */}
      <div className="bg-[#F5F5F5] py-2">
        <Section title="Produtos em alta" titleAlign="left">
          <div className="w-full px-4 md:px-12">
            <div className="max-w-screen-xl mx-auto">
              <ProductListing products={featuredProducts} />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
