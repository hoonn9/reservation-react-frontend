import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import PopupContent from "./PopupContent";
import { setCookie, getCookie } from "../../Utils";
const Container = styled.div`
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  position: fixed;
  left: 25%;
  top: 15%;
  z-index: 3000;
`;
const Wrapper = styled.div`
  display: flex;
`;

const MobileContainer = styled.div`
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  background-color: rgba(0, 0, 0, 0.5);
`;
const MobileWrapper = styled.div`
  display: flex;
`;

const closePopupNotToday = id => {
  setCookie("notToday_" + id, "Y", 1);
};

export default ({ data, platform }) => {
  const [popups, setPopups] = useState([]);
  const [closeCount, setCloseCount] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (data) {
      setPopups(
        data.seePopup.filter(e => {
          return getCookie("notToday_" + e.id) !== "Y";
        })
      );
    } else {
      setVisible(false);
    }
  }, [data]);

  useEffect(() => {
    if (popups.length > 0) {
      if (closeCount === popups.length) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    } else {
      setVisible(false);
    }
  }, [popups, closeCount]);

  const closeCounter = () => setCloseCount(closeCount + 1);

  return (
    <>
      {platform === "desktop" ? (
        <Container visible={visible}>
          <Wrapper>
            {popups.length < 1
              ? null
              : popups.map((popup, i) => (
                  <PopupContent
                    platform={platform}
                    key={i}
                    popup={popup}
                    closePopupNotToday={closePopupNotToday}
                    closeCounter={closeCounter}
                  />
                ))}
          </Wrapper>
        </Container>
      ) : (
        <MobileContainer visible={visible}>
          <MobileWrapper>
            {popups.length < 1
              ? null
              : popups.map((popup, i) => (
                  <PopupContent
                    platform={platform}
                    key={i}
                    popup={popup}
                    closePopupNotToday={closePopupNotToday}
                    closeCounter={closeCounter}
                  />
                ))}
          </MobileWrapper>
        </MobileContainer>
      )}
    </>
  );
};
