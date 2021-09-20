import CategoryContainer from "./CategoryContainer";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import { useRef } from "react";

const Container = styled.div`
  background-color: var(--white);
  height: 90vh;
  overflow: auto;
  padding: 4%;
  position: absolute;
  width: 100%;
  z-index: 2;
  transition: transform 0.5s;
  transform: ${({ state }) => {
    switch (state) {
      case "entering":
        return "translateY(-100%)";
      case "entered":
        return "translateY(0)";
      case "exiting":
        return "translateY(-100%)";
    }
  }};
  @media only screen and (min-width: 768px) {
    height: unset;
  }
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 1;
  transition: opacity 0.5s;
  opacity: ${({ state }) => {
    switch (state) {
      case "entering":
        return 0;
      case "entered":
        return "1";
      case "exiting":
        return "0";
    }
  }};
`;

export default function MobileMenu(props) {
  const nodeRef = useRef();

  if (props.open && typeof window === "object") {
    document.querySelector("body").style.overflow = "hidden";
  } else if (typeof window === "object") {
    document.querySelector("body").style.overflow = "visible";
  }
  return (
    <>
      <Transition
        nodeRef={nodeRef}
        in={props.open}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={{
          exit: 500,
        }}
      >
        {(state) => (
          <Container ref={nodeRef} state={state}>
            <CategoryContainer></CategoryContainer>
          </Container>
        )}
      </Transition>
      <Transition
        nodeRef={nodeRef}
        in={props.open}
        mountOnEnter={true}
        unmountOnExit={true}
        timeout={{
          exit: 2000,
        }}
      >
        {(state) => <Overlay ref={nodeRef} state={state}></Overlay>}
      </Transition>
    </>
  );
}
