import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Slide} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class ErrorDialog extends React.Component{



    render() {
        return   <Dialog
            open={this.props.isOpen}
            fullWidth
            onClose={this.props.handleClose}
            TransitionComponent={Transition}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" style={{color:'#fa0c0c'}}>
                ERROR
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {this.props.body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props.handleClose}  style={{color:'#fa0c0c'}}>OK</Button>
            </DialogActions>
        </Dialog>
    }
}