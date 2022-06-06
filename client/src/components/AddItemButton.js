import React from "react";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


export default class AddItemButton extends  React.Component{

    render() {
       return <Fab color='primary'  aria-label="add" href={this.props.href} style={{
            right: 20,
            bottom: 20,
            position: 'fixed'
        }}>
            <AddIcon/>
        </Fab>
    }
}