import styled from "styled-components";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 4%;
  height: 90vh;
  overflow: scroll;
  background-color: white;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 300px;
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
