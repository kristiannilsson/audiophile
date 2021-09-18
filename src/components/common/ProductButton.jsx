import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.alternative ? "var(--white)" : "var(--sienna)"};
  border: ${(props) => (props.alternative ? "1px solid var(--black)" : "none")};
  box-sizing: "border-box";
  color: ${(props) => (props.alternative ? "var(--black)" : "var(--white)")};
  display: inline-block;
  height: 48px;
  text-align: center;
  width: 160px;

  &:hover {
    background-color: ${(props) =>
      props.alternative ? "var(--black)" : "var(--pink)"};
    color: "var(--white)";
  }

  &:focus {
    border: 1px solid black;
  }
`;

export default function ProductButton(props) {
  return (
    <Button tabindex="0" alternative={props.alternative}>
      {props.text}
    </Button>
  );
}

ProductButton.defaultProps = {
  alternative: false,
};
