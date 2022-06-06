import { createTheme } from '@mui/material/styles';


export const errorState = { errorDialogOpen: false, error: ''};

export const addState = { confirmDialogOpen: false ,...errorState};

export const primaryColor = '#8faa67';

export const mainTheme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: primaryColor,
            darker: '#4e7234',
            contrastText: '#fff',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});