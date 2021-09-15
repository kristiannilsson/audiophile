import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
  background-color: white;
  width: 100%;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 32%;
  }

  &:before {
    content: "";
    width: 100%;
    height: 70%;
    z-index: -1;
    background-color: var(--seashell);
    position: absolute;
    border-radius: 8px;
    bottom: 0;
  }
`;

const CategoryImage = styled.img`
  width: 30%;
  max-width: 150px;
  @media only screen and (min-width: 768px) {
    width: 70%;
    max-width: 220px;
  }
`;

const ShopButton = styled.button`
  align-items: center;
  display: flex;
  height: 60px;
`;

const ShopText = styled.span`
  color: var(--black);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-right: 0.5rem;
  opacity: 0.5;
  height: 30%;

  &:hover {
    color: var(--sienna);
    opacity: 1;
  }
`;

const CategoryText = styled.p`
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
`;

export default function Category(props) {
  return (
    <Container>
      <CategoryImage
        src={`./assets/shared/desktop/image-category-thumbnail-${props.category}.png`}
        alt=""
      />
      <CategoryText>{props.category}</CategoryText>
      <ShopButton>
        <ShopText>SHOP</ShopText>
        <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </ShopButton>
    </Container>
  );
}

Category.defaultProps = {
  category: "Headphones",
};
