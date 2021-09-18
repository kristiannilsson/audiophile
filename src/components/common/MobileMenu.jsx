import CategoryContainer from "./CategoryContainer";
import styled from "styled-components";

const Container = styled.div`
  animation: ${(props) => (props.open ? "slideIn" : "slideOut")} 0.7s forwards;
  background-color: var(--white);
  height: 90vh;
  overflow: auto;
  padding: 4%;
  position: absolute;
  width: 100%;
  z-index: 2;

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      visibility: hidden;
    }
    to {
      transform: translateY(0);
      visibility: visible;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(0);
      visibility: hidden;
    }
    to {
      transform: translateY(-100%);
      visibility: visible;
    }
  }

  @media only screen and (min-width: 768px) {
    height: unset;
  }
`;

const Overlay = styled.div`
  animation: ${(props) => (props.open ? "fadeIn" : "fadeOut")} 0.7s forwards;
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      visibility: visible;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default function MobileMenu(props) {
  return (
    <>
      <Container open={props.open}>
        <CategoryContainer></CategoryContainer>
      </Container>
      <Overlay open={props.open}></Overlay>
    </>
  );
}
