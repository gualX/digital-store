// src/components/ProductDetails.jsx
import PropTypes from 'prop-types';

function ProductDetails({ product }) {
  return (
    <div className="text-center ">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-pink-600 text-xl font-semibold">{product.price}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductDetails;
