import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import PopupContent from "./PopupContent";
import { setCookie, getCookie } from "../../Utils";
const Container = styled.div`
  position: fixed;
  left: 25%;
  top: 25%;
  z-index: 3000;
`;
const Wrapper = styled.div`
  display: flex;
`;

const closePopupNotToday = id => {
  setCookie("notToday_" + id, "Y", 1);
};

export default ({ data }) => {
  const [popups, setPopups] = useState([]);

  useEffect(() => {
    setPopups(
      data.seePopup.filter(e => {
        return getCookie("notToday_" + e.id) !== "Y";
      })
    );
  }, []);

  return (
    <Container>
      <Wrapper>
        {popups.length < 1
          ? null
          : popups.map((popup, i) => (
              <PopupContent
                key={i}
                popup={popup}
                closePopupNotToday={closePopupNotToday}
              />
            ))}
      </Wrapper>
    </Container>
  );
};
