import * as React from 'react';

import styled, {ThemeProvider, withTheme } from 'styled-components';

import { media } from './responsive';

export const mainColor = "#006F67";
const codeFont = "'Inconsolata',monospace";

export const theme = {
    mainColor: mainColor,
    backgroundColor: "#FFF",
    secondaryColor: "#FAFAFA",


    headlineColor: mainColor,
    headlineFont: codeFont,


    navbarHoverColor: mainColor,
    navbarHoverTextColor: "#000",
    navbarTextColor: "#FFF",
    navbarFont: "Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif",
    navbarFontSize: "1.2em",

    cellFrame: "#000",
    cellBackground: "#EEE",

    tabFrame: "#000",
    activeTab: "#CCC",
    activeTabTextColor: "#000",
    inactiveTab: "#FFF",
    inactiveTabTextColor: "#666",

    ...media
}

//@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css");
//
export const Frame = withTheme(styled.div`
  @import url("https://fonts.googleapis.com/css?family=Inconsolata&display=swap");
  
  background-color: ${props=> props.theme.backgroundColor }
  
  
  
`);