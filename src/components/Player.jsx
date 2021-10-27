import React from "react";
import Box from "./BoundingBox";
import styled from "styled-components";

let bboxw = 100;
let bboxh = 100;
let bboxt = 60;
let bboxl = 520;
let color = "#ffffff";
let label = 'SUV'

function Player() {
  return (
    <Container>
      <Box width={bboxw} height={bboxh} top={bboxt} left={bboxl} color={color} label={label}/>
      <Iframe
        src="https://www.youtube.com/embed/lJIrF4YjHfQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  position: relative;
  width: 720px;
  height: 405px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default Player;
