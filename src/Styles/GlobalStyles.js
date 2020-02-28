import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
   
    * {
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme.bgColor};
        font-family: 'Noto Sans KR', sans-serif;
    }
    .body-content {
        min-height: 720px;
        margin-top: 120px;
    }
`;
