import React, { useState } from "react";
import Page from "../../Page";
import NoticeBannerPresenter from "./NoticeBannerPresenter";

export default ({ globalText, noticeId }) => {
  const viewCount = 3;
  const [wrapperWidth, setWrapperWidth] = useState(75);
  const pageQuery = Page({
    boardId: noticeId,
    type: "notice",
    first: viewCount
  });
  return (
    <>
      {pageQuery.error ? null : pageQuery.loading ? null : (
        <NoticeBannerPresenter
          data={pageQuery.data}
          globalText={globalText}
          wrapperWidth={wrapperWidth}
          noticeId={noticeId}
        />
      )}
    </>
  );
};
