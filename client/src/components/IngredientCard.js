import React from 'react';
import {Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAppleAlt, faMartiniGlassCitrus, faPen} from "@fortawesome/free-solid-svg-icons";


export default class IngredientCard extends React.Component {

    constructor(props) {
        super(props);
        this.ingredient = props.ingredient;
        this.hasImage = this.ingredient.image.length === 0;
    }

    render() {
        return (
            <Card sx={{minWidth: 275}} elevation={2}>
                {
                    this.hasImage ?
                        <div style={{
                            height: 140, display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><FontAwesomeIcon style={{height: 50}} icon={faAppleAlt}/></div> : (
                            <CardMedia
                                component="img"
                                height="140"
                                width='100'
                                style={{objectFit: 'scale-down'}}
                                image={this.ingredient.image}
                            />
                        )
                }
                <CardContent>
                    <Typography style={{whiteSpace: 'pre-wrap'}} gutterBottom variant="h5">
                        {this.ingredient.name}
                    </Typography>
                    <Typography style={{whiteSpace: 'pre-wrap'}} gutterBottom variant="subtitle1">
                        [ unit: {this.ingredient.unit} ]
                    </Typography>
                    <Button style={{marginTop: '10px', marginBottom: '10px'}}
                            variant="contained" href={`/add_ingredient/${this.ingredient.id}`}
                            fullWidth
                            startIcon={<FontAwesomeIcon icon={faPen}/>}>
                        Edit
                    </Button>

                    <Button variant="contained" fullWidth href={`/cocktails?ingredient=${this.ingredient.id}`}
                            startIcon={<FontAwesomeIcon icon={faMartiniGlassCitrus}/>}>
                        View cocktails with {this.ingredient.name}
                    </Button>
                </CardContent>
            </Card>);
    }
}