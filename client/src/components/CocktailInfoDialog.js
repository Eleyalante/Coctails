import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Grid, Slide} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default class CocktailInfoDialog extends  React.Component{


    render() {
        return (
            <Dialog
                open={this.props.isOpen}
                fullWidth
                onClose={this.props.handleClose}
                TransitionComponent={Transition}
            >
                <DialogTitle id="scroll-dialog-title">{this.props.cocktail?.name}</DialogTitle>
                <DialogContent dividers={false}>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                    <Typography style={{marginBottom: '10px'}}>
                        Recipe:
                    </Typography>
                    <Typography style={{marginBottom: '10px'}}>
                        {this.props.cocktail?.recipe}
                    </Typography>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                    <Typography style={{marginBottom: '10px'}}>
                        Ingredients:
                    </Typography>
                    <Grid container spacing={1}>
                        {this.props.cocktail?.ingredients.map((e) => {

                            if (e.ingredient !== null) {
                                return <Grid key={e.ingredient.id} item> <Chip label={`${e.ingredient.name} [${e.amount} ${e.ingredient.unit}]`}
                                                                               variant="outlined"/> </Grid>;
                            }
                        })}
                    </Grid>
                    <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                    {
                        this.props.cocktail?.categories.length > 0 ?
                            <>
                                <Typography  style={{marginBottom: '10px'}}>
                                    Categories:
                                </Typography>
                                <Grid container  spacing={1} >
                                    {this.props.cocktail.categories.map((e) => {
                                        return    <Grid key={e.id} item > <Chip label={e.name} variant="outlined" /> </Grid>;
                                    })}
                                </Grid>
                            </>
                            :
                            <></>




                    }
                </DialogContent>
                <DialogActions>
                    <Button  href={`/add_cocktail/${this.props.cocktail?.id}`}>Edit</Button>
                    <Button onClick={this.props.handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        );
    }
}