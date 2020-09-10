import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from './styles.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

import PopoverPopupState from '../popoverPopupState/PopoverPopupState';

import apiflor from '../../assets/images/apiflor-ok.jpg';
import chocolateIguana from '../../assets/images/chocolate-la-iguan-ok.jpg';
import cafeMarron from '../../assets/images/cafe-la-org-bolsa-marron-ok.jpg';
import majomut from '../../assets/images/cafe-majomut-ok.jpg';




const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'Chocolate la iguana Sana.',
        imgPath: chocolateIguana,
        description: 'Es una asociación de pequeños productores, principalmente formada entre familia. 10 de los socios se dedican al mercado confitero con el chocolate de mesa “La Iguana Sana”. Como empresa de productos orgánicos procura evitar la alteración de los ecosistemas conservando la diversidad de éstos.',
        location: 'Chiapas,Oaxaca,Yucatán,Puebla.',
        author: 'Distintivo Obio',
        rank: 5,
        price: 6000,
        unitsavailable: 18,
    },
    {
        label: 'Apiflor.',
        imgPath: apiflor,
        description: 'Descubre Apiflor, miel diferenciada que ofrece una gran cantidad de productos hechos en México, por apicultores chiapanecos comprometidos con la preservación de la biodiversidad.',
        location: 'Chiapas,Oaxaca,Yucatán,Puebla.',
        author: 'Distintivo Obio',
        rank: 5,
        price: 6000,
        unitsavailable: 35,

    },
    {
        label: 'Café Orgánico, La Organización',
        imgPath: cafeMarron,
        description: 'Café producido por familias indígenas de la región de los altos de chiapas, a travéz de la cooperativa unión majomut, nuestro café se define como un café de especialidad con notas y sabores agradables en taza.',
        location: 'Chiapas,Oaxaca,Yucatán,Puebla.',
        author: 'Distintivo Obio',
        rank: 5,
        price: 9200,
        unitsavailable: 16,
    },

    {
        label: 'Café Orgánico, Majomut.',
        imgPath: majomut,
        description: 'Café producido por familias indígenas de la región de los altos de chiapas, a travéz de la cooperativa unión majomut, nuestro café se define como un café de especialidad con notas y sabores agradables en taza',
        location: 'Chiapas',
        author: 'Cooperativa Unión Majomut',
        rank: 5,
        price: 4500,
        unitsavailable: 8,
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
                <Typography className={classes.category}>Cooperativas <br>
                </br>Nacionales</Typography>
            </Box>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                interval={5000}
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        <Card className={styles.root}>
                            <CardMedia
                                className={styles.media}
                                image={step.imgPath}
                            />
                            <CardContent>
                                <Typography className={classes.cardT}>
                                    {step.label}
                                </Typography>
                                <Typography color='textSecondary' className={classes.cardInfo}>
                                    {step.description}
                                </Typography>
                                <Typography className={classes.cardInfo}>{step.location}</Typography>
                                <Typography className={classes.cardInfo}>{step.author}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Grid
                                    container
                                    direction="column"
                                    justify="flex-end"
                                    alignItems="center"
                                >
                                    <Box m={2}>
                                        <Typography variant='subtitle1' style={{ fontWeight: 'bold' }} >${step.price} MXN</Typography>
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
                                                <Tab icon={<ShoppingBasketIcon fontSize="large" />} />
                                                <Tab icon={<FavoriteIcon fontSize="large" />} />
                                                <PopoverPopupState />
                                            </Tabs>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </CardActions>
                        </Card>


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