import React from "react";
import {Button, Card, CardContent, TextField, Box, Input} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import IngredientService from "../services/IngredientService";
import LoadingSpinner from "../components/LoadingSpinner";
import ConfirmDialog from "../components/ConfirmDialog";
import ErrorDialog from "../components/ErrorDialog";
import withParams from "../utils/ComponentWithParams";
import {addState} from "../utils/Values";
import isNullOrEmpty from "../utils/StringUtil";



class AddIngredient extends React.Component {


    constructor(props) {
        super(props);
        let id = props.params.id === undefined ? '' : props.params.id;
        this.state = {
            name: '',
            nameError: false,
            unit: '',
            unitError: false,
            loading: id !== '',
            id: id,
            image: '',
            ...addState
        };
        this.fetchIngredient = this.fetchIngredient.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.delete = this.delete.bind(this);
        this.submit = this.submit.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
    }

    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false
        })
    }

    fetchIngredient() {
        let service = new IngredientService();
        service.fetchIngredient(this.state.id).then((res) => {
            if (res.success) {
                this.setState({
                    loading: false, name: res.data.name, unit: res.data.unit
                })
            } else {
                this.showErrorDialog(res.error);
                this.setState({
                    id: '',
                });
            }
        })

    };

    delete() {
        let service = new IngredientService();
        this.setState({
            loading: true, confirmDialogOpen: false
        })
        service.deleteIngredient(this.state.id).then((res) => {
            console.log(res);
            if (res.success) {
                window.location.href = '/ingredients';
            } else {
                this.showErrorDialog(res.error);
            }
        })

    }

    submit() {
        if (isNullOrEmpty(this.state.name) || isNullOrEmpty(this.state.unit)) {
            this.setState({
                nameError: isNullOrEmpty(this.state.name), unitError: isNullOrEmpty(this.state.unit ),
            })
            return;
        }
        let service = new IngredientService();
        let body = {
            'name': this.state.name, 'unit': this.state.unit, 'image': this.state.image
        };
        if(this.state.id !== ''){
            body = {
                id:this.state.id, 'name': this.state.name, 'unit': this.state.unit, 'image': this.state.image
            };
        }
        this.setState({
            loading: true
        })
        if(this.state.id !== ''){
            service.updateIngredient(body).then((res) => {
                if (res.success) {
                    window.location.href = '/ingredients';
                } else {
                    this.showErrorDialog(res.error);
                }
            });
        }else{
            service.createIngredient(body).then((res) => {
                if (res.success) {
                    window.location.href = '/ingredients';
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

    handleUnitChange(e) {
        this.setState({
            unit: e.target.value
        });
    };

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    handleFileRead = async (event) => {
        const file = event.target.files[0]
        if (file === undefined) {
            return;
        }
        let fileMb = file.size/1024/1024;
        if(fileMb > 10){
            this.showErrorDialog('File size must be less than 10MB');
            return;
        }
        const base64 = await this.convertBase64(file)
        this.setState({
            image: base64
        })
    }


    componentDidMount() {
        if (this.state.id !== '') {
            this.fetchIngredient();
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
                        <Box marginTop='10px'/>
                        <TextField
                            error={this.state.unitError}
                            id="outlined-required"
                            label="Unit"
                            value={this.state.unit}
                            onChange={this.handleUnitChange}
                            fullWidth
                        />
                        <>
                            <Input
                                style={{display: "none"}}
                                id="contained-button-file"
                                inputProps={{accept: 'image/*, .svg'}}
                                onChange={e => this.handleFileRead(e)}
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" style={{marginTop: '30px'}} color="primary" fullWidth
                                        component="span" startIcon={<FontAwesomeIcon
                                    icon={this.state.id === '' ? faPlus : faPen}/>}>{this.state.id === '' ? 'Add image' : 'Update image'}
                                </Button>
                            </label>
                        </>
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
            <ConfirmDialog title={`Ingredient: ${this.state.name}`}
                           body='Are you sure you want to delete this ingredient? You CAN NOT view this ingredient anymore if you delete' confirm={() => this.delete()}
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

export default withParams(AddIngredient);