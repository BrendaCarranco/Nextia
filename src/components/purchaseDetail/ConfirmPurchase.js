import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarUser from '../navbarUser/NavbarUser';
import { firebase } from '../../firebase';
import { Grid, Card, Tab, CardMedia, Typography, CardContent, Box, Tabs, Paper, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles.module.css';
import { UserContext } from '../../context/UserProvider';

import cafe from '../../assets/images/abanico.jpg';

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
    pinkTitle: {
        fontWeight: 500,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#FD384C',
        color: 'white',
        width: 190,
        height: 31,
        padding: 2
    },
    cardInfo: {
        fontSize: 14
    },
    media: {
        width: 320,
    }
}));


const ConfirmPurchase = () => {

    const classes = useStyles();

    return (
        <div>
            Confirmar Compra
            <Grid >
                <Box mt={7}></Box>
                <Box ml={2} mb={5}>
                    <Typography variant='subtitle1' className={classes.pinkTitle}>
                        Finaliza tu compra
                </Typography>
                </Box>
                <Box alignContent='center' display='flex' justifyContent='center' >
                    <img src={cafe} className={classes.media} />
                </Box>
                <Box>
                    <Typography>
                        Artículo:
                    </Typography>
                    <Typography>
                        Nacimiento
                    </Typography>
                </Box>

            </Grid>
        </div>
    );
};

export default ConfirmPurchase;


/* font-family: Montserrat;
font-weight: 500;
font-size: 1.3em;
line-height: 24px;
background: #FD384C;
color: white;
width: 15%;
padding: 10px;
text-align: center;
display: flex;
justify-content: center;
font-family: 'Roboto';
margin-bottom: 66px;
}
 */