import React, { useState } from "react";
import Box from "./BoundingBox";
import styled from "styled-components";
import From from "./Form";

/* let bboxw = 300; // bbox = bounding Box
let bboxh = 100;
let bboxt = 200;
let bboxl = 300; */
let voWidth = 1280; // vo = video original
let voHeight = 720;
let contWidth = 720; // con = container width
let contHeight = 405;
/* 
let color = "#000";
let label = "Detection Name "; */

function Player() {
  const [list, setList] = useState([]);
  const addBox = (taskName) => {
    const { name, width, height, top, left, color } = taskName;
    console.log(taskName);
    let newList = [...list];
    newList.push({
      x: left,
      y: top,
      width,
      height,
      color,
      name,
    });
    console.log(newList);
    setList(newList);
  };

  const deleteBox = () => {
    setList([]);
  };
  console.log(list);

  return (
    <Main>
      <From addBox={addBox} deleteBox={deleteBox} />
      <section>
        {/* <Container width={voWidth} height={voHeight}>
          <Iframe
            src="https://www.youtube.com/embed/lJIrF4YjHfQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Container> */}
        <br />
        <Container width={contWidth} height={contHeight}>
          <ul>
            {list.map((item, index) => {
              console.log(item);
              return (
                <Box
                  id={index}
                  width={proportion(parseInt(item.width), voWidth, contWidth)}
                  height={proportion(
                    parseInt(item.height),
                    voHeight,
                    contHeight
                  )}
                  y={proportion(parseInt(item.y), voHeight, contHeight)}
                  x={proportion(parseInt(item.x), voWidth, contWidth)}
                  color={item.color}
                  label={item.name}
                />
              );
            })}
          </ul>
          <Iframe
            src="https://www.youtube.com/embed/lJIrF4YjHfQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Container>
      </section>
    </Main>
  );
}

function proportion(n, h1, h2) {
  return (n * h2) / h1;
}

const Main = styled.div`
  display: flex;
  gap: 20px;
`;

const Container = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default Player;
