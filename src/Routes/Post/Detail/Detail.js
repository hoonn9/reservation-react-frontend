import React from "react";
import { useQuery } from "react-apollo-hooks";
import { SEE_FULL_POST } from "../PostQueries";
import Loader from "../../../Components/Loader";
import ErrorAlert from "../../../Components/ErrorAlert";
import FullPost from "../../../Components/FullPost";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 120px;
`;

export default ({ location, history }) => {
  const {
    state: { id }
  } = location;
  const { data, error, loading } = useQuery(SEE_FULL_POST, {
    variables: {
      id
    },
    fetchPolicy: "network-only"
  });
  return error ? (
    <ErrorAlert />
  ) : loading ? (
    <Loader />
  ) : (
    <Wrapper>
      <FullPost data={data} />
    </Wrapper>
  );
};
