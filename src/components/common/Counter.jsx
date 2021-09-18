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
  margin-right: 1rem;
  width: 120px;
  position: relative;
`;

const Button = styled.button`
  font-size: 13px;
  opacity: 0.25;
`;

const CounterText = styled.p`
  font-weight: bold;
`;

const Tooltip = styled.p`
  color: var(--white);
  position: absolute;
  font-size: 12px;
  top: 50px;
  background-color: var(--sienna);
  border-radius: 10px;
  padding: 5%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: var(--sienna);
    border-top: 0;
    border-left: 0;
    margin-left: -10px;
    margin-top: -20px;
  }
`;

export default function Counter() {
  const [count, setCount] = useState(0);
  const [displayTooltip, setTooltip] = useState(false);

  //Increases count by one if the user clicks the plus, decrease by one if the user clicks the minus.
  //Can never go below zero.
  const handleClick = (e) => {
    const value = e.target.innerHTML === "+" ? 1 : -1;
    changeCounterValue(value);
  };

  const changeCounterValue = (val) => {
    if (count + val < 0) {
      return null;
    } else {
      setCount(count + val);
    }
  };

  const handleKeyPress = (e) => {
    if (displayTooltip === true) {
      setTooltip(false);
    }
    switch (e.key) {
      case "ArrowRight":
        changeCounterValue(1);
        break;
      case "ArrowLeft":
        changeCounterValue(-1);
        break;
      default:
        setTooltip(true);
        break;
    }
  };

  return (
    <>
      <CounterContainer
        onBlur={() => setTooltip(false)}
        onKeyDown={handleKeyPress}
        tabIndex="0"
      >
        <Button onClick={handleClick}>-</Button>
        <CounterText>{count}</CounterText>
        <Button onClick={handleClick}>+</Button>
        {displayTooltip && (
          <Tooltip>Use left or right arrow to change the quantity</Tooltip>
        )}
      </CounterContainer>
    </>
  );
}
