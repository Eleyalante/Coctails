import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import {Grid} from "@mui/material";
import IngredientService from "../services/IngredientService";
import ErrorDialog from "../components/ErrorDialog";
import AddItemButton from "../components/AddItemButton";
import IngredientCard from "../components/IngredientCard";
import NoData from "../components/NoData";


export default class Ingredients extends React.Component {

    constructor(props) {
        super(props);
        this.state = {ingredients: [], loading: true, errorDialogOpen: false, error: ''};
        this.fetchIngredients = this.fetchIngredients.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
    }

    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false
        })
    }

    fetchIngredients() {
        let service = new IngredientService();
        service.fetchIngredients().then((res) => {
            if (res.success) {
                this.setState({
                    loading: false,
                    ingredients: res.data
                })
            } else {
                this.showErrorDialog(res.error);
            }
        })

    };

    componentDidMount() {
        this.fetchIngredients();
    };


    render() {
        return (this.state.loading ? (LoadingSpinner()) : (<div style={{margin: "20px"}}>
            {this.state.ingredients.length === 0 ? <NoData/> : <Grid container justifyContent="center" spacing={5}>
                {this.state.ingredients.map((value) => (
                    <Grid key={value.id} item lg={4} md={6} xs={12}>
                        <IngredientCard ingredient={value}/>
                    </Grid>
                ))}
            </Grid>}
            <AddItemButton href='/add_ingredient'/>
            <ErrorDialog isOpen={this.state.errorDialogOpen}
                         body={this.state.error}
                         handleClose={() => {
                             this.setState({
                                 errorDialogOpen: false
                             });
                         }}
            />

        </div>));
    }

}