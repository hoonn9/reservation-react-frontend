import React from "react";
import styled from "styled-components";
import { dateConverter } from "../../Utils";
import ReadEditor from "../ReadEditor";

const Wrapper = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.superLiteGreyColor};
  padding: 12px 12px;
  border-top: 2px solid #999;
  border-bottom: 1px solid #c7c7c7;
`;
const Title = styled.div``;

const SubWrapper = styled.div`
  height: 70px;
  display: flex;
  border-bottom: 1px solid #c7c7c7;
`;
const SubLeftWrapper = styled.div`
  position: absolute;
  left: 0;
  padding-left: 12px;
  padding-top: 12px;
`;

const DateText = styled.div`
  font-size: 14px;
  padding: 4px 4px;
`;
const NameText = styled.div`
  font-size: 14px;
  padding: 4px 4px;
`;

const SubRightWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 12px;
  padding-top: 12px;
`;
const ViewText = styled.div`
  font-size: 14px;
  padding: 4px 4px;
`;

const ContentWrapper = styled.div`
  border-bottom: 1px solid #c7c7c7;
`;
export default ({
  title,
  username,
  content,
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
