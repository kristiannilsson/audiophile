import CategoryContainer from "./CategoryContainer";
import styled, { keyframes } from "styled-components";
import { slideInDown, slideOutUp, fadeOut, fadeIn } from "react-animations";

const slideInAnimation = keyframes`${slideInDown}`;
const slideOutAnimation = keyframes`${slideOutUp}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeOutAnimation = keyframes`${fadeOut}`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  padding: 4%;
  position: absolute;
  overflow: scroll;
  background-color: var(--white);
  z-index: 1;
  animation: 0.7s
    ${(props) => (props.open ? slideInAnimation : slideOutAnimation)} forwards;
  @media only screen and (min-width: 768px) {
    height: unset;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  animation: 0.7s
    ${(props) => (props.open ? fadeInAnimation : fadeOutAnimation)} forwards;
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
