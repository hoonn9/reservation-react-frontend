import React from "react";
import styled from "styled-components";
import { dateDetailConverter } from "../../Utils";
import ReadEditor from "../ReadEditor";
import { globalText } from "../../GlobalText";

const Wrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  background-color: ${(props) => props.theme.superLiteGreyColor};
  padding: 32px 32px;
  border-top: 2px solid #999;
  border-bottom: 1px solid #c7c7c7;
`;
const MobileTitleWrapper = styled.div`
  background-color: ${(props) => props.theme.superLiteGreyColor};
  padding: 24px 16px;
  border-top: 2px solid #999;
  border-bottom: 1px solid #c7c7c7;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
const MobileTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const SubWrapper = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #c7c7c7;
`;
const SubLeftWrapper = styled.div`
  position: absolute;
  left: 32px;
  padding-top: 12px;
`;
const MobileSubLeftWrapper = styled.div`
  position: absolute;
  left: 16px;
  padding-top: 12px;
`;
const DateText = styled.div`
  font-size: 16px;
  padding: 4px 0px;
`;
const SubRightWrapper = styled.div`
  position: absolute;
  right: 32px;
  padding-top: 12px;
`;
const MobileSubRightWrapper = styled.div`
  position: absolute;
  right: 16px;
  padding-top: 12px;
`;
const ViewText = styled.div`
  font-size: 14px;
  padding: 4px 0px;
`;

const ContentWrapper = styled.div`
  padding: 8px 0px;
  min-height: 480px;
  border-bottom: 1px solid #c7c7c7;
`;
export default ({ platform, title, createdAt, views, editorState }) => {
  return (
    <>
      {platform === "desktop" ? (
        <Wrapper>
          <TitleWrapper>
            <Title>{title}</Title>
          </TitleWrapper>

          <SubWrapper>
            <SubLeftWrapper>
              <DateText>
                {globalText.text_board_header_date} :{" "}
                {dateDetailConverter(createdAt)}
              </DateText>
            </SubLeftWrapper>
            <SubRightWrapper>
              <ViewText>
                {globalText.text_board_header_views} : {views + 1}
              </ViewText>
            </SubRightWrapper>
          </SubWrapper>
          <ContentWrapper>
            <ReadEditor platform={platform} editorState={editorState} />
          </ContentWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <MobileTitleWrapper>
            <MobileTitle>{title}</MobileTitle>
          </MobileTitleWrapper>

          <SubWrapper>
            <MobileSubLeftWrapper>
              <DateText>
                {globalText.text_board_header_date} :{" "}
                {dateDetailConverter(createdAt)}
              </DateText>
            </MobileSubLeftWrapper>
            <MobileSubRightWrapper>
              <ViewText>
                {globalText.text_board_header_views} : {views + 1}
              </ViewText>
            </MobileSubRightWrapper>
          </SubWrapper>
          <ContentWrapper>
            <ReadEditor platform={platform} editorState={editorState} />
          </ContentWrapper>
        </Wrapper>
      )}
    </>
  );
};
