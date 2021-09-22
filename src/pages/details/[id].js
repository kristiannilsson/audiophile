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
import Presentation from "../../components/common/Presentation";
import Footer from "../../components/common/Footer";
import { useEffect, useState } from "react";

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
  const router = useRouter();
  const [id, setId] = useState();
  useEffect(() => {
    if (!router.isReady) return null;
    const newId = parseInt(router.query.id);
    if (newId < json.length && newId >= 0 && !typeof NaN) {
      setId(router.query.id);
    } else {
      setId(1);
    }
  }, [router.isReady]);
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
      {id && (
        <Container>
          <Description
            img={json[id].image}
            new={json[id].new}
            name={json[id].name}
            description={json[id].description}
            price={json[id].price}
            detailed={true}
          />
          <Features text={json[id].features} />
          <BoxContents contents={json[id].includes} />
          <ImageGallery
            first={json[id].gallery.first}
            second={json[id].gallery.second}
            third={json[id].gallery.third}
          />
          <OtherProducts products={json[id].others} />
          <CategoryContainer />
          <Presentation />
        </Container>
      )}
      <Footer />
    </>
  );
}
