import React, { useState } from "react";
import styled from "styled-components";
import { MiniLoader } from "../../../Components/Icons";
import Title from "../../../Components/Title";
import useInput from "../../../Hooks/useInput";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import {
  REQUEST_NOUSER_SECRET,
  CONFIRM_NOUSER_SECRET,
  CHECK_NOUSERS,
} from "../../../SharedQueries";
import ReservationRow from "../../../Components/ReservationRow";
import Button from "../../../Components/Button";
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
  flex-direction: column;
`;
const RowWrapper = styled.div`
  width: 100%;
  border-bottom: 1px ${(props) => props.theme.liteGreyColor} solid;
`;
const PhoneTbody = styled.tbody``;
const PhoneTr = styled.tr`
  padding: 8px;
`;
const PhoneTh = styled.th`
  padding: 8px;
  text-align: start;
`;
const PhoneInput = styled.input`
  padding: 8px;
`;
const SendButtonWrapper = styled.div`
  width: 80px;
  margin: 0 auto;
`;
const DescriptionWrapper = styled.div`
  text-align: start;
  padding: 32px 0px;
`;
const AlretText = styled.div`
  text-align: center;
  color: ${(props) => props.theme.redColor};
  padding: 16px;
`;
const Description = styled.div`
  padding: 8px 0px;
  font-size: 14px;
  color: ${(props) => props.theme.darkGreyColor};
`;
export default ({ platform }) => {
  const userName = useInput("");
  const userEmail = useInput("");
  const secretCode = useInput("");
  const [loading, setLoading] = useState(false);
  const [successState, setSuccessState] = useState(false);
  const [requestTrigger, setRequestTrigger] = useState(false);
  const [alertValue, setAlertValue] = useState("");
  const [requestMutation] = useMutation(REQUEST_NOUSER_SECRET, {
    variables: { name: userName.value, email: userEmail.value },
  });
  const [confirmMutation] = useMutation(CONFIRM_NOUSER_SECRET, {
    variables: { email: userEmail.value, secret: secretCode.value },
  });
  const [checkNoUsersQuery] = useLazyQuery(CHECK_NOUSERS, {
    variables: {
      username: userName.value,
      email: userEmail.value,
      loginSecret: secretCode.value,
    },
    onCompleted: (data) => {
      setSuccessState(data);
      setLoading(false);
    },
  });
  const requestOnClick = async () => {
    setLoading(true);
    if (userName.value !== "" && userEmail.value !== "") {
      try {
        const {
          data: { requestNoUserSecret },
        } = await requestMutation();
        if (requestNoUserSecret) {
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
        data: { confirmNoUserSecret },
      } = await confirmMutation();
      if (confirmNoUserSecret) {
        checkNoUsersQuery();
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
    <div className="body-content">
      <Container>
        {successState ? (
          <Wrapper>
            <Title platform={platform} text="비회원 예약 조회" />
            {successState.noUserCheck ? (
              <PhoneWrapper>
                {successState.noUserCheck.map((e, i) => {
                  return (
                    <RowWrapper key={i}>
                      <ReservationRow
                        platform={platform}
                        id={e.id}
                        price={e.price}
                        typeName={e.type.typeName}
                        thumbnail={
                          e.type.files.length > 0 ? e.type.files[0].url : null
                        }
                        subTypeName={e.subType.subTypeName}
                        createdAt={e.createdAt}
                        checkIn={e.checkIn}
                        checkOut={e.checkOut}
                      />
                    </RowWrapper>
                  );
                })}
              </PhoneWrapper>
            ) : (
              <PhoneWrapper>예약이 존재하지 않습니다.</PhoneWrapper>
            )}
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
                <Button
                  height={40}
                  onClick={confirmOnClick}
                  loading={loading}
                  text={"인증"}
                />
              ) : (
                <Button
                  height={40}
                  onClick={requestOnClick}
                  loading={loading}
                  text={"전송"}
                />
              )}
            </SendButtonWrapper>
            <DescriptionWrapper>
              <Description>
                {"· 예약할 때 등록한 이름과 이메일을 입력하세요."}
              </Description>
              <Description>
                {"· 전송된 이메일에서 인증 코드를 받아 입력하세요."}
              </Description>
            </DescriptionWrapper>
          </Wrapper>
        )}
      </Container>
    </div>
  );
};
