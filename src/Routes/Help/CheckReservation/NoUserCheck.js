import React, { useState } from "react";
import styled from "styled-components";
import { MiniLoader } from "../../../Components/Icons";
import Title from "../../../Components/Title";
import useInput from "../../../Hooks/useInput";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  REQUEST_FIND_ID,
  CONFIRM_FIND_ID,
  CHECK_NOUSERS
} from "../../../SharedQueries";
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
const PhoneTbody = styled.tbody``;
const PhoneTr = styled.tr`
  padding: 8px;
`;
const PhoneTh = styled.th`
  padding: 8px;
`;
const PhoneInput = styled.input``;
const SendButtonWrapper = styled.div`
  text-align: center;
`;
const SendButton = styled.button`
  padding: 12px 24px;
  margin: 0px 32px;
`;
const DescriptionWrapper = styled.div`
  text-align: start;
  padding: 32px 0px;
`;
const AlretText = styled.div`
  text-align: center;
  color: ${props => props.theme.redColor};
  padding: 16px;
`;
const Description = styled.div`
  padding: 8px 0px;
  font-size: 14px;
  color: ${props => props.theme.darkGreyColor};
`;
const Text = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.blackColor};
`;
export default ({ platform }) => {
  const userName = useInput("");
  const userEmail = useInput("");
  const secretCode = useInput("");
  const [loading, setLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [requestTrigger, setRequestTrigger] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const [requestFindIdMutation] = useMutation(REQUEST_FIND_ID, {
    variables: { name: userName.value, email: userEmail.value }
  });
  const [confirmFindIdMutation] = useMutation(CONFIRM_FIND_ID, {
    variables: { email: userEmail.value, secret: secretCode.value }
  });
  const [checkNoUsersQuery] = useLazyQuery(CHECK_NOUSERS, {
    variables: { username: userName.value, email: userEmail.value },
    onCompleted: data => {
      setSuccessState(data);
      console.log(data);
    }
  });
  const requestOnClick = async () => {
    setLoading(true);
    if (userName.value !== "" && userEmail.value !== "") {
      try {
        const {
          data: { requestFindID }
        } = await requestFindIdMutation();
        if (requestFindID) {
          setRequestTrigger(true);
          setAlertValue("인증 코드가 전송되었습니다.");
        } else {
          setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
        }
        setLoading(false);
      } catch (e) {
        setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
        setLoading(false);
        return null;
      }
    } else {
      setLoading(false);
      setAlertValue("입력하신 이름과 이메일을 찾을 수 없습니다.");
    }
  };

  const confirmOnClick = async () => {
    setLoading(true);
    try {
      const {
        data: { confirmFindID }
      } = await confirmFindIdMutation();
      if (confirmFindID !== "") {
        checkNoUsersQuery();
        setLoading(false);
      } else {
        setAlertValue("인증 코드가 일치하지 않습니다.");
        setLoading(false);
      }
    } catch (e) {
      setAlertValue("인증 코드가 일치하지 않습니다.");
      setLoading(false);
      return null;
    }
  };
  return (
    <Container>
      {successState ? (
        <Wrapper>
          <Title platform={platform} text="비회원 예약 조회" />
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
          <Title platform={platform} text="비회원 예약 조회" />
          <PhoneWrapper>
            <table>
              <PhoneTbody>
                <PhoneTr>
                  <PhoneTh>이름</PhoneTh>
                  <PhoneTh>
                    {requestTrigger ? (
                      <PhoneInput
                        onChange={userName.onChange}
                        value={userName.value}
                        disabled
                      />
                    ) : (
                      <PhoneInput
                        onChange={userName.onChange}
                        value={userName.value}
                      />
                    )}
                  </PhoneTh>
                </PhoneTr>
                <PhoneTr>
                  <PhoneTh>이메일 주소</PhoneTh>
                  <PhoneTh>
                    {requestTrigger ? (
                      <PhoneInput
                        onChange={userEmail.onChange}
                        value={userEmail.value}
                        disabled
                      />
                    ) : (
                      <PhoneInput
                        onChange={userEmail.onChange}
                        value={userEmail.value}
                      />
                    )}
                  </PhoneTh>
                </PhoneTr>
                {requestTrigger ? (
                  <PhoneTr style={{ padding: "32px" }}>
                    <PhoneTh>인증 코드</PhoneTh>
                    <PhoneTh>
                      <PhoneInput
                        onChange={secretCode.onChange}
                        value={secretCode.value}
                      />
                    </PhoneTh>
                  </PhoneTr>
                ) : null}
              </PhoneTbody>
            </table>
          </PhoneWrapper>
          {loading ? <MiniLoader /> : null}
          <AlretText>{alertValue}</AlretText>
          <SendButtonWrapper>
            {requestTrigger ? (
              <SendButton onClick={confirmOnClick}>인증</SendButton>
            ) : (
              <SendButton onClick={requestOnClick}>전송</SendButton>
            )}
          </SendButtonWrapper>
          <DescriptionWrapper>
            <Description>
              {"· 가입할 때 등록한 이름과 이메일을 입력하세요."}
            </Description>
            <Description>
              {"· 전송된 이메일에서 인증 코드를 받아 입력하세요."}
            </Description>
          </DescriptionWrapper>
        </Wrapper>
      )}
    </Container>
  );
};
