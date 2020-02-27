import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./Icons";
import GlobalText from "../GlobalText";
const Footer = styled.footer`
  background-color: ${props => props.theme.footerBgColor};
  padding: 0px 0px 16px 0px;
  margin-top: 32px;
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

const InnerBottom = styled.div``;

const FooterLogo = styled.div`
  display: block;
  position: absolute;
  top: 20px;
  left: 0px;
  padding: 0px 0px 0px 20px;
  width: 120px;
  text-align: center;
`;

const FooterBottom = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
  color: ${props => props.theme.darkGreyColor};
  font-size: 12px;
  text-align: center;
`;

const FooterAddress = styled.div``;
const FooterNumber = styled.div`
  margin-top: 8px;
`;

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

const FooterElement = styled.span`
  padding-left: 16px;
`;

const Address = styled.address`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  margin: 0;
  padding-left: 16px;
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

export default () => {
  const globalText = GlobalText();
  return (
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
      <InnerBottom>
        <FooterBottom>
          <FooterAddress>
            <FooterElement>
              {globalText.text_company_name} {new Date().getFullYear()} &copy;
            </FooterElement>
            <Address>{globalText.text_company_address}</Address>
            <FooterElement>
              {globalText.text_ceo}: {globalText.text_company_ceo}
            </FooterElement>
            <FooterElement>
              {globalText.text_tel}: {globalText.text_company_tel}
            </FooterElement>
          </FooterAddress>
          <FooterNumber>
            <FooterElement>
              {globalText.text_bn_number}: {globalText.text_company_bn_number}
            </FooterElement>
            <FooterElement>
              {globalText.text_rg_number}: {globalText.text_company_rg_number}
            </FooterElement>
          </FooterNumber>
        </FooterBottom>
      </InnerBottom>
    </Footer>
  );
};
