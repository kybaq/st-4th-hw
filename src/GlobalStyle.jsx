import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import React from "react";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: 'Times New Roman', Times, serif;
        color: violet;
    }

`;

export default GlobalStyle;
