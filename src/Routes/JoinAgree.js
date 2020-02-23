import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import useCheckbox from "../Hooks/useCheckbox";
import GlobalText from "../GlobalText";
import { Logo } from "../Components/Icons";
import Checkbox from "../Components/Checkbox";
const Container = styled.div`
  width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 45px;
  background-color: ${props => props.theme.superLiteGreyColor};
`;
const Wrapper = styled.div`
  width: 100%;
  display: block;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const AgreeLink = styled(Link)`
  font-size: 11px;
  color: ${props => props.theme.blackColor};
  margin-left: 14px;
  padding-top: 6px;
  right: 0;
  top: 0;
  text-align: right;
  position: absolute;
  right: 0;
  top: 0;
`;

const CheckboxWrapper = styled.div`
  display: block;
  position: relative;
`;

const AgreeCheckbox = styled(Checkbox)`
  width: 80%;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 27px;
`;
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 27px;
  margin-bottom: 16px;
`;

const AgreeButton = styled.button`
  width: 100%;
  height: 45px;
  outline: 0;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  margin-top: 48px;
  background-color: ${props => props.theme.liteGreyColor};
  text-align: center;
  font-size: 14px;
`;

const AgreeActiveButton = styled.button`
  width: 100%;
  height: 45px;
  outline: 0;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  margin-top: 48px;
  background-color: ${props => props.theme.blackColor};
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

export default () => {
  const globalText = GlobalText();

  const allCheck = useCheckbox(false);
  const check1 = useCheckbox(false);
  const check2 = useCheckbox(false);
  const check3 = useCheckbox(false);

  const checkOnClick = e => {
    const {
      target: { name, checked }
    } = e;
    if (name === "allCheck") {
      if (checked) {
        allCheck.setChecked(true);
        check1.setChecked(true);
        check2.setChecked(true);
        check3.setChecked(true);
      } else {
        allCheck.setChecked(false);
        check1.setChecked(false);
        check2.setChecked(false);
        check3.setChecked(false);
      }
    } else if (name === "check1") {
      checked ? check1.setChecked(true) : check1.setChecked(false);
    } else if (name === "check2") {
      checked ? check2.setChecked(true) : check2.setChecked(false);
    } else if (name === "check3") {
      checked ? check3.setChecked(true) : check3.setChecked(false);
    }
  };
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo size={50} />
        </LogoWrapper>
        <Title>{globalText.text_join_title}</Title>
        <SubTitle>{globalText.text_join_subTitle}</SubTitle>
        <AgreeCheckbox
          name="allCheck"
          onClick={checkOnClick}
          checked={allCheck.checked}
          text={globalText.text_join_all_agree}
        />
        <CheckboxWrapper>
          <AgreeCheckbox
            name="check1"
            checked={check1.checked}
            onClick={checkOnClick}
            text={globalText.text_join_1_agree}
          />
          <AgreeLink to="/">{globalText.text_join_detail}</AgreeLink>
        </CheckboxWrapper>
        <CheckboxWrapper>
          <AgreeCheckbox
            name="check2"
            checked={check2.checked}
            onClick={checkOnClick}
            text={globalText.text_join_2_agree}
          />
          <AgreeLink to="/">{globalText.text_join_detail}</AgreeLink>
        </CheckboxWrapper>

        <CheckboxWrapper>
          <AgreeCheckbox
            name="check3"
            checked={check3.checked}
            onClick={checkOnClick}
            text={globalText.text_join_3_agree}
          />
          <AgreeLink to="/">{globalText.text_join_detail}</AgreeLink>
        </CheckboxWrapper>
        {check1.checked && check2.checked ? (
          <Link
            to={{
              pathname: "/join",
              state: {
                isAgree: check3.checked
              }
            }}
          >
            <AgreeActiveButton>{globalText.text_agree}</AgreeActiveButton>
          </Link>
        ) : (
          <AgreeButton>{globalText.text_agree}</AgreeButton>
        )}
      </Wrapper>
    </Container>
  );
};
