import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
`;
const SummaryWrapper = styled.div`
  position: fixed;
  z-index: 20 !important;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.whiteColor};
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
`;

const SummaryInner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 8px 8px;
`;

const SummaryTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  padding: 8px 0px;
  color: ${props => props.theme.blackColor};
  border-bottom: 1px ${props => props.theme.blackColor} solid;
`;

const SummaryBody = styled.div``;

const SummaryItem = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
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
  padding: 12px 16px;
  color: ${props => props.theme.whiteColor};
`;

const ToggleButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
`;

export default ({
  startDate,
  endDate,
  typeCount,
  subCount,
  userCount,
  selectType,
  selectSubType,
  smDisplay,
  totalPrice,
  successToggle,
  mobileTrigger,
  setMobileTrigger,
  SuccessOnClick
}) => {
  return (
    <>
      {smDisplay ? (
        mobileTrigger ? (
          <Container>
            <SummaryWrapper>
              <ToggleButtonWrapper>
                <ExpandMoreIcon onClick={() => setMobileTrigger(false)} />
              </ToggleButtonWrapper>
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
                      <SummaryTypeCount>{typeCount.value}</SummaryTypeCount>
                    </SummaryItem>
                    <SummaryItem>
                      <SummarySubTitle>객실</SummarySubTitle>
                      <SummaryType>{selectType.name}</SummaryType>
                    </SummaryItem>
                  </SummaryTypeWrapper>
                  <SummaryCountWrapper>
                    <SummaryItem>
                      <SummarySubTitle>총원</SummarySubTitle>
                      <SummaryUserCount>
                        성인 {userCount.value}
                      </SummaryUserCount>
                      <SummaryUserCount>소아 {subCount.value}</SummaryUserCount>
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
          </Container>
        ) : (
          <SummaryWrapper>
            <ToggleButtonWrapper>
              <ExpandLessIcon onClick={() => setMobileTrigger(true)} />
            </ToggleButtonWrapper>
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
                {successToggle ? (
                  <SummaryPriceActiveWrapper onClick={SuccessOnClick}>
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
        )
      ) : null}
    </>
  );
};
