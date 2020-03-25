import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DesktopTitle = styled.div`
  display: inline-block;
  width: 60%;
  font-size: 46px;
  color: #333;
  font-weight: normal;
  padding: 32px 0px;
`;

const MobileTitle = styled.div`
  display: inline-block;
  width: 77%;
  font-size: 28px;
  color: ${props => props.theme.blackColor};
  font-weight: normal;
  padding: 16px 8px;
`;

const Title = ({ platform, text }) => {
  if (platform === "desktop") {
    return <DesktopTitle>{text}</DesktopTitle>;
  } else if (platform === "mobile") {
    return <MobileTitle>{text}</MobileTitle>;
  } else {
    return null;
  }
};

Title.propTypes = {
  platform: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default Title;
