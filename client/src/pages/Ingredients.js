import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import AddIcon from '@mui/icons-material/Add';
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Fab,
    Grid,
    Typography
} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAppleAlt, faPen, faMartiniGlassCitrus} from "@fortawesome/free-solid-svg-icons";
import {IngredientService} from "../services/IngredientService";


export default class Ingredients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ingredients: [], loading: true};
        this.fetchIngredients = this.fetchIngredients.bind(this);
    }

    async fetchIngredients() {
        let service = new IngredientService();
        let result = await service.fetchIngredients();
        console.log(result);
        if(result.success){
            this.setState({
                loading:false,
                ingredients:result.data
            })
        }
        //todo handle error
    };

    componentDidMount() {
        this.fetchIngredients();
    };


    render() {
        return (this.state.loading ? (LoadingSpinner()) : (<div style={{margin: "20px"}}>
            <Grid container justifyContent="center" spacing={5}>
                {this.state.ingredients.map((value) => (
                    <Grid key={value.id} item lg={4} md={6} xs={12}>
                        {this.ingredientCard(value)}
                    </Grid>
                ))}
            </Grid>
            <Fab color="primary" aria-label="add" href='/add_ingredient' style={{
                right: 20,
                bottom: 20,
                position: 'fixed'

            }}>
                <AddIcon/>
            </Fab>
        </div>));
    }

    ingredientCard(ingredientModel) {
        let withoutImage = ingredientModel.image.length === 0;
        return (
            <Card sx={{minWidth: 275}} elevation={2}>
                {
                    withoutImage ?
                        <div style={{
                            height: 140, display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}><FontAwesomeIcon style={{height: 50}} icon={faAppleAlt}/></div> : (
                            <CardMedia
                                component="img"
                                height="140"
                                width='100'
                                style={{objectFit:'scale-down'}}
                                image={ingredientModel.image}
                            />
                        )
                }
                <CardContent>
                    <Typography style={{whiteSpace: 'pre-wrap'}} gutterBottom variant="subtitle1">
                        {ingredientModel.name}
                    </Typography>
                    <Typography style={{whiteSpace: 'pre-wrap'}} gutterBottom variant="subtitle1">
                       [ unit: {ingredientModel.unit} ]
                    </Typography>
                    <Typography marginTop='10px' marginBottom='10px' >
                        <Button variant="contained" href={`/add_ingredient/${ingredientModel.id}`} fullWidth startIcon={<FontAwesomeIcon icon={faPen}/>}>Edit</Button>
                    </Typography>
                    <Typography>
                        <Button variant="contained" fullWidth startIcon={<FontAwesomeIcon icon={faMartiniGlassCitrus}/>}>View
                            cocktails with {ingredientModel.name}</Button>
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}