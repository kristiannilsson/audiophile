import styled from "styled-components";

const FeaturesContainer = styled.div`
  margin-top: 6rem;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    width: 60%;
  }
`;

export default function Features(props) {
  return (
    <FeaturesContainer>
      <h2>FEATURES</h2>
      <p>{props.text}</p>
    </FeaturesContainer>
  );
}
