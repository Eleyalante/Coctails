import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlerts(props) {
    const { notify, setNotify } = props;

    return (
        <Box sx={{ width: "100%" }}>
            <Collapse in={notify.notify}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="big"
                            // width="1000px"
                            onClick={() => {
                                setNotify(false);
                            }}
                        ></IconButton>
                    }
                >
                    Success
                </Alert>
            </Collapse>
        </Box>
    );
}
