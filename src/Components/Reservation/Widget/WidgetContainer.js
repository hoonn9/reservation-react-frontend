import React, { useState } from "react";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import WidgetPresenter from "./WidgetPresenter";
import MobileWidgetPresenter from "./MobileWidgetPresenter";
import useInput from "../../../Hooks/useInput";
import { addDate } from "../../../Utils";
export default ({ platform }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDate(startDate, 1));
  const userCount = useInput(1);
  const typeCount = useInput(1);
  const subCount = useInput(0);

  const [startDay] = useState(format(startDate, "E", { locale: ko }));
  const [endDay] = useState(format(endDate, "E", { locale: ko }));

  return platform === "desktop" ? (
    <WidgetPresenter
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      startDay={startDay}
      endDay={endDay}
      userCount={userCount}
      typeCount={typeCount}
      subCount={subCount}
    />
  ) : (
    <MobileWidgetPresenter
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      startDay={startDay}
      endDay={endDay}
      userCount={userCount}
      typeCount={typeCount}
      subCount={subCount}
    />
  );
};
