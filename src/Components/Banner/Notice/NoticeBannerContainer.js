import React from "react";
import NoticeBannerPresenter from "./NoticeBannerPresenter";

export default ({ noticeId, platform, pageData }) => {
  const wrapperWidth = 75;

  return (
    <>
      {pageData ? (
        <NoticeBannerPresenter
          platform={platform}
          data={pageData}
          wrapperWidth={wrapperWidth}
          noticeId={noticeId}
        />
      ) : null}
    </>
  );
};
