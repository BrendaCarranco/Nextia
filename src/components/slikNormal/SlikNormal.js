import React, { Component } from "react";
import Slider from "react-slick";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Footer from './../footer/Footer';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import NavbarUser from './../navbarUser/NavbarUser';
import GridCards from './../gridCards/GridCards';
import ArtisanWomen from './../artisanWomen/ArtisanWomen';
import OurStates from './../ourStates/OurStates';
import NationalCooperatives from './../nationalCooperatives/NationalCooperatives';
import NextiaDescription from './../nextiaDescriptión/NextiaDescription';
import TrendingProducts from './../trendingProducts/TrendingProducts';
import SocialNetwork from './../socialNetwork/SocialNetwork';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'GRANDES MAESTROS DEL ARTE POPULAR',
        imgPath: 'assets/artesano-11.jpg',
        location: '',
        title: 'Vive la experiencia',
        histoy: 'Conoce de cerca a los mayores artesanos de México que Citibanamex ha reunido en la colección Grandes Maestros del Arte Popular. Sumérgete en sus historias, talleres y obras de viva voz a través de las Experiencias que ofrecen de forma presencial y virtual que puedes solicitar al inscribirte en nuestra plataforma',
        contentbutton: 'ÍR A EXPERIENCIAS',
    },
    {
        label: 'PRODUCTORES CERTIFICADOS',
        imgPath: 'assets/artesano-2.jpg',
        location: '',
        title: 'Distintivo OBIO',
        histoy: 'Los productos del programa OBIO respetan el balance de estos tres conceptos productivos y comerciales.Son productos generadospor grupos comunitarios integrados en su mayoría en cooperativas, que respetan los ecosistemas, la biosfera y los recursos naturale de las zonas donde producen. ',
        contentbutton: 'VER PRODUCTOS',
    },
    {
        label: 'GRANDES MAESTROS ARTESANOS',
        imgPath: 'assets/artesano-3.jpg',
        location: '',
        title: 'Nextia y los Maestros del Arte Popular',
        histoy: 'Nextia surge como una extensión del Programa de Apoyo al Arte Popular establecido en 1996 con el propósito de impulsar y fortalecer la creación artesanal para generar alternativas para la comercialización de sus piezas.',
        contentbutton: 'CONOCE NEXTIA',
    },
    {
        label: 'PRODUCTORES CERTIFICADOS',
        imgPath: 'assets/distintivo-obio.jpg',
        location: 'Tabasco',
        title: 'Distintivo OBIO',
        histoy: 'El distintivo OBIO fue creado con el objetivo de apoyar productos generados por grupos comunitarios, integrados en su mayoría como cooperativas, que respetan el ecosistema y los recursos naturales. ',
        contentbutton: 'CONOCE MÁS',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 400,
        // flexGrow: 1,
        marginTop: '60px',

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
        <div className={styles.slickContainer}>
            <div className={classes.root}>
                <NavbarUser />
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    interval={6000}
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={5}>
                                    <Paper className={styles.paper}>
                                        <img src={step.imgPath} alt="artesano del mes" className={styles.imgSlider} />
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} sm={7}>
                                    <Paper className={styles.paper}>
                                        <h3 className={styles.Artsofthemonth}>{step.label}</h3>
                                        <h2 className={styles.historyTree}>{step.title}</h2>
                                        <p className={styles.historyOfPeople}>
                                            {step.histoy}
                                        </p>
                                        <div className={styles.buttonSlider}>
                                            <Button
                                                className={styles.buttonSlider}
                                                color="Primary"
                                                variant="contained"
                                                style={{ borderRadius: '2px' }}
                                                size='small'>
                                                {step.contentbutton}
                                            </Button>
                                        </div>

                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <Box>
                    <MobileStepper
                        variant="dots"
                        steps={6}
                        position="static"
                        activeStep={activeStep}
                    />
                </Box>
                <GridCards />
                <ArtisanWomen />
                <OurStates />
                <NationalCooperatives />
                <NextiaDescription />
                <TrendingProducts />
                <SocialNetwork />
                <Footer />
            </div >
        </div>

    );
}

export default SliderPoc;
