import React from "react";
import PostPresenter from "./PostPresenter";

export default ({ post, index }) => {
  const { id, title, views, user, createdAt } = post;
  return (
    <PostPresenter
      id={id}
      num={index}
      title={title}
      views={views}
      username={user.username}
      createdAt={createdAt}
    />
  );
};
