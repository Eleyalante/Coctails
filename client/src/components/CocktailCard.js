import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import Chip from "@mui/material/Chip";
import {Button, Grid} from "@mui/material";

export default class CocktailCard extends React.Component {


    constructor(props) {
        super(props);
        this.cocktail = props.cocktail;
        this.onDetailClick = props.onDetailClick;
        this.hasImage = this.cocktail.image.length === 0;
    }

    render() {
        return (<Card>
            {this.hasImage ? <CardMedia
                component="img"
                height="140"
                width='100'
                style={{objectFit: 'scale-down'}}
                image='/images/Logo.png'
            /> : (<CardMedia
                component="img"
                height="140"
                width='100'
                style={{objectFit: 'scale-down'}}
                image={this.cocktail.image}
            />)}
            <CardContent>
                <Typography variant="h4">
                    {this.cocktail.name}
                </Typography>
                <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                <Typography style={{marginBottom: '10px'}}>
                    Ingredients:
                </Typography>
                <Grid container spacing={1}>
                    {this.cocktail.ingredients.map((e) => {

                        if (e.ingredient !== null) {
                            return <Grid key={e.ingredient.id} item> <Chip label={e.ingredient.name}
                                                                           icon={<img
                                                                               src={(e.ingredient.image === undefined || e.ingredient.image?.length < 1) ? '/images/Logo_2.png' : e.ingredient.image}
                                                                               height={20} alt={e.ingredient.name}
                                                                               style={{marginLeft: '10px', justifyContent: 'center'}}/>}
                                                                           variant="outlined"/> </Grid>;
                        }
                    })}
                </Grid>
                <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                {
                    this.cocktail.categories.length > 0 ?
                        <>
                            <Typography  style={{marginBottom: '10px'}}>
                                Categories:
                            </Typography>
                            <Grid container  spacing={1} >
                                {this.cocktail.categories.map((e) => {
                                    return    <Grid key={e.id} item > <Chip label={e.name} variant="outlined"/> </Grid>;
                                })}
                            </Grid>
                        </>
                        :
                        <></>




                }
                <Button style={{marginTop: '20px', marginBottom: '10px'}}
                        variant="contained" onClick={this.onDetailClick}
                        fullWidth
                        startIcon={<InfoIcon/>}>
                    Detail
                </Button>
            </CardContent>
        </Card>);
    }
}