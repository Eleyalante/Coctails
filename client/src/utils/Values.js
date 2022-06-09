import {createTheme} from '@mui/material/styles';


export const errorState = {errorDialogOpen: false, error: ''};

export const addState = {confirmDialogOpen: false, ...errorState};

export const defaultColor = '#8faa67';

export const mainTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: defaultColor,
            contrastText: pickTextColorBasedOnBgColorSimple(defaultColor),
        },
        neutral: {
            main: '#64748B',
            contrastText: pickTextColorBasedOnBgColorSimple(defaultColor),
        },

    },

});


export function generateTheme(color) {
    return createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: color,
                contrastText: pickTextColorBasedOnBgColorSimple(color),
            },
            neutral: {
                main: '#64748B',
                contrastText: pickTextColorBasedOnBgColorSimple(color),
            },
        },
    });
}

function pickTextColorBasedOnBgColorSimple(bgColor) {
    var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
        '#000000' : '#ffffff';
}