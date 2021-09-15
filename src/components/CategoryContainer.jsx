import styled from "styled-components";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: white;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 70px;
  }
`;

export default function CategoryContainer() {
  return (
    <Container>
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </Container>
  );
}
