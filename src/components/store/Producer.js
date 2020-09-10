import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';

import { Grid, Card, Tab, CardMedia, Typography, CardContent, Box, Tabs, Paper, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';

import NavbarUser from '../navbarUser/NavbarUser';
import PopoverPopupState from '../popoverPopupState/PopoverPopupState';

import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles((theme) => ({
    cardT: {
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.5
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

const Producer = props => {

    const classes = useStyles();

    const { productId, setBuyItem } = useContext(UserContext);

    const [value, setValue] = React.useState(0);
    const [productType, setProductType] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = await firebase.firestore().collection('productos').where('category', '==', productId).get();
            setProductType(productsCollection.docs.map(doc => {
                return doc.data();
            }));
        };
        fetchProducts();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSelectCard = product => {
        console.log('click a la card', product);
        setBuyItem(product);
        props.history.push('/purchase');
    };

    console.log(productType, 'array product');

    return (
        <div>
            <NavbarUser />
            <Grid >
                <Box mt={2}>.</Box>
                {
                    productType.map(product => (
                        <div>
                            <Card style={{ marginTop: '30px', marginBottom: '20px' }} onClick={() => handleSelectCard(product)} >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={1}>
                                    <img className={classes.media} src={product.image} /* style={{ msTransform: 1.5, WebkitTransform: 1.5}} */ /></Box>
                                <CardContent>
                                    <Typography className={classes.cardT}>
                                        {product.title}
                                    </Typography>
                                    <Typography color='textSecondary' className={classes.cardInfo}>
                                        {product.description}
                                    </Typography>
                                    <Typography className={classes.cardInfo}>{product.location}</Typography>
                                    <Typography className={classes.cardInfoAuth} >{product.author}</Typography>
                                    <CardActions disableSpacing>
                                        <Grid
                                            container
                                            direction="column"
                                            justify="flex-end"
                                            alignItems="center"
                                        >
                                            <Box m={3}>
                                                <Typography variant='subtitle1' style={{ fontWeight: 'bold' }} >${product.price} MXN</Typography>
                                            </Box>
                                            <Box>
                                                <Paper square style={{ maxWidth: 640, flexGrow: 1 }}>
                                                    <Tabs
                                                        value={value}
                                                        onChange={handleChange}
                                                        variant="fullWidth"
                                                        indicatorColor="secondary"
                                                        textColor="secondary"
                                                        aria-label="icon label tabs example"
                                                    >
                                                        <Tab icon={<ShoppingBasketIcon fontSize="large" />} onClick={() => handleSelectCard(product)} />
                                                        <Tab icon={<FavoriteIcon fontSize="large" />} />
                                                        <PopoverPopupState />
                                                    </Tabs>
                                                </Paper>
                                            </Box>
                                        </Grid>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                }
            </Grid>
        </div>
    );
};

export default withRouter(Producer);
