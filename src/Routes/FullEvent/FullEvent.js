import React from "react";
import styled from "styled-components";
import FullEvent from "../../Components/FullEvent";
import { SEE_FULL_EVENT } from "./FullEventQueries";
import { useQuery } from "@apollo/react-hooks";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";
import { useLocation } from "react-router-dom";
import Title from "../../Components/Title";
const Container = styled.div`
  position: relative;
  padding: 0;
  max-width: 1280px;
  margin: 0 auto;
`;

export default ({ platform }) => {
  const globalText = GlobalText();
  var id;
  let location = useLocation();
  if (location.state !== undefined) {
    id = location.state.id;
  } else {
    const { pathname } = location;
    id = pathname.split("/event/")[1];
  }

  const { data, loading, error } = useQuery(SEE_FULL_EVENT, {
    variables: { id },
  });
  return (
    <div className="body-content">
      <Container>
        <Title platform={platform} text={globalText.text_event} />
        {error ? (
          <ErrorAlert />
        ) : loading ? (
          <Loader />
        ) : (
          <FullEvent platform={platform} data={data.seeFullEvent} />
        )}
      </Container>
    </div>
  );
};
