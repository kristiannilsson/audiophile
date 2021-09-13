import styled from "styled-components";

const DescriptionContainer = styled.div`
  text-align: ${(props) => (props.centered ? "center" : "left")};
`;

const Overline = styled.p`
  font-size: 14px;
  letter-spacing: 10px;
  color: var(--sienna);
`;

const Image = styled.img`
  width: 100%;
  height: auto;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`;

export default function Description(props) {
  return (
    <DescriptionContainer centered={props.centered}>
      <picture>
        <source srcset={props.img.tablet} media="(min-width: 768px)" />
        <Image src={props.img.mobile} alt="" />
      </picture>
      {props.new && <Overline>NEW PRODUCT</Overline>}
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </DescriptionContainer>
  );
}

Description.defaultProps = {
  centered: false,
};
