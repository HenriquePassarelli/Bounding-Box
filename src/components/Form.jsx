import React, { useState } from "react";
import styled from "styled-components";

function Form(props) {
  const [name, setName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const [color, setColor] = useState("#000000");

  return (
    <FormComponent
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target);
        if (
          name !== undefined &&
          name !== "" &&
          width !== undefined &&
          width !== "" &&
          height !== undefined &&
          height !== "" &&
          top !== undefined &&
          top !== "" &&
          left !== undefined &&
          left !== ""
        )
          props.addBox({ name, width, height, top, left, color });
        setName("");
        setWidth("");
        setHeight("");
        setTop("");
        setLeft("");
        setColor("#000000");
      }}
    >
      <h1>Set your bounding box</h1>
      <label htmlFor="name">Detection Name</label>
      <input
        id="name"
        value={name}
        type="text"
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        value={width}
        type="number"
        onChange={(event) => setWidth(event.target.value)}
        required
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        value={height}
        type="number"
        onChange={(event) => setHeight(event.target.value)}
        required
      />
      <label htmlFor="top">Axis Y</label>
      <input
        id="top"
        value={top}
        type="number"
        onChange={(event) => setTop(event.target.value)}
        required
      />
      <label htmlFor="top">Axis X</label>
      <input
        value={left}
        type="number"
        onChange={(event) => setLeft(event.target.value)}
        required
      />
      <label htmlFor="top">Color</label>
      <input
        value={color}
        type="color"
        onChange={(event) => setColor(event.target.value)}
        required
      />

      <button type="submit">New Box</button>
      <button
        type="button"
        onClick={() => {
          props.deleteBox();
        }}
      >
        Delete All Box
      </button>
    </FormComponent>
  );
}

const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  input,
  label,
  button {
    margin: 5px 7px;
  }
`;

export default Form;
