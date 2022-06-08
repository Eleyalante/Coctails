import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Grid } from "@mui/material";
import ErrorDialog from "../components/ErrorDialog";
import AddItemButton from "../components/AddItemButton";
import NoData from "../components/NoData";
import CocktailService from "../services/CocktailService";
import CocktailCard from "../components/CocktailCard";
import {errorState} from "../utils/Values";
import CocktailInfoDialog from "../components/CocktailInfoDialog";
import withParams from "../utils/ComponentWithParams";
import queryString from 'query-string';

class Cocktails extends React.Component {

    constructor(props) {
        super(props);
        const { location: { search } } = this.props;
        const values = queryString.parse(search);
        this.state = { category: values.category, ingredient: values.ingredient, cocktails: [], loading: true, selectedCocktail: null,detailIsOpen:false, ...errorState};
        this.fetchCocktails = this.fetchCocktails.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
    }

    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false,
        });
    }

    async fetchCocktails() {
        let service = new CocktailService();
        let response;
        console.log(this.state);
        if(this.state.category !== undefined){
            response = await  service.fetchCocktailsWithCategory(this.state.category);
        }else if(this.state.ingredient !== undefined){
            console.log(this.state.ingredient);
            response = await  service.fetchCocktailsWithIngredient(this.state.ingredient);
        }else{
            response = await  service.fetchCocktails();
        }
        if (response.success) {
            this.setState({
                loading: false,
                cocktails: response.data,
            });
        } else {
            this.showErrorDialog(response.error);
        }
    }

    async componentDidMount() {
        await this.fetchCocktails();
    }

    render() {
        return this.state.loading ? (
            LoadingSpinner()
        ) : (
            <div style={{ margin: "20px" }}>
                {this.state.cocktails.length === 0 ? (
                    <NoData />
                ) : (
                    <Grid container justifyContent="center" spacing={5}>
                        {this.state.cocktails.map((value) => (
                            <Grid key={value.id} item lg={4} md={6} xs={12}>
                                <CocktailCard cocktail={value} onDetailClick={()=>{
                                    console.log(value);
                                    this.setState({
                                        selectedCocktail:value,
                                        detailIsOpen:true
                                    });
                                    console.log(this.state);
                                }} />
                            </Grid>
                        ))}
                    </Grid>
                )}
                <AddItemButton href="/add_cocktail" />
                <ErrorDialog
                    isOpen={this.state.errorDialogOpen}
                    body={this.state.error}
                    handleClose={() => {
                        this.setState({
                            errorDialogOpen: false,
                        });
                    }}
                />
                <CocktailInfoDialog
                    isOpen={this.state.detailIsOpen}
                    cocktail={this.state.selectedCocktail}
                    handleClose={() => {
                        this.setState({
                            detailIsOpen: false,
                        });
                    }}
                />
            </div>
        );
    }
}
export default withParams(Cocktails);