import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 2px solid #aaa;
  border-radius: 25px;
  margin: 10px;
  padding: 10px;
  width: 250px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  width: 200px;
  border: 1px solid #bfbfbf;
  border-radius: 25px;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;

const ProductItem = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage src={product.imgUrl} alt={product.title} />
      </ProductImageContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>₹{product.price}</ProductPrice>
    </ProductContainer>
  );
};

export default ProductItem;
