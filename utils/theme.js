'use client'
import {Roboto} from 'next/font/google';
import {Rozha_One} from 'next/font/google'
import {createTheme} from '@mui/material/styles';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});
const rozhaOne = Rozha_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        value: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        },
        unit: "px"

    },
    direction: "ltr",
    components: {},
    palette: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc',
            contrastText: '#fff',
        },
        error: {
            main: '#ab47bc',
        },
        text: {
            primary: '#fcba03',
            secondary:'#19857b',
            disabled: "#979797"
        },
        divider: "#979797",
        background:{
            paper: '#ab47bc',
            default: '#fff'
        },
        action: {
            active: '#ab47bc',
            hover: '#fcba03',
            hoverOpacity: 0.04,
            selected: '#19857b',
            selectedOpacity: 0.08,
            disabled: "#979797",
            disabledBackground: '#979797',
            disabledOpacity: 0.38,
            focus: '#ce93d8',
            focusOpacity: 0.12,
            activatedOpacity:0.12
        }
    },
    // spacing: f n(),
    shape: {},
    // applyStyles: f r(),
    unstable_sxConfig: {},
    // unstable_sx: f (),
    mixins: {},
    shadows: [],
    typography: {
        fontFamily: rozhaOne.style.fontFamily,
        fontSize: 16,
        h1: {
            fontFamily: "rozhaOne",
            fontWeight: 400,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        h2: {
            fontFamily: "rozhaOne",
            fontWeight: 400,
            fontSize: "5rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        h3: {
            fontFamily: "rozhaOne",
            fontWeight: 400,
            fontSize: "4rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        h4: {
            fontFamily: "rozhaOne",
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        h5: {
            fontFamily: "rozhaOne",
            fontWeight: 400,
            fontSize: "2rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        h6: {
            fontFamily: "rozhaOne",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 0.167,
            letterSpacing: " -0.01562em"
        },
        subtitle1: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        subtitle2: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        body1: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 0.167,
            letterSpacing: " -0.01562em"
        },
        body2: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        button: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        caption: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        overline: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        },
        inherit: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: " -0.01562em"
        }
    },
    transitions: {},
    zIndex: {}


});

export default theme;