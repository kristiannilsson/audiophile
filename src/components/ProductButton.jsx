import styled from "styled-components";

const Button = styled.button`
  background-color: var(--sienna);
  width: 160px;
  height: 48px;
  display: inline-block;
  text-align: center;
  margin-left: 1.1rem;
  color: var(--white);
`;

export default function ProductButton() {
  return <Button>SEE PRODUCT</Button>;
}
