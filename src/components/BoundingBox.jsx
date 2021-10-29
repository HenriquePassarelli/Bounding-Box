import React from "react";
import styled from "styled-components";

function Box(props) {
  console.log(props);

  return (
    <Container key={props.id} top={props.y} left={props.x} width={props.width}>
      <Boundary width={props.width} height={props.height} color={props.color} />
      <Label color={props.color}>{props.label}</Label>
    </Container>
  );
}

let textBoxDefaultWidth = 200;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  flex: wrap;
  max-width: ${(props) =>
    props.width < textBoxDefaultWidth ? textBoxDefaultWidth : props.width}px;

  position: absolute;
  margin-top: ${(props) => props.top}px;
  margin-left: ${(props) => props.left}px;
`;
const Boundary = styled.canvas`
  cursor: pointer;
  border: 2px solid ${(props) => props.color};
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height};
  &:hover {
    border-color: yellow;
  }
`;
const Label = styled.label`
  color: ${(props) => props.color};
`;

export default Box;
