import styled from "styled-components";
import ProductButton from "../components/ProductButton";
import Counter from "../components/Counter";
import Overline from "../components/Overline";

const Container = styled.div`
  padding: 4%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ListCount = styled.span`
  color: var(--sienna);
  margin-right: 1rem;
`;

export default function ProductDetail(props) {
  const contentList = props.data.includes.map((item) => (
    <li key={item.item}>
      <p>
        <ListCount>{item.quantity}x</ListCount>
        {item.item}
      </p>
    </li>
  ));

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

  return (
    <Container>
      <ProductImage src={props.data.image.mobile} alt={props.data.name} />
      {props.data.new && <Overline />}
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <b>{priceFormatter(props.data.price)}</b>
      <Counter />
      <ProductButton />
      <h2>FEATURES</h2>
      <p>{props.data.features}</p>
      <h2>IN THE BOX</h2>
      <ul>{contentList}</ul>
    </Container>
  );
}
