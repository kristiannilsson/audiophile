import { useState } from "react";
import styled from "styled-components";

const CounterContainer = styled.div`
  align-items: center;
  background-color: var(--seashell);
  display: inline-flex;
  font-size: 13px;
  height: 48px;
  justify-content: space-around;
  letter-spacing: 1px;
  width: 120px;
`;

const Button = styled.button`
  opacity: 0.25;
  font-size: 13px;
`;

const CounterText = styled.p`
  font-weight: bold;
`;

export default function Counter() {
  const [count, setCount] = useState(0);

  //Increases count by one if the user clicks the plus, decrease by one if the user clicks the minus.
  //Can never go below zero.
  const handleClick = (e) => {
    const value = e.target.innerHTML === "+" ? 1 : -1;
    if (count <= 0 && value < 0) {
      return null;
    } else {
      setCount(count + value);
    }
  };

  return (
    <CounterContainer>
      <Button onClick={handleClick}>-</Button>
      <CounterText>{count}</CounterText>
      <Button onClick={handleClick}>+</Button>
    </CounterContainer>
  );
}
