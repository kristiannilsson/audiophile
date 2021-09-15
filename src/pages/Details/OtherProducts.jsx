import styled from "styled-components";
import ProductButton from "../../components/ProductButton";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  @media only screen and (min-width: 768px) {
    width: 32%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Picture = styled.picture`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.h2`
  text-align: center;
  margin-top: 150px;
  width: 100%;
  font-size: 32px;
  letter-spacing: 1.14px;
`;

const Name = styled.h2`
  margin: 30px 0;
`;

export default function OtherProducts(props) {
  const products = props.products.map((item) => (
    <Item>
      <Picture>
        <source srcSet={item.image.desktop} media="(min-width: 1440px)" />
        <source srcSet={item.image.tablet} media="(min-width: 768px)" />
        <Image src={item.image.mobile} alt="" />
      </Picture>
      <Name>{item.name}</Name>
      <ProductButton text={"SEE PRODUCT"} />
    </Item>
  ));
  return (
    <>
      <Heading>YOU MAY ALSO LIKE</Heading>
      <Container>{products}</Container>
    </>
  );
}
