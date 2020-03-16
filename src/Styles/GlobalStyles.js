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
        min-height: 780px;
        margin-top: 180px;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.blackColor};
    }
    button {
        text-transform: none;
        border: 0;
        outline: 0;
    }
    option {
        display: block;
        white-space: pre;
        min-height: 1.2em;
    }
    button {
        cursor: pointer;
    }
`;
