import React, { useState } from "react";
import styled from "styled-components";
import Head from "./Head";
import Content from "./Content";
import { useQuery } from "react-apollo-hooks";
import { SEE_EVENT } from "../../Routes/Event/EventQueries";
import ErrorAlert from "../ErrorAlert";
import GlobalText from "../../GlobalText";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default ({ screenSize }) => {
  const globalText = GlobalText();
  const [currentItem, setCurrentItem] = useState(0);
  const { data, loading, error } = useQuery(SEE_EVENT, { variables: {} });

  //container
  const divide = 3;
  const [wrapperWidth, setWrapperWidth] = useState(75);
  const [imgWidth, setImgWidth] = useState(
    ((screenSize.width / 100) * wrapperWidth) / divide
  );
  const [transValue, setTransValue] = useState(0);

  const resetWrapper = () => {
    setTransValue(0);
  };

  return (
    <>
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <div />
      ) : (
        <Wrapper>
          <Head
            globalText={globalText}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            data={data}
            resetWrapper={resetWrapper}
          />
          <Content
            currentItem={currentItem}
            data={data}
            screenSize={screenSize}
            wrapperWidth={wrapperWidth}
            divide={divide}
            imgWidth={imgWidth}
            setImgWidth={setImgWidth}
            transValue={transValue}
            setTransValue={setTransValue}
          />
        </Wrapper>
      )}
    </>
  );
};
