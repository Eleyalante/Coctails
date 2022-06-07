import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Grid } from "@mui/material";
import ErrorDialog from "../components/ErrorDialog";
import AddItemButton from "../components/AddItemButton";
import NoData from "../components/NoData";
import CocktailService from "../services/CocktailService";
import CocktailCard from "../components/CocktailCard";
import {errorState} from "../utils/Values";

export default class Cocktails extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cocktails: [], loading: true, ...errorState};
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

    fetchCocktails() {
        let service = new CocktailService();
        service.fetchCocktails().then((res) => {
            if (res.success) {
                this.setState({
                    loading: false,
                    cocktails: res.data,
                });
            } else {
                this.showErrorDialog(res.error);
            }
        });
    }

    componentDidMount() {
        this.fetchCocktails();
    }

    render() {
        return this.state.loading ? (
            LoadingSpinner()
        ) : (
            <div style={{ margin: "20px" }}>
                {this.state.length === 0 ? (
                    <NoData />
                ) : (
                    <Grid container justifyContent="center" spacing={5}>
                        {this.state.cocktails.map((value) => (
                            <Grid key={value.id} item lg={4} md={6} xs={12}>
                                <CocktailCard cocktail={value} />
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
            </div>
        );
    }
}
