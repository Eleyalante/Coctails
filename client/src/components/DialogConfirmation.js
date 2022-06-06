import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const { confirmDialog, setConfirmDialog } = props;

    return (
        <div>
            <Dialog open={confirmDialog.isOpen} TransitionComponent={Transition} keepMounted aria-describedby="alert-dialog-slide-description">
                <DialogTitle>{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">Are you sure you want to delete? You CAN NOT view this in your list anymore if you delete</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}>Disagree</Button>
                    <Button onClick={confirmDialog.onConfirm}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
