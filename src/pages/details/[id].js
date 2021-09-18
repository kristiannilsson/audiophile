import styled from "styled-components";
import CategoryContainer from "../../components/common/CategoryContainer";
import Description from "../../components/common/Description";
import Navbar from "../../components/common/Navbar";
import BoxContents from "../../components/details/BoxContents";
import Features from "../../components/details/Features";
import ImageGallery from "../../components/details/ImageGallery";
import OtherProducts from "../../components/details/OtherProducts";
import json from "../../data/data.json";
import { useRouter } from "next/router";
import Head from "next/head";

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
  const data = json[1];
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta
          name="description"
          content="Detailed overview of Audiophile products"
        />
      </Head>
      <Navbar />
      <Container>
        <Description
          img={data.image}
          new={data.new}
          name={data.name}
          description={data.description}
          price={data.price}
          detailed={true}
        />
        <Features text={data.features} />
        <BoxContents contents={data.includes} />
        <ImageGallery
          first={data.gallery.first}
          second={data.gallery.second}
          third={data.gallery.third}
        />
        <OtherProducts products={data.others} />
        <CategoryContainer />
      </Container>
    </>
  );
}
