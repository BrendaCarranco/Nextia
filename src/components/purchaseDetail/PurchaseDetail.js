
import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import NavbarUser from '../navbarUser/NavbarUser';
import PopoverPopupState from '../popoverPopupState/PopoverPopupState';
import { UserContext } from '../../context/UserProvider';


const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: red[500],
    },
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
        fontSize: 20,
        letterSpacing: 1
    },
    yellow: {
        color: yellow
    },
    cardInfo: {
        fontSize: 15
    },
    title: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 12,
        opacity: 0.65
    },
    firstCard: {
        marginTop: 7,
        paddingTop: 5,
    }
}));

function RecipeReviewCard(props) {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const { buyItem, setBuyItem, globalUser } = useContext(UserContext);
    console.log(buyItem, 'este es purchase detail wu');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let dateNow = Date.now();

    const handleBuy = () => {
        console.log('comprar!');
        setBuyItem({
            quantity: quantity, customer: globalUser.email, total: quantity * buyItem.price, date: dateNow, ...buyItem
        });
        props.history.push('/end');
    };
    return (
        <>
            <NavbarUser />
            <Box mt={6} >.</Box>
            <Card className={styles.root}>
                <Box mt={8} mb={0} ml={1} >
                    <CardMedia
                        className={styles.media}
                        image={buyItem.image}
                    />
                </Box>
                <CardContent>
                    <Typography className={classes.cardT}>
                        {buyItem.title}
                    </Typography>
                    <Typography className={classes.cardInfo}>{buyItem.author}</Typography>
                    <Typography className={classes.cardInfo}>{buyItem.location}</Typography>
                    <CardActions disableSpacing className={styles.cardAction}>
                        <Box>
                            <Typography variant='h5' >${buyItem.price} MXN.</Typography>
                        </Box>
                        <Box className={styles.btnGroup}>
                            {
                                quantity == 1 ? (null) : (<Button variant="outlined" color="secondary" size='small' onClick={() => setQuantity(quantity - 1)}>
                                    -
                                </Button>)
                            }
                            <Box className={styles.cantidad}>
                                <Typography variant='h6' >{quantity}</Typography>
                            </Box>
                            <Button variant="outlined" color="secondary" size='small' onClick={() => setQuantity(quantity + 1)}>
                                +
                    </Button>
                        </Box>

                        <Box className={styles.btnPay}>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={() => handleBuy()}
                                size='large'>
                                COMPRAR
                    </Button>
                        </Box>
                    </CardActions>
                    <Typography variant='subtitle1' >Descripción</Typography>
                    <Typography color='textSecondary' className={classes.cardInfo}>
                        {buyItem.description}
                    </Typography>
                    <Typography variant='subtitle1' >Características</Typography>
                    <Typography color='textSecondary' className={classes.cardInfo}>
                        Material:
                        {buyItem.technique}
                    </Typography>
                    <Typography color='textSecondary' className={classes.cardInfo}>
                        Unidades:
                        16 piezas
                    </Typography>
                    <Typography color='textSecondary' className={classes.cardInfo}>
                        Región: Península de Yucatán
                    </Typography>
                    <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <Box>
                            <PopoverPopupState />
                        </Box>
                    </Grid>
                </CardContent>
                <CardActions disableSpacing>
                    <Paper square className={styles.root}>
                    </Paper>
                </CardActions>
            </Card>
        </>
    );
}

export default withRouter(RecipeReviewCard);