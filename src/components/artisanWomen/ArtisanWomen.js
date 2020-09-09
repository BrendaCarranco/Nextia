
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from './styles.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PopoverPopupState from './../popoverPopupState/PopoverPopupState';
import artwoman from '../../assets/images/artisanWomen.jpg';
import wares from '../../assets/images/wares.jpg';
import rebozos from '../../assets/images/rebozos.jpg';
import virgen from '../../assets/images/virgen-de-la-soledad.jpg';
import frutos from '../../assets/images/Frutos-de-la-ressurrección.jpg';
import hamaca from '../../assets/images/hamaca.jpg';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'Pavos.',
        imgPath: artwoman,
        description: 'Fibras vegetales en tejido circular.',
        location: 'Kopchen,Felipe Carrillo Puerto Quintana Roo',
        author: 'Rosalinda Cauich Ramírez',
        rank: 5,
        price: 4700,
        unitsavailable: 4,
    },
    {
        label: 'Wares.',
        imgPath: wares,
        description: 'Fibras vegetales en tejido circular.',
        location: 'Huetosachi, Bocoyna Chihuahua.',
        author: 'María Monarca Lázaro.',
        rank: 5,
        price: 6000,
        unitsavailable: 4,

    },
    {
        label: 'Rebozos.',
        imgPath: rebozos,
        description: 'Textiles, Teñidos con técnica de reserva (ikat) y tejidos en ligamentos de car de urdimbre en telar de cintura.',
        location: 'Santa María del Río, San Luis Potosí.',
        author: 'Luisa Govea Cruz',
        rank: 5,
        price: 9200,
        unitsavailable: 16,
    },

    {
        label: 'Virgen de la Soledad',
        imgPath: virgen,
        description: 'Barro Modelado, moldeado,alisado,policromado con tierras.',
        location: 'Santa María Atzompa, Oaxaca',
        author: 'Enedina Vázquez cruz',
        rank: 5,
        price: 4500,
        unitsavailable: 8,
    },
    {
        label: 'Frutos de la resurrección (Recreación)',
        imgPath: frutos,
        description: 'Barro Modelado y policromado',
        location: 'Muna Municipio Yucatán',
        author: 'Patricia Margarita Martín',
        rank: 5,
        price: 5000,
        unitsavailable: 4,
    },
    {
        label: 'Hamaca',
        imgPath: hamaca,
        description: 'Hilos de Sanseviera, (Lengua de vaca)hilados a mano,en color natural y teñidos con tistes naturales y urdidos en bastidor.',
        location: 'San Antonio Millet, Tixkokob Yucatán.',
        author: 'Juana de Arco Balderas Puch.',
        rank: 5,
        price: 9000,
        unitsavailable: 4,
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 1,
        letterSpacing: 3
    },
}));

function SliderPoc() {
    const classes = useStyles();
    //     const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };



    return (
        <div className={classes.root}>
            <Box mt={3} mb={3} ml={1}>
                <Typography className={classes.category}>Mujeres <br>
                </br>Artesanas</Typography>
            </Box>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        <Grid>
                            <Card className={styles.root}>
                                <CardMedia
                                    className={styles.media}
                                    image={step.imgPath}
                                />
                                <CardContent>
                                    <Typography variant="body2" component="p">
                                        {step.label}
                                        <Typography color='textSecondary' className={classes.cardInfo}>
                                            {step.description}
                                        </Typography>
                                        <Typography
                                            className={classes.cardInfo}>{step.location}
                                        </Typography>
                                        <Typography className={classes.cardInfo}>{step.author}</Typography>
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
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
                                            <PopoverPopupState />
                                        </Tabs>
                                    </Paper>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                className={classes.root}

            />
        </div >

    );
}

export default SliderPoc;