import React from 'react';
import {Button, Card, CardContent, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMartiniGlassCitrus, faPen} from "@fortawesome/free-solid-svg-icons";

export default class CategoryCard extends React.Component{

    constructor(props) {
        super(props);
        this.category = props.category;
    }

    render() {
        return (
            <Card sx={{minWidth: 275}} elevation={2}>
                <CardContent>
                    <Typography style={{whiteSpace: 'pre-wrap'}} gutterBottom variant="h5">
                        {this.category.name}
                    </Typography>
                    <Button style={{marginTop: '10px', marginBottom: '10px'}}
                            variant="contained" href={`/add_category/${this.category.id}`}
                            fullWidth
                            startIcon={<FontAwesomeIcon icon={faPen}/>}>
                        Edit
                    </Button>

                    <Button variant="contained" fullWidth
                            startIcon={<FontAwesomeIcon icon={faMartiniGlassCitrus}/>}>
                        View cocktails with {this.category.name}
                    </Button>
                </CardContent>
            </Card>);
    }
}