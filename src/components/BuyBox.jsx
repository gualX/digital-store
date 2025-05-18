import React from 'react';
import PropTypes from 'prop-types';
import starIcon from '../assets/star-icon.png';

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  children,
}) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="flex flex-col gap-4">
      {/* Nome do produto */}
      <h1 className="text-[32px] text-[#1F1F1F] font-semibold leading-tight">
        {name}
      </h1>

      {/* Referência */}
      <p className="text-[12px] text-[#666666]">{reference}</p>

      {/* Avaliações */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-[#F6AA1C] rounded-lg px-3 py-1 text-[14px] text-white font-semibold">
          <span>{stars}</span>
          <img src={starIcon} alt="Estrela" className="w-3 h-3" />
        </div>
        <span className="text-[14px] text-[#8F8F8F]">({rating} avaliações)</span>
      </div>

      {/* Preços */}
      <div className="flex items-center gap-2">
        {hasDiscount ? (
          <>
            <span className="text-[32px] text-[#1F1F1F] font-semibold">
              R$ {priceDiscount}
            </span>
            <span className="text-[16px] text-[#C0C0C0] line-through">
              R$ {price}
            </span>
          </>
        ) : (
          <span className="text-[32px] text-[#1F1F1F] font-semibold">
            R$ {price}
          </span>
        )}
      </div>

      {/* Descrição do produto */}
      <div className="flex flex-col gap-1">
        <div className="text-[14px] text-[#474747]">{children}</div>
      </div>

      {/* Botão Adicionar ao carrinho */}
      <button className="w-55 mt-4 bg-[#F6AA1C] text-white text-[16px] font-semibold py-3 px-3 rounded-lg hover:bg-[#ed9a00] transition-colors">
        COMPRAR
      </button>
    </div>
  );
}

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  children: PropTypes.node,
};

export default BuyBox;
