import styled from "styled-components";
import Description from "../../components/Description";
import Navbar from "../../components/Navbar";
import BoxContents from "./BoxContents";
import Features from "./Features";
import ImageGallery from "./ImageGallery";

const Container = styled.div`
  padding: 4%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1440px) {
    padding: 11%;
  }
`;

export default function ProductDetail(props) {
  return (
    <>
      <Navbar />
      <Container>
        <Description
          img={props.data.image}
          new={props.data.new}
          name={props.data.name}
          description={props.data.description}
          price={props.data.price}
          detailed={true}
        />
        <Features text={props.data.features} />
        <BoxContents contents={props.data.includes} />
        <ImageGallery
          first={props.data.gallery.first}
          second={props.data.gallery.second}
          third={props.data.gallery.third}
        />
      </Container>
    </>
  );
}
