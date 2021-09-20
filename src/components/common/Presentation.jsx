import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.h2`
  margin-bottom: 16px;
  margin-top: 40px;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
    letter-spacing: 1.43px;
    line-height: 44px;
    margin-top: 60px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

const Picture = styled.picture`
  width: 100%;
  @media only screen and (min-width: 1440px) {
    width: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  margin-top: 40px;
  text-align: center;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    text-align: left;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media only screen and (min-width: 1440px) {
    width: 50%;
    padding-right: 125px;
  }
`;

const Span = styled.span`
  color: var(--alabaster);
`;

export default function Presentation() {
  return (
    <Container>
      <Picture>
        <source
          srcSet="/assets/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/assets/shared/tablet/image-best-gear.jpg"
          media="(min-width: 768px)"
        />
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="Man listening to headphones"
        />
      </Picture>
      <Description>
        <Heading>
          BRINGING YOU THE <Span>BEST</Span> AUDIO GEAR
        </Heading>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Description>
    </Container>
  );
}
