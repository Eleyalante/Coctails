import React from 'react';
import LoadingSpinner from "../components/LoadingSpinner";
import {Grid} from "@mui/material";
import ErrorDialog from "../components/ErrorDialog";
import AddItemButton from "../components/AddItemButton";
import CategoryCard from "../components/CategoryCard";
import NoData from "../components/NoData";
import {errorState} from "../utils/Values";
import CategoryService from "../services/CategoryService";

export default class Categories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: true, categories: [], ...errorState}
        this.fetchCategories = this.fetchCategories.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
    }

    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false
        })
    }

    fetchCategories() {
        let service = new CategoryService();
        service.fetchCategories().then((res) => {
            if (res.success) {
                this.setState({
                    categories: res.data,
                    loading: false,
                })
                console.log(this.state);
            } else {
                this.showErrorDialog(res.error);
            }
        })

    };

    componentDidMount() {
        this.fetchCategories();
    }

    render() {
        return (this.state.loading ? (LoadingSpinner()) : <div style={{margin: "20px"}}>
            {this.state.categories.length !== 0 ? <Grid container justifyContent="center" spacing={5}>
                {this.state.categories.map((value) => (
                    <Grid key={value.id} item lg={4} md={6} xs={12}>
                        <CategoryCard category={value}/>
                    </Grid>
                ))}
            </Grid>:<NoData/>

            }
            <AddItemButton href='/add_category'/>
            <ErrorDialog isOpen={this.state.errorDialogOpen}
                         body={this.state.error}
                         handleClose={() => {
                             this.setState({
                                 errorDialogOpen: false
                             });
                         }}/>
        </div>);
    }

}