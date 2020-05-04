import React, { useEffect } from "react";
import CommentPresenter from "./CommentPresenter";
import CommentListPresenter from "./CommentListPresenter";
import useInput from "../../Hooks/useInput";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT, SEE_COMMENT_COUNT } from "./CommentQueries";
import { useState } from "react";
import { CommentPage } from "../Page";
import PageNavigator from "../PageNavigator";

export default ({ platform, postId, data }) => {
  const content = useInput("");
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState(data);
  const [createCommentMutation] = useMutation(CREATE_COMMENT, {
    variables: { postId, text: content.value },
  });

  const pageSize = 5;
  const rangeSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  const countQuery = useQuery(SEE_COMMENT_COUNT, {
    variables: {
      postId,
    },
    fetchPolicy: "cache-and-network",
  });

  const pageQuery = CommentPage({
    postId,
    first: pageSize,
    skip: currentPage * pageSize,
  });

  const onClick = async () => {
    if (content.value !== "") {
      setLoading(true);
      content.setValue("");
      try {
        const {
          data: { createComment },
        } = await createCommentMutation();
        if (createComment) {
          setCurrentRange(Math.floor(currentCount / (rangeSize * pageSize)));
          const lastPage = Math.floor(currentCount / pageSize);
          if (currentPage === lastPage) {
            pageQuery.refetch();
          } else {
            setCurrentPage(Math.floor(currentCount / pageSize));
          }
          setCurrentCount(currentCount + 1);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (!pageQuery.loading && pageQuery.data) {
      setCommentList(pageQuery.data.seeComment);
    }
  }, [pageQuery.loading, pageQuery.data]);
  useEffect(() => {
    if (!countQuery.loading && countQuery.data) {
      setCurrentCount(countQuery.data.seeCommentCount);
    }
  }, [countQuery.loading, countQuery.data]);
  return (
    <>
      <CommentListPresenter platform={platform} data={commentList} />
      {countQuery.loading || countQuery.error ? null : (
        <PageNavigator
          currentRange={currentRange}
          setCurrentRange={setCurrentRange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          rangeSize={rangeSize}
          listCount={currentCount}
        />
      )}
      <CommentPresenter content={content} onClick={onClick} loading={loading} />
    </>
  );
};
