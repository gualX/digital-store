import React from 'react';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing, { allProducts } from '../components/ProductListing';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';

const baseUrl = import.meta.env.BASE_URL;

function ProductViewPage() {
  const product = {
    name: 'Tênis Nike Jordan - Masculino',
    reference: 'Casual | Nike | REF: JN2023BR',
    stars: 4.7,
    rating: 90,
    price: 300,
    priceDiscount: 150,
    images: [
      { src: `${baseUrl}product-thumb-1.jpeg` },
      { src: `${baseUrl}product-thumb-2.jpeg` },
      { src: `${baseUrl}product-thumb-3.jpeg` },
    ],
    description:
      'Tênis de alta performance e estilo icônico. Perfeito para uso esportivo ou casual. Design durável com excelente suporte.',
  };

  const recommendedProducts = allProducts.slice(1, 5);

  return (
    <>
      {/* Seção principal com galeria e infos do produto */}
      <div className="bg-[#F5F5F5] flex flex-col md:flex-row gap-8 p-4 md:p-12">
        {/* Galeria */}
        <div className="w-full md:w-1/2">
          <Gallery images={product.images} radius="12px" />
        </div>

        {/* BuyBox com infos do produto */}
        <div className="w-full md:w-1/2 flex flex-col justify-start gap-4">
          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
          >
            {/* Descrição do Produto */}
            <div className="flex flex-col gap-2">
              <p className="text-[14px] text-[#474747] font-semibold">Descrição do produto</p>
              <p className="text-[14px] text-[#474747]">{product.description}</p>
            </div>

            {/* Opções de Tamanho */}
            <div className="mt-4">
              <p className="text-[14px] text-[#474747] font-semibold mb-2">Tamanho</p>
              <ProductOptions
                options={['39', '40', '41', '42']}
                radius="5px"
                shape="square"
                type="text"
              />
            </div>

            {/* Opções de Cor */}
            <div className="mt-4">
              <p className="text-[14px] text-[#474747] font-semibold mb-2">Cor</p>
              <ProductOptions
                options={['#000000', '#FFFFFF', '#FF0000']}
                shape="circle"
                type="color"
              />
            </div>
          </BuyBox>
        </div>
      </div>

      {/* Produtos recomendados */}
      <div className="bg-[#F5F5F5] px-4 md:px-12 pb-12">
        <Section title="Produtos recomendados" titleAlign="left" />
        <ProductListing products={recommendedProducts} />
      </div>
    </>
  );
}

export default ProductViewPage;
