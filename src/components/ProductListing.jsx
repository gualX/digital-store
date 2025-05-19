import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

export const allProducts = [
  {
    id: 1,
    name: "Tênis",
    model: "Nike Jordan - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-1.jpeg`,
    price: 300,
    priceDiscount: 150,
    brand: "Nike",
    category: "Esporte e Lazer",
    gender: "Masculino",
    condition: "Novo",
    available: true,
    highDemand: true, // produto em alta
  },
  {
    id: 2,
    name: "Tênis",
    model: "Nike Jordan - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-1.jpeg`,
    price: 300,
    priceDiscount: 150,
    brand: "Nike",
    category: "Esporte e Lazer",
    gender: "Masculino",
    condition: "Novo",
    available: true,
    highDemand: true,
  },
  {
    id: 3,
    name: "Tênis",
    model: "Levi's Urban - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-3.jpeg`,
    price: 120,
    brand: "Levi's",
    category: "Casual",
    gender: "Masculino",
    condition: "Usado",
    available: true,
    highDemand: false,
  },
  {
    id: 4,
    name: "Tênis",
    model: "Levi's Urban - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-3.jpeg`,
    price: 120,
    brand: "Levi's",
    category: "Casual",
    gender: "Masculino",
    condition: "Usado",
    available: true,
    highDemand: false,
  },
  {
    id: 5,
    name: "Tênis",
    model: "Nike Air - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-2.jpeg`,
    price: 280,
    brand: "Nike",
    category: "Casual",
    gender: "Masculino",
    condition: "Novo",
    available: true,
    highDemand: true,
  },
  {
    id: 6,
    name: "Tênis",
    model: "Nike Air - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-2.jpeg`,
    price: 280,
    brand: "Nike",
    category: "Casual",
    gender: "Masculino",
    condition: "Novo",
    available: true,
    highDemand: true,
  },
 {
    id: 7,
    name: "Tênis",
    model: "Karhu Synchron - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-4.jpeg`,
    price: 230,
    brand: "Karhu",
    category: "Corrida",
    gender: "Masculino",
    condition: "Novo",
    available: true,
    highDemand: true,
  },
   {
    id: 8,
    name: "Tênis",
    model: "Karhu Synchron - Masculino",
    image: `${import.meta.env.BASE_URL}product-thumb-4.jpeg`,
    price: 230,
    brand: "Karhu",
    category: "Corrida",
    gender: "Masculino",
    condition: "Novo",
    available: true,
    highDemand: true,
  },
   {
    id: 9,
    name: "Tênis",
    model: "Nike SuperRep - Unisex",
    image: `${import.meta.env.BASE_URL}product-thumb-5.jpeg`,
    price: 180,
    brand: "Nike",
    category: "Corrida",
    gender: "Unisex",
    condition: "Novo",
    available: true,
    highDemand: true,
  },
   {
    id: 10,
    name: "Tênis",
    model: "Nike SuperRep - Unisex",
    image: `${import.meta.env.BASE_URL}product-thumb-5.jpeg`,
    price: 180,
    brand: "Nike",
    category: "Corrida",
    gender: "Unisex",
    condition: "Novo",
    available: true,
    highDemand: true,
  },

];

function ProductListing({ products, columns = 4, gapY = "gap-y-10", className = "" }) {
  const gridColsDesktop = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div
      className={`grid grid-cols-2 ${gridColsDesktop[columns]} gap-x-4 ${gapY} mt-6 px-4 ${className}`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          model={product.model}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      model: PropTypes.string,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceDiscount: PropTypes.number,
    })
  ).isRequired,
  columns: PropTypes.oneOf([2, 3, 4]),
};

export default ProductListing;