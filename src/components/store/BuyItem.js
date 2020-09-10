import React, { useEffect, useState, useContext } from 'react';
import NavbarUser from '../navbarUser/NavbarUser';
import { firebase } from '../../firebase';
import { Grid, Card, Tab, CardMedia, Typography, CardContent, Box, Tabs, Paper, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import yellow from '@material-ui/core/colors/yellow';
import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles((theme) => ({
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 1,
        letterSpacing: 3
    },
    cardT: {
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5
    },
    yellow: {
        color: yellow
    },
    cardInfo: {
        fontSize: 14
    },
    cardInfoAuth: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    media: {
        height: 150,
    },
}));

const BuyItem = () => {

    const classes = useStyles();

    const { buyItem } = useContext(UserContext);



    return (
        <div>

        </div>
    );
};

export default BuyItem;
