// src/components/ProductCard.jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard({ id, name, model, image, price, priceDiscount }) {
  return (
    <Link to={`/produto/${id}`} className="w-full max-w-[292px] mx-auto block">
      {/* Imagem com rótulo sobreposto */}
      <div className="relative mb-4">
        {priceDiscount && (
          <span className="absolute top-5 left-5 inline-block bg-[#e5f57c] text-blue-900 font-semibold rounded-xl px-3 py-2 text-sm">
            50% OFF
          </span>
        )}
        <img
          src={image}
          alt={name}
          width={292}
          height={321}
          className="object-cover rounded"
        />
      </div>

      <h3 className="text-sm font-semibold text-gray-500 mb-1">{name}</h3>
      {model && <p className="text-[24px] text-gray-700 mb-2">{model}</p>}

      {priceDiscount ? (
        <div className="flex items-center gap-x-4">
          <span className="text-[#8F8F8F] text-[24px] line-through">
            R$ {price.toFixed(2).replace(".", ",")}
          </span>
          <span className="text-[#1F1F1F] text-[24px] font-bold">
            R$ {priceDiscount.toFixed(2).replace(".", ",")}
          </span>
        </div>
      ) : (
        <span className="text-[#1F1F1F] text-[24px] font-bold">
          R$ {price.toFixed(2).replace(".", ",")}
        </span>
      )}
    </Link>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  model: PropTypes.string,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
};

export default ProductCard;
