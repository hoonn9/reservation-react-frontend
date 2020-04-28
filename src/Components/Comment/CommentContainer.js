import React from "react";
import CommentPresenter from "./CommentPresenter";
import CommentListPresenter from "./CommentListPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "./CommentQueries";
import { useState } from "react";

export default ({ platform, postId, data }) => {
  const content = useInput("");
  const [loading, setLoading] = useState(false);
  const [commentList, setCommentList] = useState(data);
  const [createCommentMutation] = useMutation(CREATE_COMMENT, {
    variables: { postId, text: content.value },
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
          setCommentList([...commentList, createComment]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  return (
    <>
      <CommentListPresenter platform={platform} data={commentList} />
      <CommentPresenter content={content} onClick={onClick} loading={loading} />
    </>
  );
};
