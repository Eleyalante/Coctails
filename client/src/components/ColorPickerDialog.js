import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import {SketchPicker} from "react-color";
import {Slide} from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default class CocktailInfoDialog extends  React.Component{

    constructor(props) {
        super(props);
        this.state ={
            color: props.color
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };

    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                onClose={this.props.handleClose}
                TransitionComponent={Transition}
            >
                <SketchPicker
                    fullWidth
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeComplete }/>

                <DialogActions>
                    <Button  onClick={() => this.props.changeColor(this.state.color)} style={{color:this.state.color}}>Ok</Button>
                    <Button onClick={this.props.handleClose} style={{color:this.state.color}}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}