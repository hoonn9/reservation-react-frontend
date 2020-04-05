import React from "react";
import CenterPresenter from "./CenterPresenter";
import Title from "../../Components/Title";
import { globalText } from "../../GlobalText";

export default ({ platform }) => {
  return (
    <div className="body-content">
      <Title platform={platform} text={globalText.text_center} />
      <CenterPresenter />
    </div>
  );
};
