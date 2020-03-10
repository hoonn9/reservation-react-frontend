import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
const SummaryWrapper = styled.div`
  position: ${props => (props.smToggle ? "fixed" : "absolute")};
  z-index: 20;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.whiteColor};
`;

const SummaryInner = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 16px 0px;
`;

const SummaryTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;

const SummaryBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SummaryItem = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: 16px;
`;

const SummarySubTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.darkGreyColor};
`;
const SummaryTimeWrapper = styled.div``;
const SummaryCheckIn = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;
const SummaryCheckOut = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;
const SummaryTypeWrapper = styled.div``;
const SummaryTypeCount = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;
const SummaryType = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;
const SummaryCountWrapper = styled.div``;
const SummaryUserCount = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;
const SummaryEtcWrapper = styled.div``;
const SummaryBreakFirst = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;

const SummarySubTypeWrapper = styled.div``;
const SummarySubType = styled.div`
  font-size: 15px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
`;

const SummaryPriceWrapper = styled.div`
  background-color: ${props => props.theme.darkGreyColor};
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const SummaryPriceActiveWrapper = styled.div`
  background-color: ${props => props.theme.redColor};
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const SummaryPrice = styled.div`
  display: block;
  padding: 16px 16px;
  color: ${props => props.theme.whiteColor};
`;

export default ({
  smToggle,
  startDate,
  endDate,
  typeCount,
  subCount,
  userCount,
  selectType,
  selectSubType,
  smDisplay,
  totalPrice,
  successToggle
}) => {
  return (
    <>
      {smDisplay ? (
        <SummaryWrapper smToggle={smToggle}>
          <SummaryInner>
            <SummaryTitle>총합</SummaryTitle>
            <SummaryBody>
              <SummaryTimeWrapper>
                <SummaryItem>
                  <SummarySubTitle>체크인</SummarySubTitle>
                  <SummaryCheckIn>
                    {format(startDate, "PPP", { locale: ko })}
                  </SummaryCheckIn>
                </SummaryItem>
                <SummaryItem>
                  <SummarySubTitle>체크아웃</SummarySubTitle>
                  <SummaryCheckOut>
                    {format(endDate, "PPP", { locale: ko })}
                  </SummaryCheckOut>
                </SummaryItem>
              </SummaryTimeWrapper>
              <SummaryTypeWrapper>
                <SummaryItem>
                  <SummarySubTitle>객실 수</SummarySubTitle>
                  <SummaryTypeCount>{typeCount}</SummaryTypeCount>
                </SummaryItem>
                <SummaryItem>
                  <SummarySubTitle>객실</SummarySubTitle>
                  <SummaryType>{selectType.name}</SummaryType>
                </SummaryItem>
              </SummaryTypeWrapper>
              <SummaryCountWrapper>
                <SummaryItem>
                  <SummarySubTitle>총원</SummarySubTitle>
                  <SummaryUserCount>성인 {userCount}</SummaryUserCount>{" "}
                  <SummaryUserCount>소아 {subCount}</SummaryUserCount>
                </SummaryItem>
              </SummaryCountWrapper>
              <SummaryEtcWrapper>
                <SummaryItem>
                  <SummarySubTitle>기타</SummarySubTitle>
                  <SummaryBreakFirst></SummaryBreakFirst>
                </SummaryItem>
              </SummaryEtcWrapper>
              <SummarySubTypeWrapper>
                <SummaryItem>
                  <SummarySubTitle>패키지</SummarySubTitle>
                  <SummarySubType>{selectSubType.name}</SummarySubType>
                </SummaryItem>
              </SummarySubTypeWrapper>
              {successToggle ? (
                <SummaryPriceActiveWrapper>
                  <SummaryPrice>{totalPrice}원</SummaryPrice>
                </SummaryPriceActiveWrapper>
              ) : (
                <SummaryPriceWrapper>
                  <SummaryPrice>{totalPrice}원</SummaryPrice>
                </SummaryPriceWrapper>
              )}
            </SummaryBody>
          </SummaryInner>
        </SummaryWrapper>
      ) : null}
    </>
  );
};
