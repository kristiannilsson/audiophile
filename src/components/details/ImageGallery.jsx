import styled from "styled-components";

const Picture = styled.picture`
  width: 100%;
  align-self: stretch;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Picture1 = styled(Picture)`
  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 1;
  }
`;

const Picture2 = styled(Picture)`
  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
`;

const Picture3 = styled(Picture)`
  @media only screen and (min-width: 768px) {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 100%;
  @media only screen and (min-width: 768px) {
    grid-template-columns: 40% 60%;
  }
`;

export default function ImageGallery(props) {
  return (
    <Container>
      <Picture1>
        <source srcSet={props.first.desktop} media="(min-width: 1440px)" />
        <source srcSet={props.first.tablet} media="(min-width: 768px)" />
        <Image src={props.first.mobile} alt="" />
      </Picture1>
      <Picture2>
        <source srcSet={props.second.desktop} media="(min-width: 1440px)" />
        <source srcSet={props.second.tablet} media="(min-width: 768px)" />
        <Image src={props.second.mobile} alt="" />
      </Picture2>
      <Picture3>
        <source srcSet={props.third.desktop} media="(min-width: 1440px)" />
        <source srcSet={props.third.tablet} media="(min-width: 768px)" />
        <Image src={props.third.mobile} alt="" />
      </Picture3>
    </Container>
  );
}
