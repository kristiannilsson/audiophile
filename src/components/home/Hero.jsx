import ProductButton from "../common/ProductButton";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("/assets/home/mobile/image-hero.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 90vh;
  text-align: center;
  padding: 6%;
  @media only screen and (min-width: 768px) {
    background-image: url("/assets/home/tablet/image-hero.jpg");
    padding: 10% 20% 0;
  }
  @media only screen and (min-width: 1440px) {
    background-image: url("/assets/home/desktop/image-hero.jpg");
    align-items: flex-start;
    padding: 10% 55% 10% 10%;
    text-align: left;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  letter-spacing: 1.29px;
  line-height: 40px;
  @media only screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
  }
`;

const Paragraph = styled.p`
  opacity: 0.75;
`;

const Overline = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 10px;
  opacity: 0.5;
  margin: 0;
`;

export default function Hero() {
  return (
    <Container>
      <Overline>NEW PRODUCT</Overline>
      <Heading>XX99 MARK II HEADPHONES</Heading>
      <Paragraph>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Paragraph>
      <ProductButton text="SEE PRODUCT" />
    </Container>
  );
}
