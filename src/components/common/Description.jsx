import styled from "styled-components";
import Counter from "./Counter";
import ProductButton from "./ProductButton";

const Container = styled.div`
  text-align: ${(props) => (props.detailed ? "left" : "center")};
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 60%;
    padding-left: 4.6rem;
    justify-content: center;
  }
  @media only screen and (min-width: 1440px) {
    width: 50%;
    padding-left: 10rem;
  }
`;

const Overline = styled.p`
  color: var(--sienna);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 10px;
  width: 100%;
  margin-bottom: 0;
`;

const Picture = styled.picture`
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 40%;
  }
  @media only screen and (min-width: 1440px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    max-height: 700px;
    max-width: 409px;
  }
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  margin-bottom: 2rem;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.detailed ? "flex-start" : "center")};
`;

//Inserts a comma before the last 3 digits if the price is more than 1000.
const priceFormatter = (price) => {
  const priceString = price.toString();
  const len = priceString.length;
  if (price >= 1000) {
    return `$ ${priceString.substring(0, len - 3)},${priceString.substring(
      len - 3
    )}`;
  } else {
    return `$${priceString}`;
  }
};

export default function Description(props) {
  return (
    <Container detailed={props.detailed}>
      <Picture>
        <source srcSet={props.img.desktop} media="(min-width: 1440px)" />
        <source srcSet={props.img.tablet} media="(min-width: 768px)" />
        <Image src={props.img.mobile} alt="" />
      </Picture>
      <DescriptionContainer>
        {props.new && <Overline>NEW PRODUCT</Overline>}
        {props.detailed ? <h1>{props.name}</h1> : <h2>{props.name}</h2>}
        <p>{props.description}</p>
        {props.detailed && <Price>{priceFormatter(props.price)}</Price>}
        <ButtonContainer detailed={props.detailed}>
          {props.detailed && <Counter />}
          <ProductButton text="ADD TO CART" />
        </ButtonContainer>
      </DescriptionContainer>
    </Container>
  );
}

Description.defaultProps = {
  detailed: false,
};
