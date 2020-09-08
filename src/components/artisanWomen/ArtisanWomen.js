import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StarRateIcon from '@material-ui/icons/StarRate';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import artwoman from '../../assets/images/artisanWomen.jpg';
import { Grid } from '@material-ui/core';
import Slider from "react-slick";

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
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (


        <Slider {...settings}>

            <div>
                <div className={styles.root}>

                    <Grid>
                        <Card className={styles.root}>
                            <Box mt={3} mb={3} ml={1}>
                                <Typography className={classes.category}
                                >Mujeres <br></br>Artesanas</Typography>
                            </Box>
                            <CardMedia
                                className={styles.media}
                                image={artwoman}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    <Typography className={classes.cardT}>
                                        Mujeres zapatistas de la revolución mexicana
                    </Typography>
                                    <Typography color='textSecondary' className={classes.cardInfo}>
                                        Mujeres zapatistas de la revolución mexicana
                                        Barro modelado, moldeado
                                        y policromado en frío.
                    </Typography>
                                    <Typography className={classes.cardInfo}>Ocumicho, Charapan
                    Michoacán</Typography>
                                    <Typography className={classes.cardInfo}>Zenaida Rafael Julián</Typography>
                                </Typography>
                                <div className={styles.iconsWraper}>
                                    <div className={styles.startWrapper}>
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                    </div>
                                    <Typography variant='subtitle2' >5.0</Typography>
                                </div>
                            </CardContent>

                            <CardActions disableSpacing>
                                {/* <h4 className={styles.price}>$5000</h4> */}
                                <Box ml={1}>
                                    <Typography variant='h5' >$5960</Typography>
                                </Box>
                                <Paper square className={styles.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="fullWidth"
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        aria-label="icon label tabs example"
                                    >
                                        <Tab icon={<ShoppingBasketIcon fontSize="large" className={styles.favoriteIcon} />} />
                                        <Tab icon={<FavoriteIcon fontSize="large" className={styles.bagIcon} />} />
                                    </Tabs>
                                </Paper>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>

            <div>
                <div className={styles.root}>

                    <Grid>
                        <Card className={styles.root}>
                            <Box mt={3} mb={3} ml={1}>
                                <Typography className={classes.category}
                                >Mujeres <br></br>Artesanas</Typography>
                            </Box>
                            <CardMedia
                                className={styles.media}
                                image={artwoman}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    <Typography className={classes.cardT}>
                                        Pavos.
                    </Typography>
                                    <Typography color='textSecondary' className={classes.cardInfo}>
                                        Fibras vegetales en tejido circular.
                    </Typography>
                                    <Typography className={classes.cardInfo}>Kopchen,Felipe Carrillo Puerto Quintana Roo</Typography>
                                    <Typography className={classes.cardInfo}>Rosalinda Cauich Ramírez</Typography>
                                </Typography>
                                <div className={styles.iconsWraper}>
                                    <div className={styles.startWrapper}>
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                    </div>
                                    <Typography variant='subtitle2' >5.0</Typography>
                                </div>
                            </CardContent>

                            <CardActions disableSpacing>
                                {/* <h4 className={styles.price}>$5000</h4> */}
                                <Box ml={1}>
                                    <Typography variant='h5' >4700</Typography>
                                </Box>
                                <Paper square className={styles.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="fullWidth"
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        aria-label="icon label tabs example"
                                    >
                                        <Tab icon={<ShoppingBasketIcon fontSize="large" className={styles.favoriteIcon} />} />
                                        <Tab icon={<FavoriteIcon fontSize="large" className={styles.bagIcon} />} />
                                    </Tabs>
                                </Paper>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>

            <div>
                <div className={styles.root}>

                    <Grid>
                        <Card className={styles.root}>
                            <Box mt={3} mb={3} ml={1}>
                                <Typography className={classes.category}
                                >Mujeres <br></br>Artesanas</Typography>
                            </Box>
                            <CardMedia
                                className={styles.media}
                                image={artwoman}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    <Typography className={classes.cardT}>
                                        Rebozos.
                    </Typography>
                                    <Typography color='textSecondary' className={classes.cardInfo}>
                                        Hilos de sede,t eñidos con técnica de reserva (ikat) y tejidos en ligamentos de car de urdimbre en telar de cintura.
                    </Typography>
                                    <Typography className={classes.cardInfo}>Santa María del Río, San Luis Potosí.</Typography>
                                    <Typography className={classes.cardInfo}>Luisa Govea Cruz</Typography>
                                </Typography>
                                <div className={styles.iconsWraper}>
                                    <div className={styles.startWrapper}>
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                    </div>
                                    <Typography variant='subtitle2' >5.0</Typography>
                                </div>
                            </CardContent>

                            <CardActions disableSpacing>
                                {/* <h4 className={styles.price}>$5000</h4> */}
                                <Box ml={1}>
                                    <Typography variant='h5' >$5960</Typography>
                                </Box>
                                <Paper square className={styles.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="fullWidth"
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        aria-label="icon label tabs example"
                                    >
                                        <Tab icon={<ShoppingBasketIcon fontSize="large" className={styles.favoriteIcon} />} />
                                        <Tab icon={<FavoriteIcon fontSize="large" className={styles.bagIcon} />} />
                                    </Tabs>
                                </Paper>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>

            <div>
                <div className={styles.root}>

                    <Grid>
                        <Card className={styles.root}>
                            <Box mt={3} mb={3} ml={1}>
                                <Typography className={classes.category}
                                >Mujeres <br></br>Artesanas</Typography>
                            </Box>
                            <CardMedia
                                className={styles.media}
                                image={artwoman}
                            />
                            <CardContent>
                                <Typography variant="body2" component="p">
                                    <Typography className={classes.cardT}>
                                        Virgen de la Soledad
                    </Typography>
                                    <Typography color='textSecondary' className={classes.cardInfo}>
                                        Barro Modelado, moldeado,alisado,policromado con tierras.
                    </Typography>
                                    <Typography className={classes.cardInfo}>Santa María Atzompa, Oaxac</Typography>
                                    <Typography className={classes.cardInfo}>Enedina Vázquez cruz"</Typography>
                                </Typography>
                                <div className={styles.iconsWraper}>
                                    <div className={styles.startWrapper}>
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                        <StarRateIcon style={{ color: 'yellow' }} />
                                    </div>
                                    <Typography variant='subtitle2' >5.0</Typography>
                                </div>
                            </CardContent>

                            <CardActions disableSpacing>
                                {/* <h4 className={styles.price}>$5000</h4> */}
                                <Box ml={1}>
                                    <Typography variant='h5' >$5960</Typography>
                                </Box>
                                <Paper square className={styles.root}>
                                    <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="fullWidth"
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        aria-label="icon label tabs example"
                                    >
                                        <Tab icon={<ShoppingBasketIcon fontSize="large" className={styles.favoriteIcon} />} />
                                        <Tab icon={<FavoriteIcon fontSize="large" className={styles.bagIcon} />} />
                                    </Tabs>
                                </Paper>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>

        </Slider >

    );
}




