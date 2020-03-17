import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import NoticePostRow from "../../Board/NoticePost/NoticePostRow";
const Container = styled.div``;
const Wrapper = styled.div`
  width: ${props => `${props.wrapperWidth}%`};
  margin: 0 auto;
`;
const HeadWrapper = styled.div`
  margin: 32px 0px;
`;
const Title = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 42px;
  font-weight: 500;
  margin-right: 8px;
`;
const SubButton = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const Table = styled.table`
  width: 100%;
  height: 100%;
`;
const TableBody = styled.tbody`
  border-top: 2px #000000 solid;
`;
export default ({ globalText, wrapperWidth, data, noticeId }) => {
  return (
    <Container>
      <Wrapper wrapperWidth={wrapperWidth}>
        <HeadWrapper>
          <Title>{globalText.text_notice}</Title>
          <Link
            to={{
              pathname: "/notice",
              state: {
                id: noticeId
              }
            }}
          >
            <SubButton>
              <AddIcon
                style={{
                  width: "36px",
                  height: "36px",
                  verticalAlign: "middle"
                }}
              />
            </SubButton>
          </Link>
        </HeadWrapper>
        <Table>
          <TableBody>
            {data.seeBoard.map((post, i) => {
              return (
                <NoticePostRow
                  key={i}
                  post={post}
                  boardId={noticeId}
                  onViews={false}
                />
              );
            })}
          </TableBody>
        </Table>
      </Wrapper>
    </Container>
  );
};
