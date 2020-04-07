import React from "react";
import styled from "styled-components";
import { globalText } from "../GlobalText";

const Wrapper = styled.div`
  line-height: 1.15;
`;

const Medium = styled.div`
  font-size: 21px;
  font-weight: 600;
  padding: 16px 0px;
`;

export const centerList = [
  {
    title: `${globalText.text_company_name} 계정은 어떻게 만드나요?`,
    content: (
      <Wrapper>
        {`
        아직 ${globalText.text_company_name} 계정이 없는 경우 홈페이지로 이동해
        회원 가입을 클릭하세요. 
        ${globalText.text_company_name} 회원 가입 및 계정 만들기는 무료입니다.
        회원 가입 후, 예약하기 전에 계정 설정을 완료해주세요.`}
      </Wrapper>
    ),
  },
  {
    title: `비밀번호를 재설정하거나 변경하려면 어떻게 하나요?`,
    content: (
      <Wrapper>
        <Medium>{"비밀번호 재설정"}</Medium>
        {`
        방법 비밀번호를 잊어버렸거나 ${globalText.text_company_name} 계정에
        로그인하는 데 문제가 있다면 비밀번호 재설정 페이지로 가세요.
        ${globalText.text_company_name} 계정에 사용하는 이메일 주소를 입력한 후
        재설정 링크 보내기를 누르세요. 비밀번호를 재설정할 수 있는 링크가
        이메일로 발송됩니다.`}
        <Medium>{"비밀번호 변경 방법"}</Medium>
        {`비밀번호를 알고 있지만 변경하고
        싶다면 다음 절차를 따르세요. 계정의 마이페이지로 가세요. 회원정보변경을
        클릭하거나 누르세요. 현재 비밀번호와 새 비밀번호를 입력하고, 새
        비밀번호를 확인한 다음 비밀번호 업데이트를 클릭하거나 누르세요.`}
      </Wrapper>
    ),
  },

  {
    title: `숙소를 어떻게 검색하나요?`,
    content: (
      <Wrapper>
        {`
        ${globalText.text_company_name} 숙소를 검색할 때 필터를 이용하고 숙소 설명을 잘 읽어보면 여행 목적에 적합한 숙소로 옵션 범위를 좁힐 수 있습니다.`}
      </Wrapper>
    ),
  },
];
