import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import style from "styled-components";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CartStyle = style.form`
    .container .card {
        max-width: 300px;
        height: 215px;
        margin: 30px 10px;
        padding: 20px 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        transition: 0.3s ease-in-out;
    }
    .container .card:hover {
        height: 450px;
    }
    .container .card .imgContainer {
        position: relative;
        width: 250px;
        height: 250px;
        top: -50px;
        left: 10px;
        z-index: 1;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }
    .container .card .imgContainer img {
        max-width: 100%;
        border-radius: 4px;
    }
    .container .card .content {
        position: relative;
        margin-top: -140px;
        padding: 10px 15px;
        text-align: center;
        color: #111;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: 0.3s ease-in-out;
    }
    .container .card:hover .content {
        visibility: visible;
        opacity: 1;
        margin-top: -40px;
        transition-delay: 0.3s;
    }

    @media (max-width: 330px) {
        .container .card .imgContainer {
            left: -2px;
        }
    }
`;

export default function RecipeReviewCard() {
    return (
        <CartStyle>
            <div className="container">
                <Card>
                    <div className="card">
                        <div className="imgContainer">
                            <div className="img">
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image="https://images.pexels.com/photos/1456268/pexels-photo-1456268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Paella dish"
                                />
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                />
                            </div>
                        </div>
                        <div className="content">
                            <CardContent>
                                <Typography variant="h3" color="text.secondary">
                                    Cocktails
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton aria-label="info">
                                        <InfoIcon />
                                        <Typography>Read More</Typography>
                                    </IconButton>
                                </CardActions>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </div>
        </CartStyle>
    );
}
