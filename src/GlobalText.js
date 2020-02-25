const COMPANY_NAME = "냥이특별시";

export default () => {
  const language = "kr";
  if (language === "kr") {
    return {
      text_login: "로그인",
      text_logout: "로그아웃",
      text_join: "회원가입",
      text_mypage: "마이페이지",
      text_free_board: "자유게시판",
      text_id: "아이디",
      text_pw: "비밀번호",
      text_pw_confirm: "비밀번호 확인",
      text_email: "이메일",
      text_address: "주소",
      text_phone_num: "휴대폰번호",
      text_name: "이름",
      text_username: "닉네임",
      text_cancel: "취소",
      text_write: "글쓰기",
      text_write_title_placeholder: "제목을 입력해주세요.",
      text_regist: "등록",
      text_network_error: "Network error. your connection has heen denied. ",
      text_join_title: `${COMPANY_NAME} 서비스 이용 동의`,
      text_join_subTitle: "회원가입시 개인정보 수집 및 이용 동의가 필요합니다.",
      text_join_all_agree: "전체 동의",
      text_join_1_agree: `(주) ${COMPANY_NAME} 개인정보 수집 및 이용동의 (필수)`,
      text_join_2_agree: `${COMPANY_NAME} 이용약관 (필수)`,
      text_join_3_agree: "마케팅 활용 및 광고 정보 수신 동의 (선택)",
      text_join_detail: "자세히 보기",
      text_join_error: "가입에 실패하였습니다. 다시 시도하세요.",
      text_join_success: "가입에 성공하였습니다. 로그인 하세요.",
      text_join_phone_placeholder: "' - ' 를 제외하고 입력 해주세요.",
      text_agree: "동의",
      text_email_error: "이메일 주소를 다시 확인해주세요.",
      text_id_error:
        "5~20자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다.",
      text_pw_error: "8~15자의 영문 대 소문자, 숫자, 특수문자를 사용하세요. ",
      text_phone_error: "휴대폰 번호를 다시 입력하세요.",
      text_pwcf_error: "비밀번호가 일치하지 않습니다.",
      text_login_pw_error: "비밀번호가 일치하지 않습니다.",
      text_login_error:
        "계정이 존재하지 않거나 입력한 정보가 일치하지 않습니다.",
      text_board_header_no: "번호",
      text_board_header_title: "제목",
      text_board_header_name: "작성자",
      text_board_header_views: "조회수",
      text_board_header_date: "작성일"
    };
  } else if (language === "en") {
    return {
      text_login: "LOGIN",
      text_join: "JOIN",
      text_mypage: "MYPAGE",
      text_id: "ID",
      text_pw: "PASSWORD",
      text_join_all_agree: "전체 동의"
    };
  }
};
