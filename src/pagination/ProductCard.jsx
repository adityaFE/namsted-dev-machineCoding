const ProductCard = ({ image, title }) => {
  return (
    <div className="product-item">
      <img src={image} height={150} width={150} />
      <h4>{title}</h4>
    </div>
  );
};
export default ProductCard;
