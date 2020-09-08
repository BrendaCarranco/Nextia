import React, { useEffect, useState, useContext } from 'react';
import NavbarUser from '../navbarUser/NavbarUser';
import { firebase } from '../../firebase';
import { Grid, Card, Tab, CardMedia, Typography, CardContent, Box, Tabs, Paper, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
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

const Producer = () => {

    const classes = useStyles();

    const { productId } = useContext(UserContext);

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

    console.log(productType, 'array product');

    return (
        <div>
            <NavbarUser />
            <Grid >
                {
                    productType.map(product => (
                        <div>
                            <Card style={{ marginTop: '40px', marginBottom: '20px' }}>
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
                                    <div>
                                        <div >
                                            <StarRateIcon style={{ color: 'yellow' }} />
                                            <StarRateIcon style={{ color: 'yellow' }} />
                                            <StarRateIcon style={{ color: 'yellow' }} />
                                            <StarRateIcon style={{ color: 'yellow' }} />
                                            <StarRateIcon style={{ color: 'yellow' }} />
                                        </div>
                                        <Typography variant='subtitle2' >5.0</Typography>
                                    </div>
                                    <CardActions disableSpacing>
                                        <Box ml={1}>
                                            <Typography variant='subtitle1' style={{ fontWeight: 'bold' }} >${product.price}</Typography>
                                        </Box>
                                        <Paper square style={{ maxWidth: 640, flexGrow: 1 }}>
                                            <Tabs
                                                value={value}
                                                onChange={handleChange}
                                                variant="fullWidth"
                                                indicatorColor="secondary"
                                                textColor="secondary"
                                                aria-label="icon label tabs example"
                                            >
                                                <Tab icon={<ShoppingBasketIcon fontSize="large" />} />
                                                <Tab icon={<FavoriteIcon fontSize="large" />} />
                                            </Tabs>
                                        </Paper>
                                    </CardActions>
                                </CardContent>
                            </Card>

                        </div>
                    ))
                }
            </Grid>

            Productores
        </div>
    );
};

export default Producer;
