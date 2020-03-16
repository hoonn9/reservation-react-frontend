import React from "react";
import styled from "styled-components";
import FullEvent from "../../Components/FullEvent";
import { SEE_FULL_EVENT } from "./FullEventQueries";
import { useQuery } from "react-apollo-hooks";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import GlobalText from "../../GlobalText";

const Container = styled.div`
  position: relative;
  padding: 0;
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 46px;
  color: #333;
  font-weight: normal;
`;

export default ({ location, history }) => {
  const globalText = GlobalText();
  var id;
  if (location.state !== undefined) {
    id = location.state.id;
  } else {
    const { pathname } = location;
    id = pathname.split("/event/")[1];
  }

  const { data, loading, error } = useQuery(SEE_FULL_EVENT, {
    variables: { id }
  });
  return (
    <div className="body-content">
      <Container>
        <Title>{globalText.text_event}</Title>
        {error ? (
          <ErrorAlert />
        ) : loading ? (
          <Loader />
        ) : (
          <FullEvent data={data} />
        )}
      </Container>
    </div>
  );
};
