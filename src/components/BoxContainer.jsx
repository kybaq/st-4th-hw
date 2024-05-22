import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

function BoxContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      {/* TODO: active prop 을 어떻게 해야 클릭한 박스임을 알수있을 지 active prop에 할당할 값을 수정해보세요. */}
      {[0, 1, 2, 3, 4].map((index) => (
        <Box
          key={index}
          // "$" 를 붙여, styled component prop 이라는 것을 명시한 뒤, box 의 index 와 click event 발생한 box index 를 비교함.
          $active={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
}

export default BoxContainer;
