import React from 'react';
import withParams from "../utils/ComponentWithParams";
import LoadingSpinner from "../components/LoadingSpinner";
import {Button, Card, CardContent, Input, InputAdornment, TextField, ThemeProvider} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import ConfirmDialog from "../components/ConfirmDialog";
import ColorPickerDialog from "../components/ColorPickerDialog";
import ErrorDialog from "../components/ErrorDialog";
import {addState, generateTheme,} from "../utils/Values";
import {Circle} from "@mui/icons-material";
import CardMedia from "@mui/material/CardMedia";
import IngredientService from "../services/IngredientService";
import isNullOrEmpty from "../utils/StringUtil";
import SettingsService from "../services/SettingsService";

class AddSettings extends React.Component {

    constructor(props) {
        super(props);
        let id = props.params.id === undefined ? '' : props.params.id;
        let theme = generateTheme('#8faa67');
        this.state = {
            name: '',
            nameError: false,
            loading: id !== '',
            id: id,
            image: '',
            color: '#8faa67',
            theme: theme,
            colorPickerOpen: false,
            ...addState
        };
        this.delete = this.delete.bind(this);
        this.submit = this.submit.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }


    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false
        })
    }

    fetchSettings() {
        let service = new SettingsService();
        service.fetchSettings(this.state.id).then((res) => {
            if (res.success) {
                this.setState({
                    loading: false, name: res.data.appName, color: res.data.color, image: res.data.image
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
        let service = new SettingsService();
        this.setState({
            loading: true, confirmDialogOpen: false
        })
        service.deleteSettings(this.state.id).then((res) => {
            if (res.success) {
                window.location.href = '/settings';
            } else {
                this.showErrorDialog(res.error);
            }
        })

    }

    submit() {
        if (isNullOrEmpty(this.state.name)) {
            this.setState({
                nameError: isNullOrEmpty(this.state.name), unitError: isNullOrEmpty(this.state.unit),
            })
            return;
        }
        let service = new SettingsService();
        let body = {
            'appName': this.state.name, 'color': this.state.color, 'image': this.state.image
        };
        if (this.state.id !== '') {
            body = {
                id: this.state.id, ...body
            };
        }
        this.setState({
            loading: true
        });
        if (this.state.id !== '') {
            service.updateSettings(body).then((res) => {
                if (res.success) {
                    window.location.href = '/settings';
                } else {
                    this.showErrorDialog(res.error);
                }
            });
        } else {
            service.createSettings(body).then((res) => {
                if (res.success) {
                    localStorage.setItem('settings', JSON.stringify(res.data));
                    window.location.href = '/settings';
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
        let fileMb = file.size / 1024 / 1024;
        if (fileMb > 10) {
            this.showErrorDialog('File size must be less than 10MB');
            return;
        }
        const base64 = await this.convertBase64(file)
        this.setState({
            image: base64
        })
    }

    render() {
        return <ThemeProvider theme={this.state.theme}>
            <div
                style={{
                    display: 'flex',
                    justifyItems: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%'
                }}>
                {this.state.loading ? <LoadingSpinner/> :
                    <Card elevation={2} justify="center" style={{maxWidth: '550px', margin: '10px'}}>
                        {this.state.image?.length < 1 ? <CardMedia
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
                            image={this.state.image}
                        />)}
                        <CardContent>
                            <TextField
                                error={this.state.nameError}
                                id="outlined-required"
                                label="App Name"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                fullWidth
                            />
                            <TextField
                                error={this.state.nameError}
                                id="outlined-required"
                                label="Color"
                                style={{marginTop: '10px'}}
                                value={this.state.color}
                                disabled
                                onClick={() => {
                                    this.setState({
                                        colorPickerOpen: true
                                    });
                                }}
                                onChange={this.handleNameChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Circle style={{color: this.state.color}}/>
                                        </InputAdornment>
                                    ),
                                }}
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
                            <Button variant="contained" fullWidth
                                    style={{marginTop: '20px'}} onClick={this.submit}
                                    startIcon={<FontAwesomeIcon
                                        icon={this.state.id === '' ? faPlus : faPen}/>}>{this.state.id === '' ? 'Add settings' : 'Update settings'} </Button>
                            {this.state.id === '' ? null :
                                <Button variant="contained" fullWidth
                                        style={{marginTop: '20px'}} onClick={() => {
                                    this.setState({
                                        confirmDialogOpen: true
                                    });
                                }}
                                        startIcon={<FontAwesomeIcon icon={faTrash}/>}>Delete settings</Button>}
                        </CardContent>
                    </Card>}

                <ColorPickerDialog isOpen={this.state.colorPickerOpen}
                                   color={this.state.color}
                                   changeColor={(color) => {
                                       this.setState({
                                           color: color,
                                           theme: generateTheme(color),
                                           colorPickerOpen: false
                                       });
                                       console.log(this.state);
                                   }}
                                   handleClose={() => {
                                       this.setState({
                                           colorPickerOpen: false
                                       });
                                   }}/>

                <ConfirmDialog title={`Settings: ${this.state.name}`}
                               body='Are you sure you want to delete this settings? You CAN NOT view this settings anymore if you delete (ALL COCKTAILS, INGREDIENTS, CATEGORIES will be deleted)'
                               confirm={() => this.delete()}
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
            </div>
        </ThemeProvider>;
    }
}

export default withParams(AddSettings);