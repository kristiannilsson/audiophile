import styled from "styled-components";

const ListCount = styled.span`
  color: var(--sienna);
  margin-right: 1.5rem;
  font-weight: 700;
`;

const Container = styled.div`
  margin: 6rem 0;
  width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 8.5rem;
    width: 20%;
  }
`;

const Paragraph = styled.p`
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const SubHeading = styled.h2`
  width: 50%;
  @media only screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export default function BoxContents(props) {
  const contentList = props.contents.map((item) => (
    <li key={item.item}>
      <Paragraph className="no-margin">
        <ListCount>{item.quantity}x</ListCount>
        {item.item}
      </Paragraph>
    </li>
  ));
  return (
    <Container>
      <SubHeading>IN THE BOX</SubHeading>
      <ul>{contentList}</ul>
    </Container>
  );
}
