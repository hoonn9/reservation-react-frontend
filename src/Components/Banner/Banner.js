import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "./Head";
import Content from "./Content";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default () => {
  const [currentItem, setCurrentItem] = useState(0);
  const eventArray = [
    {
      eventType: "test",
      events: [
        {
          img:
            "https://www.lotteresort.com/static/upload/images/20200210/8eb08f66-0f4b-4f24-9bb8-ab64a76e9afd.jpg",
          title: "대박 이벤트",
          period: "2020. 02. 26~ 2020. 02. 28"
        }
      ]
    },
    {
      eventType: "test2",
      events: [
        {
          img:
            "https://www.lotteresort.com/static/upload/images/20191211/cd988a52-013c-48eb-ae04-ab5c921661d7.jpg",
          title: "대박 이벤트2222222222",
          period: "2020. 02. 26~ 2020. 02. 28"
        }
      ]
    }
  ];
  useEffect(() => {}, [currentItem]);

  return (
    <Wrapper>
      <Head eventArray={eventArray} setCurrentItem={setCurrentItem} />
      <Content eventArray={eventArray} currentItem={currentItem} />
    </Wrapper>
  );
};
