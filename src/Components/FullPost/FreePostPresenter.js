import React from "react";
import styled from "styled-components";
import { dateConverter } from "../../Utils";
import ReadEditor from "../ReadEditor";

const Wrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.superLiteGreyColor};
  padding: 24px 32px;
  border-top: 2px solid #999;
  border-bottom: 1px solid #c7c7c7;
`;
const Title = styled.div`
  font-size: 18px;
`;

const SubWrapper = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  border-bottom: 1px solid #c7c7c7;
`;
const SubLeftWrapper = styled.div`
  position: absolute;
  left: 0;
  padding-left: 32px;
  padding-top: 12px;
`;

const DateText = styled.div`
  font-size: 14px;
  padding: 4px 0px;
`;
const NameText = styled.div`
  font-size: 14px;
  padding: 4px 0px;
`;

const SubRightWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 32px;
  padding-top: 12px;
`;
const ViewText = styled.div`
  font-size: 14px;
  padding: 4px 0px;
`;

const ContentWrapper = styled.div`
  border-bottom: 1px solid #c7c7c7;
  padding: 8px 32px;
  min-height: 480px;
`;
export default ({
  title,
  username,
  createdAt,
  views,
  globalText,
  editorState
}) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <SubWrapper>
        <SubLeftWrapper>
          <NameText>
            {globalText.text_board_header_name} : {username}
          </NameText>
          <DateText>
            {globalText.text_board_header_date} : {dateConverter(createdAt)}
          </DateText>
        </SubLeftWrapper>
        <SubRightWrapper>
          <ViewText>
            {globalText.text_board_header_views} : {views + 1}
          </ViewText>
        </SubRightWrapper>
      </SubWrapper>
      <ContentWrapper>
        <ReadEditor editorState={editorState} />
      </ContentWrapper>
    </Wrapper>
  );
};
