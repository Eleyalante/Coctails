import React from 'react';
import {errorState, generateTheme} from "../utils/Values";
import LoadingSpinner from "../components/LoadingSpinner";
import NoData from "../components/NoData";
import {Button, Card, CardContent, Grid, InputAdornment, TextField, ThemeProvider} from "@mui/material";
import AddItemButton from "../components/AddItemButton";
import ErrorDialog from "../components/ErrorDialog";
import CardMedia from "@mui/material/CardMedia";
import {Circle} from "@mui/icons-material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faArrowPointer} from "@fortawesome/free-solid-svg-icons";
import SettingsService from "../services/SettingsService";

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            settings: [],
            ...errorState
        };
        this.fetchSettings = this.fetchSettings.bind(this);
        this.showErrorDialog = this.showErrorDialog.bind(this);
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
        service.fetchAllSettings().then((res) => {
            if (res.success) {
                this.setState({
                    loading: false,
                    settings: res.data
                })
            } else {
                this.showErrorDialog(res.error);
            }
        })

    };

    componentDidMount() {
        this.fetchSettings();
    }


    render() {
        return (this.state.loading ? (LoadingSpinner()) : (<div style={{margin: "20px"}}>
            {this.state.ingredients?.length === 0 ? <NoData/> : <Grid container justifyContent="center" spacing={5}>
                {this.state.settings.map((value) => (
                    <Grid key={value.id} item lg={4} md={6} xs={12}>
                        <ThemeProvider theme={generateTheme(value.color)}>
                            <Card elevation={2} justify="center" style={{maxWidth: '550px', margin: '10px'}}>
                                {(value.logo === undefined || value.logo?.length < 1) ? <CardMedia
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
                                    image={value.logo}
                                />)}
                                <CardContent>
                                    <TextField
                                        id="outlined-required"
                                        label="App Name"
                                        defaultValue={value.appName}
                                        readOnly
                                        fullWidth
                                    />
                                    <TextField
                                        id="outlined-required"
                                        label="Color"
                                        style={{marginTop: '10px'}}
                                        defaultValue={value.color}
                                        readOnly
                                        onClick={() => {
                                            this.setState({
                                                colorPickerOpen: true
                                            });
                                        }}
                                        onChange={this.handleNameChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Circle style={{color: value.color}}/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        fullWidth
                                    />
                                    <Button variant="contained" fullWidth
                                            href={`/add_settings/${value.id}`}
                                            style={{marginTop: '20px'}}
                                            startIcon={<FontAwesomeIcon
                                                icon={faPen}/>}>Edit</Button>

                                    <Button variant="contained" fullWidth
                                            href={`/`}
                                            onClick={()=>{
                                                console.log(value);
                                                localStorage.setItem('settings', JSON.stringify(value));
                                                window.location.href = '/';
                                            }}
                                            style={{marginTop: '20px'}}
                                            startIcon={<FontAwesomeIcon
                                                icon={faArrowPointer}/>}>Change</Button>
                                </CardContent>
                            </Card>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>}
            <AddItemButton href='/add_settings'/>
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