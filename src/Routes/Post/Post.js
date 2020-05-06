import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { Link, useLocation } from "react-router-dom";
import { SEE_FULL_POST } from "./PostQueries";
import Loader from "../../Components/Loader";
import ErrorAlert from "../../Components/ErrorAlert";
import FullPost from "../../Components/FullPost";
import GlobalText, { globalText } from "../../GlobalText";
import { setStorage, getStorage } from "../../Utils";
import Title from "../../Components/Title";
import Comment from "../../Components/Comment";
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const ButtonWrapper = styled.div`
  text-align: end;
`;
const Button = styled.button`
  padding: 8px 16px;
  margin: 16px;
  font-size: 14px;
`;

export default ({ platform }) => {
  let location = useLocation();
  var id;
  var type;
  var currentPage;
  var currentRange;
  var boardId;
  var pathname;

  if (location.state !== undefined) {
    id = location.state.id;
    type = location.state.type;
    currentPage = location.state.currentPage;
    currentRange = location.state.currentRange;
    boardId = location.state.boardId;

    if (type === "free") {
      pathname = `/board/${boardId}`;
    } else if (type === "notice") {
      pathname = "/notice";
    }
  } else {
    const boardState = getStorage(`board_${type}`);
    const { pathname: locationPathname } = location;
    id = locationPathname.split("/")[2];
    type = locationPathname.split("/")[1];

    if (boardState) {
      boardId = boardState.boardId;
      currentRange = boardState.currentRange;
      currentPage = boardState.currentPage;
    }

    if (type === "post") {
      pathname = `/board/${boardId}`;
    } else if (type === "notice") {
      pathname = "/notice";
    }
  }

  const { data, error, loading } = useQuery(SEE_FULL_POST, {
    variables: {
      id,
    },
    fetchPolicy: "network-only",
  });

  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <Container>
          <Title
            platform={platform}
            text={
              type === "free"
                ? globalText.text_free_board
                : globalText.text_notice
            }
          />
          <FullPost platform={platform} data={data} type={type} />
          <ButtonWrapper>
            <Link
              to={{
                pathname,
                state: {
                  id: boardId,
                  currentPage,
                  currentRange,
                },
              }}
            >
              <Button>{globalText.text_list}</Button>
            </Link>
          </ButtonWrapper>
          {type !== "notice" ? (
            <Comment platform={platform} postId={id} />
          ) : null}
        </Container>
      )}
    </div>
  );
};
