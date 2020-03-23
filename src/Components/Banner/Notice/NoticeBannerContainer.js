import React from "react";
import Page from "../../Page";
import NoticeBannerPresenter from "./NoticeBannerPresenter";

export default ({ globalText, noticeId, platform }) => {
  const viewCount = 3;
  const wrapperWidth = 75;
  const pageQuery = Page({
    boardId: noticeId,
    type: "notice",
    first: viewCount
  });
  return (
    <>
      {pageQuery.error ? null : pageQuery.loading ? null : (
        <NoticeBannerPresenter
          platform={platform}
          data={pageQuery.data}
          globalText={globalText}
          wrapperWidth={wrapperWidth}
          noticeId={noticeId}
        />
      )}
    </>
  );
};
