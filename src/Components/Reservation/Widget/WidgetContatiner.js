import React from "react";
import WidgetPresenter from "./WidgetPresenter";
import { useState } from "react";
import GlobalText from "../../../GlobalText";
import { useEffect } from "react";
import ko from "date-fns/locale/ko";
import { format } from "date-fns";

export default () => {
  const globalText = GlobalText();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [startDay, setStartDay] = useState(
    format(startDate, "E", { locale: ko })
  );
  const [endDay, setEndDay] = useState(format(endDate, "E", { locale: ko }));

  useEffect(() => {
    setStartDay(format(startDate, "E", { locale: ko }));
    setEndDay(format(endDate, "E", { locale: ko }));
  }, [startDate, endDate]);

  return (
    <WidgetPresenter
      startDate={startDate}
      setStartDate={setStartDate}
      startDay={startDay}
      endDate={endDate}
      endDay={endDay}
      setEndDate={setEndDate}
      globalText={globalText}
    />
  );
};
