import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import { SEE_FULL_POST } from "./PostQueries";
import Loader from "../../Components/Loader";
import ErrorAlert from "../../Components/ErrorAlert";
import FullPost from "../../Components/FullPost";
import GlobalText from "../../GlobalText";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 32px;
`;
const ButtonWrapper = styled.div`
  text-align: end;
`;
const Button = styled.button`
  padding: 8px 16px;
  margin: 16px;
  font-size: 16px;
`;

export default ({ location }) => {
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
    if (type === "post" || type === "free") {
      pathname = `/board/${boardId}`;
    } else if (type === "notice") {
      pathname = "/notice";
    }
  } else {
    const { pathname: locationPathname } = location;
    id = locationPathname.split("/")[2];
    type = locationPathname.split("/")[1];
    currentPage = 0;
    currentRange = 0;

    if (type === "post" || type === "free") {
      boardId = "ck74d5iiz001b0734kmyiwdb7";
      pathname = `/board/${boardId}`;
    } else if (type === "notice") {
      boardId = "ck7u4vv4t00bu0797n1hkw0mg";
      pathname = "/notice";
    }
  }

  const { data, error, loading } = useQuery(SEE_FULL_POST, {
    variables: {
      id
    },
    fetchPolicy: "network-only"
  });
  const globalText = GlobalText();

  return (
    <div className="body-content">
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <Container>
          <Title>
            {type === "free"
              ? globalText.text_free_board
              : globalText.text_notice}
          </Title>
          <FullPost data={data} type={type} />
          <ButtonWrapper>
            <Link
              to={{
                pathname,
                state: {
                  id: boardId,
                  type,
                  currentPage,
                  currentRange
                }
              }}
            >
              <Button>목록</Button>
            </Link>
          </ButtonWrapper>
        </Container>
      )}
    </div>
  );
};
