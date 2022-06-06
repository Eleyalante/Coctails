import React from 'react';
import withParams from "../utils/ComponentWithParams";
import {addState} from "../utils/Values";
import IngredientService from "../services/IngredientService";
import CategoryService from "../services/CategoryService";
import LoadingSpinner from "../components/LoadingSpinner";
import {Box, Button, Card, CardContent, Input, TextField} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import ConfirmDialog from "../components/ConfirmDialog";
import ErrorDialog from "../components/ErrorDialog";
import MultipleSelectChip from "../components/MultipleSelectChip";
import isNullOrEmpty from "../utils/StringUtil";

class AddCocktail extends React.Component {

    constructor(props) {
        super(props);
        let id = props.params.id === undefined ? '' : props.params.id;
        this.state = {
            loading: true,
            name: '',
            nameError: false,
            recipe: '',
            recipeError: false,
            ingredients: [],
            selectedIngredients: [],
            categories: [],
            selectedCategories: [],
            redirectTo: '',
            id: id,
            ...addState
        }
        this.showErrorDialog = this.showErrorDialog.bind(this);
        this.fetchInitData = this.fetchInitData.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRecipeChange = this.handleRecipeChange.bind(this);
        this.handleFileRead = this.handleFileRead.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.submit = this.submit.bind(this);
    }

    validateForm() {
        if (isNullOrEmpty(this.state.name) || isNullOrEmpty(this.state.recipe)) {
            this.setState({
                nameError: isNullOrEmpty(this.state.name),
                recipeError: isNullOrEmpty(this.state.recipe),
            })
            return false;
        }
        if (this.state.selectedIngredients.length === 0) {
            this.showErrorDialog('Select at least 1 ingredient')
            return false;
        } else if (this.state.selectedIngredients.some(e => e.amountError)) {
            this.showErrorDialog('Fill valid amount of ingredients')
            return false;
        }
        return true;
    }

    submit() {
        let valid = this.validateForm();
        if (!valid) {
            return;
        }
        let ingredienstBody = [];
        this.state.selectedIngredients.forEach((e) => {
           ingredienstBody.push({
               'ingredient':e.id,
               'amount':e.amount
           })
        });
        let reqBody = {
            'name':this.state.name,
            'recipe':this.stte.r
        }
        console.log(ingredienstBody);
    }

    showErrorDialog(error) {
        this.setState({
            error: error,
            errorDialogOpen: true,
            loading: false
        })
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    };

    handleRecipeChange(e) {
        this.setState({
            recipe: e.target.value
        });
    };

    async fetchInitData() {
        let ingredientService = new IngredientService();
        let categoryService = new CategoryService();
        let [ingredientRes, categoryRes] = await Promise.all([ingredientService.fetchIngredients(), categoryService.fetchCategories()]);
        if (ingredientRes.success && categoryRes.success) {
            for (let i = 0; i < ingredientRes.data.length; i++) {
                ingredientRes.data[i].amount = 1;
                ingredientRes.data[i].amountError = false;
            }
            this.setState({
                ingredients: ingredientRes.data,
                categories: categoryRes.data,
                loading: false
            });
        } else {
            let errorMsg = `${ingredientRes.error ?? ''}\n${categoryRes.error ?? ''}`
            this.setState({
                redirectTo: '/'
            })
            this.showErrorDialog(errorMsg);
        }
    }

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

    async componentDidMount() {
        await this.fetchInitData();
    }

    render() {
        return <div
            style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            {this.state.loading ?
                <LoadingSpinner/> :
                <Card elevation={2} justify="center" style={{maxWidth: '550px', margin: '10px'}}>
                    <CardContent>
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
                            error={this.state.recipeError}
                            id="outlined-required"
                            label="Recipe"
                            multiline
                            rows={3}
                            value={this.state.recipe}
                            onChange={this.handleRecipeChange}
                            fullWidth
                        />
                        <MultipleSelectChip title='Categories' onChange={(e) => {
                            this.setState({
                                selectedCategories: e.target.value
                            })
                        }} items={this.state.categories} selectedItems={this.state.selectedCategories}/>
                        <MultipleSelectChip title='Ingredients' onChange={(e) => {

                            this.setState({
                                selectedIngredients: e.target.value
                            });
                            console.log(this.state.selectedIngredients);
                        }} items={this.state.ingredients} selectedItems={this.state.selectedIngredients}/>
                        {
                            this.state.selectedIngredients.map((e) => <TextField
                                style={{marginTop: '10px'}}
                                id="outlined-required"
                                label={`${e.name} amount`}
                                value={e.amount}
                                key={e.id}
                                error={e.amountError}
                                type="number"
                                onChange={(event) => {
                                    if (event.target.value !== undefined) {
                                        let amount = Number(event.target.value);
                                        e.amountError = amount <= 0;
                                        e.amount = event.target.value;
                                        this.setState({
                                            selectedIngredients: [...this.state.selectedIngredients]
                                        })
                                    } else {
                                        e.amountError = true;
                                        this.setState({
                                            selectedIngredients: [...this.state.selectedIngredients]
                                        })
                                    }
                                }}
                                fullWidth
                            />)
                        }

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
                           body='Are you sure you want to delete this ingredient?' confirm={() => this.delete()}
                           handleClose={() => {
                               this.setState({
                                   confirmDialogOpen: false
                               });
                           }} isOpen={this.state.confirmDialogOpen}/>
            <ErrorDialog isOpen={this.state.errorDialogOpen}
                         body={this.state.error}
                         handleClose={() => {
                             if (this.state.redirectTo !== '') {
                                 window.location.href = this.state.redirectTo;
                                 return;
                             }
                             this.setState({
                                 errorDialogOpen: false
                             });
                         }}
            />
        </div>;
    }
}


export default withParams(AddCocktail);