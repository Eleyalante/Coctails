import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import Chip from "@mui/material/Chip";
import {Button, Grid} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//
// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));
//
// const CartStyle = style.form`
//     .container .card {
//         max-width: 300px;
//         height: 215px;
//         margin: 30px 10px;
//         padding: 20px 15px;
//         box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
//         transition: 0.3s ease-in-out;
//     }
//     .container .card:hover {
//         height: 450px;
//     }
//     .container .card .imgContainer {
//         position: relative;
//         width: 250px;
//         height: 250px;
//         top: -50px;
//         left: 10px;
//         z-index: 1;
//         box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
//     }
//     .container .card .imgContainer img {
//         max-width: 100%;
//         border-radius: 4px;
//     }
//     .container .card .content {
//         position: relative;
//         margin-top: -140px;
//         padding: 10px 15px;
//         text-align: center;
//         color: #111;
//         visibility: hidden;
//         opacity: 0;
//         pointer-events: none;
//         transition: 0.3s ease-in-out;
//     }
//     .container .card:hover .content {
//         visibility: visible;
//         opacity: 1;
//         margin-top: -40px;
//         transition-delay: 0.3s;
//     }
//
//     @media (max-width: 330px) {
//         .container .card .imgContainer {
//             left: -2px;
//         }
//     }
// `;
//
// function RecipeReviewCard() {
//     return (
//         <CartStyle>
//             <div className="container">
//
//             </div>
//         </CartStyle>
//     );
// }


export default class CocktailCard extends React.Component {


    constructor(props) {
        super(props);
        this.cocktail = props.cocktail;
        this.hasImage = this.cocktail.image.length === 0;
    }

    render() {
        return (<Card>
            {this.hasImage ? <CardMedia
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
                image={this.cocktail.image}
            />)}
            <CardContent>
                <Typography variant="h4">
                    {this.cocktail.name}
                </Typography>
                {/*<Typography variant="body2" color="text.secondary">*/}
                {/*    This impressive paella is a perfect party dish and a fun meal to cook together with your*/}
                {/*    guests. Add 1 cup of frozen peas along with the mussels, if you like.*/}
                {/*</Typography>*/}
                <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                <Typography style={{marginBottom: '10px'}}>
                    Ingredients:
                </Typography>
                <Grid container spacing={1}>
                    {this.cocktail.ingredients.map((e) => {

                        if (e.ingredient !== null) {
                            return <Grid key={e.ingredient.id} item> <Chip label={e.ingredient.name}
                                                                           variant="outlined"/> </Grid>;
                        }
                    })}
                </Grid>
                <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>
                {
                    this.cocktail.categories.length > 0 ?
                        <>
                            <Typography  style={{marginBottom: '10px'}}>
                                Categories:
                            </Typography>
                            <Grid container  spacing={1} >
                                {this.cocktail.categories.map((e) => {
                                    return    <Grid key={e.id} item > <Chip label={e.name} variant="outlined"/> </Grid>;
                                })}
                            </Grid>
                        </>
                        :
                        <></>




                }
                <Button style={{marginTop: '20px', marginBottom: '10px'}}
                        variant="contained" href={`/add_ingredient/`}
                        fullWidth
                        startIcon={<InfoIcon/>}>
                    Detail
                </Button>
            </CardContent>
        </Card>);
    }
}