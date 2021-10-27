import React from "react";
import styled from "styled-components";

function Box(props) {
  console.log(props);

  return (
    <Container top={props.top} left={props.left}>
      <Boundary width={props.width} height={props.height} color={props.color} />
      <Label color={props.color}>Detection {props.label}</Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: ${(props) => props.top}px;
  margin-left: ${(props) => props.left}px;
`;
const Boundary = styled.canvas`
  border: 2px solid ${(props) => props.color};
`;
const Label = styled.label`
  color: ${(props) => props.color};
`;

export default Box;
