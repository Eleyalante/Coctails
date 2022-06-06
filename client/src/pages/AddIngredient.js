import React from "react";
import { Button, Card, CardContent, TextField, Box, Input, Dialog, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { IngredientService } from "../services/IngredientService";
import LoadingSpinner from "../components/LoadingSpinner";
import AlertDialog from "../components/DialogConfirmation";
import Notification from "../components/Notification";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class AddIngredient extends React.Component {
    constructor(props) {
        super(props);
        let id = this.props.params.id === undefined ? "" : this.props.params.id;
        this.state = { name: "", nameError: false, unit: "", unitError: false, loading: id !== "", id: id, image: "", isOpen: false, notify: false };
        this.fetchIngredient = this.fetchIngredient.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.submit = this.submit.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    onDelete(id) {
        this.setState({
            ...this.state,
            isOpen: false,
            notify: false,
        });
        let service = new IngredientService();
        let body = {
            id: this.state.id,
            name: this.state.name,
            unit: this.state.unit,
            image: this.state.image,
        };
        service.deleteIngredient(body.id).then((res) => {
            console.log(body.id);
            console.log(res);
            if (res.success) {
                setInterval(() => {
                    window.location.href = "/ingredients";
                }, 500);
                this.setState({
                    notify: true,
                });
            } else {
                this.setState({
                    loading: true,
                });
            }
        });
    }

    handleNotification() {
        this.setState({
            isOpen: true,
            message: "Deleted Successfully",
            type: "error",
        });
    }
    fetchIngredient() {
        let service = new IngredientService();
        service.fetchIngredient(this.state.id).then((res) => {
            if (res.success) {
                this.setState({
                    loading: false,
                    name: res.data.name,
                    unit: res.data.unit,
                });
            }
            //todo handle error
        });
    }

    submit() {
        this.setState({
            nameError: this.state.name.length === 0,
            unitError: this.state.unit.length === 0,
        });
        if (this.state.unitError || this.state.nameError) {
            return;
        }
        let service = new IngredientService();
        let body = {
            id: this.state.id,
            name: this.state.name,
            unit: this.state.unit,
            image: this.state.image,
        };
        this.setState({
            loading: true,
            notify: true,
        });
        service.createIngredient(body).then((res) => {
            console.log(res);
            if (res.success) {
                setInterval(() => {
                    window.location.href = "/ingredients";
                }, 500);
                this.setState({
                    notify: true,
                });
            } else {
                this.setState({
                    loading: true,
                });
                // todo handle
            }
        });
    }
    handleUpdate(id) {
        this.setState({
            nameError: this.state.name.length === 0,
            unitError: this.state.unit.length === 0,
        });
        if (this.state.unitError || this.state.nameError) {
            return;
        }
        let service = new IngredientService();
        let body = {
            id: this.state.id,
            name: this.state.name,
            unit: this.state.unit,
            image: this.state.image,
        };
        service.editIngredient(body).then((res) => {
            if (res.success) {
                window.location.href = "/ingredients";
            } else {
                this.setState({
                    loading: true,
                });
            }
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleUnitChange(e) {
        this.setState({
            unit: e.target.value,
        });
    }

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    handleFileRead = async (event) => {
        const file = event.target.files[0];
        if (file === undefined) {
            return;
        }
        //TODO handle max size of file
        const base64 = await this.convertBase64(file);
        this.setState({
            image: base64,
        });
    };

    componentDidMount() {
        if (this.state.id !== "") {
            this.fetchIngredient();
        }
    }
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                {" "}
                {this.state.loading ? (
                    <LoadingSpinner />
                ) : (
                    <Card sx={{ minWidth: 400 }} elevation={2} justify="center">
                        <CardContent>
                            <TextField error={this.state.nameError} id="outlined-required" label="Name" value={this.state.name} onChange={this.handleNameChange} fullWidth />
                            <Box marginTop="10px" />
                            <TextField error={this.state.unitError} id="outlined-required" label="Unit" value={this.state.unit} onChange={this.handleUnitChange} fullWidth />
                            <>
                                <Input style={{ display: "none" }} id="contained-button-file" inputProps={{ accept: "image/*, .svg" }} onChange={(e) => this.handleFileRead(e)} type="file" />
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="contained"
                                        style={{ marginTop: "30px" }}
                                        color="primary"
                                        fullWidth
                                        component="span"
                                        startIcon={<FontAwesomeIcon icon={this.state.id === "" ? faPlus : faPen} />}
                                    >
                                        {this.state.id === "" ? "Add image" : "Update image"}
                                    </Button>
                                </label>
                            </>
                            {this.state.id !== "" ? null : (
                                <Button variant="contained" fullWidth style={{ marginTop: "20px" }} onClick={this.submit} startIcon={<FontAwesomeIcon icon={this.state.id === "" ? faPlus : faPen} />}>
                                    {""}Add{" "}
                                </Button>
                            )}
                            {this.state.id === "" ? null : (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    style={{ marginTop: "20px" }}
                                    onClick={this.handleUpdate}
                                    startIcon={<FontAwesomeIcon icon={this.state.id === "" ? faPlus : faPen} />}
                                >
                                    {""}Update{" "}
                                </Button>
                            )}
                            {/* <Button variant="contained" fullWidth style={{ marginTop: "20px" }} onClick={this.submit} startIcon={<FontAwesomeIcon icon={this.state.id === "" ? faPlus : faPen} />}>
                                {this.state.id === "" ? "Add" : "Update"}{" "}
                            </Button> */}
                            {this.state.id === "" ? null : (
                                <Button
                                    variant="contained"
                                    fullWidth
                                    style={{ marginTop: "20px" }}
                                    onClick={() => {
                                        this.setState({
                                            isOpen: true,
                                            onConfirm: () => {
                                                this.onDelete(this.state.id);
                                            },
                                        });
                                    }}
                                    startIcon={<FontAwesomeIcon icon={faTrash} />}
                                >
                                    {" "}
                                    Delete{" "}
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                )}
                {this.state.isOpen && <AlertDialog confirmDialog={this.state} setConfirmDialog={this.setState}></AlertDialog>}
                {this.state.notify && <Notification notify={this.state} setNotify={this.setState}></Notification>}
            </div>
        );
    }
}

export default withParams(AddIngredient);
