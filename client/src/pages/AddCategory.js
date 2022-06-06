import React from "react";
import {Button, Card, CardContent, TextField, Box, Input} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import LoadingSpinner from "../components/LoadingSpinner";
import ConfirmDialog from "../components/ConfirmDialog";
import ErrorDialog from "../components/ErrorDialog";
import withParams from "../utils/ComponentWithParams";
import {addState} from "../utils/Values";
import CategoryService from "../services/CategoryService";
import isNullOrEmpty from "../utils/StringUtil";



class AddCategory extends React.Component {


    constructor(props) {
        super(props);
        let id = props.params.id === undefined ? '' : props.params.id;
        this.state = {
            name: '',
            nameError: false,
            loading: id !== '',
            id: id,
            image: '',
            ...addState
        };
        this.fetchCategory = this.fetchCategory.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submit = this.submit.bind(this);
        this.delete = this.delete.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
    }

    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false
        })
    }

    fetchCategory() {
        let service = new CategoryService();
        service.fetchCategory(this.state.id).then((res) => {
            if (res.success) {
                this.setState({
                    loading: false, name: res.data.name, unit: res.data.unit
                })
            } else {
                this.showErrorDialog(res.error);
            }
        })

    };

    delete() {
        let service = new CategoryService();
        this.setState({
            loading: true, confirmDialogOpen: false
        })
        service.deleteCategory(this.state.id).then((res) => {
            console.log(res);
            if (res.success) {
                window.location.href = '/categories';
            } else {
                console.log(res);
                this.showErrorDialog(res.error);
            }
        })

    }

    submit() {
        if (isNullOrEmpty(this.state.name)) {
            this.setState({
                nameError: isNullOrEmpty(this.state.name), unitError: isNullOrEmpty(this.state.unit ),
            })
            return;
        }
        let service = new CategoryService();
        let body = {
            'name': this.state.name,
        };
        if(this.state.id !== ''){
            body = {
                id:this.state.id, 'name': this.state.name
            };
        }
        this.setState({
            loading: true
        })
        if(this.state.id !== ''){
            service.updateCategory(body).then((res) => {
                console.log(res);
                if (res.success) {
                    window.location.href = '/categories';
                } else {
                    this.showErrorDialog(res.error);
                }
            });
        }else{
            service.createCategory(body).then((res) => {
                console.log(res);
                if (res.success) {
                    window.location.href = '/categories';
                } else {
                    this.showErrorDialog(res.error);
                }
            });
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    };


    componentDidMount() {
        if (this.state.id !== '') {
            this.fetchCategory();
        }
    }


    render() {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80%', width:'100%'}} >
            {this.state.loading ? <LoadingSpinner/> :
                <Card elevation={2}  justify="center" style={{maxWidth: '550px', margin: '10px'}}>
                    <CardContent >
                        <TextField
                            error={this.state.nameError}
                            id="outlined-required"
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            fullWidth
                        />
                        <Button variant="contained" fullWidth style={{marginTop: '20px'}} onClick={this.submit}
                                startIcon={<FontAwesomeIcon
                                    icon={this.state.id === '' ? faPlus : faPen}/>}>{this.state.id === '' ? 'Add' : 'Update'} </Button>
                        {this.state.id === '' ? null :
                            <Button variant="contained" fullWidth style={{marginTop: '20px'}} onClick={() => {
                                this.setState({
                                    confirmDialogOpen: true
                                });
                            }}
                                    startIcon={<FontAwesomeIcon icon={faTrash}/>}> Delete </Button>}
                    </CardContent>
                </Card>}
            <ConfirmDialog title={`Category: ${this.state.name}`}
                           body='Are you sure you want to delete this category?' confirm={() => this.delete()}
                           handleClose={() => {
                               this.setState({
                                   confirmDialogOpen: false
                               });
                           }} isOpen={this.state.confirmDialogOpen}/>
            <ErrorDialog isOpen={this.state.errorDialogOpen}
                         body={this.state.error}
                         handleClose={() => {
                             this.setState({
                                 errorDialogOpen: false
                             });
                         }}
            />
        </div>;
    }
}

export default withParams(AddCategory);