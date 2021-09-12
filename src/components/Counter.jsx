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

  return (
    <CounterContainer>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <CounterText>{count}</CounterText>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </CounterContainer>
  );
}
