import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./Icons";
const Footer = styled.footer`
  background-color: ${props => props.theme.footerBgColor};
`;

const FooterInfo = styled.div`
  width: 100%;
  padding: 25px 0px 25px 0px;
  position: relative;
  margin: 0 auto;
`;

const InnerTop = styled.div`
  width: 100%;
`;
const FooterLogo = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  left: 0px;
  padding: 0px 0px 0px 20px;
  width: 120px;
  text-align: center;
`;
const InnerBottom = styled.div``;
const InfoListWrapper = styled.div`
  display: block;
  text-align: center;
  overflow: hidden;
  padding-left: 120px;
`;
const InfoList = styled.ul`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
`;

const InfoListItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const InfoLink = styled(Link)`
  color: ${props => props.theme.whiteColor};
  opacity: 0.7;
  text-decoration: none;
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;

const linkArray = [
  { name: "about us", to: "/" },
  { name: "support", to: "/" },
  { name: "press", to: "/" },
  { name: "api", to: "/" },
  { name: "jobs", to: "/" },
  { name: "privacy", to: "/" },
  { name: "terms", to: "/" },
  { name: "directory", to: "/" },
  { name: "profiles", to: "/" },
  { name: "hashtags", to: "/" },
  { name: "language", to: "/" }
];

export default () => (
  <Footer>
    <InnerTop>
      <FooterInfo>
        <FooterLogo>
          <Logo />
        </FooterLogo>
        <InfoListWrapper>
          <InfoList>
            {linkArray.map(link => {
              return (
                <InfoListItem>
                  <InfoLink to={link.to}>{link.name}</InfoLink>
                </InfoListItem>
              );
            })}
          </InfoList>
        </InfoListWrapper>
      </FooterInfo>
    </InnerTop>
    <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
