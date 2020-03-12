import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "./Head";
import Content from "./Content";
import { useQuery } from "react-apollo-hooks";
import { SEE_EVENT } from "../../Routes/Event/EventQueries";
import ErrorAlert from "../ErrorAlert";
import Loader from "../Loader";
import GlobalText from "../../GlobalText";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default () => {
  const globalText = GlobalText();
  const [currentItem, setCurrentItem] = useState(0);
  const { data, loading, error } = useQuery(SEE_EVENT, { variables: {} });

  return (
    <>
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Head
            globalText={globalText}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            data={data}
          />
          <Content currentItem={currentItem} data={data} />
        </Wrapper>
      )}
    </>
  );
};
