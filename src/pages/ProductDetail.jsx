import styled from "styled-components";
import ProductButton from "../components/ProductButton";
import Counter from "../components/Counter";
import Description from "../components/Description";

const Container = styled.div`
  padding: 4%;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.29px;
  margin-bottom: 2rem;
`;

const ListCount = styled.span`
  color: var(--sienna);
  margin-right: 1.5rem;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  margin-top: 6rem;
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

export default function ProductDetail(props) {
  const contentList = props.data.includes.map((item) => (
    <li key={item.item}>
      <p>
        <ListCount>{item.quantity}x</ListCount>
        {item.item}
      </p>
    </li>
  ));
  return (
    <Container>
      <Description
        img={props.data.image}
        new={props.data.new}
        name={props.data.name}
        description={props.data.description}
      />
      <Price>{priceFormatter(props.data.price)}</Price>
      <Counter />
      <ProductButton />
      <SubHeading>FEATURES</SubHeading>
      <p>{props.data.features}</p>
      <SubHeading>IN THE BOX</SubHeading>
      <ul>{contentList}</ul>
    </Container>
  );
}
