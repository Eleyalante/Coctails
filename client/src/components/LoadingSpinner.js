import React from "react";
import {CircularProgress} from "@mui/material";


export default function LoadingSpinner() {
    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
            }}
        >
            <CircularProgress color='primary' />
        </div>
    );
}