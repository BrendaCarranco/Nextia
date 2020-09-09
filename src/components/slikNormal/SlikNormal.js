import React, { Component } from "react";
import Slider from "react-slick";
import styles from './styles.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import NavbarUser from './../navbarUser/NavbarUser';
import GridCards from './../gridCards/GridCards';
import ArtisanWomen from './../artisanWomen/ArtisanWomen';
import OurStates from './../ourStates/OurStates';
import NationalCooperatives from './../nationalCooperatives/NationalCooperatives';
import NextiaDescription from './../nextiaDescriptión/NextiaDescription';
import TrendingProducts from './../trendingProducts/TrendingProducts';
import SocialNetwork from './../socialNetwork/SocialNetwork';
import Footer from './../footer/Footer';

import artesano1 from '../../assets/images/artesano-1.png';
import obio from '../../assets/images/obio-production.jpg';
import artesano3 from '../../assets/images/artesano-3.jpg';
import artesano2 from '../../assets/images/artesano-2.jpg';
import FinalizeOrder from "../finalizeOrder/FinalizeOrder";



export default class SimpleSlider extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1

        };

        return (
            <div>
                <NavbarUser />
                <div className={styles.slickContainer}>
                    {/*                     <Slider {...settings}>
                        <div>
                            <div className={styles.root}>
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={5}>
                                        <Paper className={styles.paper}>
                                            <img src={artesano1} alt="" className={styles.imgSlider} />
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} sm={7}>
                                        <Paper className={styles.paper}>
                                            <h3 className={styles.Artsofthemonth} >ARTESANO DEL MES</h3>
                                            <h2 className={styles.historyTree}>Árbol de historias</h2>
                                            <p className={styles.historyOfPeople}>ALFONSO SOTENO FERNÁNDEZ (1943) afirma que Tito Fernández, su bisabuelo, fue el precursor en Metepec,
                                            Estado de México, de la tradición escultórica de los árboles de la vida: coloridas esculturas en barro
                                            modeladas a mano y adornadas con figurillas al pastillaje
                                        </p>
                                            <div className={styles.buttonSlider}>
                                                <Button
                                                    className={styles.buttonSlider}
                                                    color="Primary"
                                                    variant="contained"
                                                    size='small'>
                                                    Conoce Más
                                        </Button>
                                            </div>

                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>



                        <div>
                            <div className={styles.root}>
                                <Grid container spacing={0}>
                                    <Grid item xs={12} sm={5}>
                                        <Paper className={styles.paper}>
                                            <img src={obio} alt="" className={styles.imgSlider} />
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} sm={7}>
                                        <Paper className={styles.paper}>
                                            <h3 className={styles.Productofthemonth}  >PRODUCTO DEL MES</h3>
                                            <h2 className={styles.historyTree}>Tabasco</h2>
                                            <p className={styles.historyOfPeople}>
                                                Los productos del programa OBIO respetan el balance de estos
                                                tres conceptos productivos y comerciales. Son productos generados
                                                por grupos comunitarios integrados en su mayoría en cooperativas,
                                                que respetan los ecosistemas, la biosfera y los recursos naturales
                                                de las zonas donde producen.
                                    </p>
                                            <Button
                                                className={styles.buttonSlider}
                                                color="Primary"
                                                variant="contained"
                                                size='small'>
                                                Conoce Más
                                    </Button>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>


                        <div className={styles.root}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={5}>
                                    <Paper className={styles.paper}>
                                        <img src={artesano3} alt="" className={styles.imgSlider} />
                                    </Paper>
                                </Grid>


                                <Grid item xs={12} sm={7}>
                                    <Paper className={styles.paper}>

                                        <h3 className={styles.Artsofthemonth} >ARTESANOS</h3>
                                        <h2 className={styles.historyTree}>
                                            Nextia y los maestros del arte popular.</h2>
                                        <p className={styles.historyOfPeople}>
                                            Nextia surge como una extensión del Programa de Apoyo al
                                            Arte Popular establecido en 1996 con el propósito de impulsar y fortalecer la creación artesanal
                                            para generar alternativas para la comercialización de sus piezas.
                                    </p>
                                        <Button
                                            className={styles.buttonSlider}
                                            color="Primary"
                                            variant="contained"
                                            size='small'>
                                            Conoce Más
                                    </Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>


                        <div className={styles.root}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={5}>
                                    <Paper className={styles.paper}>
                                        <img src={artesano2} alt="" className={styles.imgSlider} />
                                    </Paper>
                                </Grid>


                                <Grid item xs={12} sm={7}>
                                    <Paper className={styles.paper}>
                                        <h3 className={styles.Productofthemonth} >PRODUCTORES</h3>
                                        <h2 className={styles.historyTree}>OBIO</h2>
                                        <p className={styles.historyOfPeople}>
                                            El distintivo OBIO fue creado con el objetivo de apoyar
                                            productos generados por grupos comunitarios, integrados en su mayoría como cooperativas, que respetan
                                            el ecosistema y los recursos naturales.
                                    </p>
                                        <Button
                                            className={styles.buttonSlider}
                                            color="Primary"
                                            variant="contained"
                                            size='small'>
                                            Conoce Más
                                    </Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </Slider> */}
                    <GridCards />
                    <ArtisanWomen />
                    <OurStates />
                    <NationalCooperatives />
                    <NextiaDescription />
                    <TrendingProducts />
                    <SocialNetwork />
                    <Footer />
                    <FinalizeOrder />
                    
                </div >
            </div>

        );
    }
}