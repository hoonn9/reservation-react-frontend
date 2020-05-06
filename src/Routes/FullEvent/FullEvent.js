import React from "react";
import styled from "styled-components";
import FullEvent from "../../Components/FullEvent";
import { SEE_FULL_EVENT } from "./FullEventQueries";
import { useQuery } from "@apollo/react-hooks";
import ErrorAlert from "../../Components/ErrorAlert";
import Loader from "../../Components/Loader";
import { useLocation } from "react-router-dom";
import Title from "../../Components/Title";
import { globalText } from "../../GlobalText";
const Container = styled.div`
  position: relative;
  padding: 0;
  max-width: 1280px;
  margin: 0 auto;
`;
const DescriptionWrapper = styled.div`
  text-align: start;
  padding: 32px 0px;
`;
const Description = styled.div`
  padding: 4px 0px;
  font-size: 14px;
  color: ${(props) => props.theme.darkGreyColor};
  line-height: 1.5;
`;
export default ({ platform }) => {
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
          <>
            <FullEvent platform={platform} data={data.seeFullEvent} />
            <DescriptionWrapper>
              <Description>{globalText.text_event_desc_1}</Description>
              <Description>{globalText.text_event_desc_2}</Description>
              <Description>{globalText.text_event_desc_3}</Description>
              <Description>{globalText.text_event_desc_4}</Description>
            </DescriptionWrapper>
          </>
        )}
      </Container>
    </div>
  );
};
