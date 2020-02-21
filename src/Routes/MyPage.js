import styled from "styled-components";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

const ME = gql`
  query {
    me {
      username
    }
  }
`;

export default () => {
  const { data, loading } = useQuery(ME);
  console.log(data);
  return loading ? (
    <div>loading</div>
  ) : (
    <div>{data.me.username}님 반갑습니다.</div>
  );
};
