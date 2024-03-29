import {Inter} from "next/font/google";
import "./globals.css";
import './MuiClassNameSetup';
import ThemeRegistry from '/utils/ThemeRegistry'
import * as React from 'react';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import Box from "@mui/material/Box";
// import  theme  from "/utils/theme"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Aleksa Shop",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        {/*<CssVarsProvider theme={theme}>*/}
            <body className={inter.className}>
            <ThemeRegistry options={{key: 'mui-theme'}}>{children}</ThemeRegistry>
            </body>
        {/*</CssVarsProvider>*/}
        </html>
    );
}
