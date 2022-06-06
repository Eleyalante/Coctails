import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class ConfirmDialog extends React.Component {
    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                fullWidth
                onClose={this.props.handleClose}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Delete ${this.props.title}`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{`${this.props.body} You CAN NOT view this ingredient anymore if you delete.`}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.confirm}>YES</Button>
                    <Button onClick={this.props.handleClose}>NO</Button>
                </DialogActions>
            </Dialog>
        );
    }
}
