import React, { useState } from "react";
import First from "../../Components/About/1";
import styled from "styled-components";

const Input = styled.input``;
const Img = styled.img``;
export default () => {
  const reader = new FileReader();
  const [fileState, setFileState] = useState("");

  reader.onload = e => {
    setFileState(e.target.result);
  };

  const fileChanged = e => {
    const f = e.target.files[0];
    reader.readAsDataURL(f);
    console.log(f);
  };
  const imageUpload = e => {
    //const file = e.target.files[0];

    localStorage["fileBase64"] = fileState;
    console.debug("file stored", fileState);
  };

  console.log(fileState);

  const fileSave = () => {};
  return (
    <div className="body-content">
      <First />
      <Img id="img" src={fileState} />
      <Input type="file" id="file" accept="image/*" onChange={fileChanged} />
      <button onClick={imageUpload}>dasds</button>
    </div>
  );
};
