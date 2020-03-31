import React, { useState } from "react";
import styled from "styled-components";
import { MiniLoader } from "../../../Components/Icons";
import Title from "../../../Components/Title";
import useInput from "../../../Hooks/useInput";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { CHECK_NOUSERS } from "../../../SharedQueries";

import { Link } from "react-router-dom";
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 210px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const PhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
`;
const AlretText = styled.div`
  text-align: center;
  color: ${props => props.theme.redColor};
  padding: 16px;
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.blackColor};
`;
export default ({ platform }) => {
  const [loading, setLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);

  const [checkNoUsersQuery] = useLazyQuery(CHECK_NOUSERS, {
    variables: {},
    onCompleted: data => {
      setSuccessState(data);
      console.log(data);
    }
  });
  return (
    <Container>
      {successState ? (
        <Wrapper>
          <Title platform={platform} text="회원 예약 조회" />
          <PhoneWrapper>
            {successState.noUserCheck.map((e, i) => {
              return (
                <Link
                  to={{
                    pathname: "/check/reservation",
                    state: {
                      id: e.id
                    }
                  }}
                >
                  <AlretText>
                    <Text>{e.id}</Text>
                  </AlretText>
                </Link>
              );
            })}
          </PhoneWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <Title platform={platform} text="예약이 존재하지 않습니다." />
        </Wrapper>
      )}
    </Container>
  );
};
