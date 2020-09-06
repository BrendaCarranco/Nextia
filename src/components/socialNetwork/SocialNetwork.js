import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const SocialNetwork = () => {

    return (
        <div className={styles.socialNetworkContainer}>

            <div className={styles.socialNetworkWrapper}>
                <h2 className={styles.SnTitle}>Nuestras Redes Sociales</h2>

                <div className={styles.iconsSnContainer} >
                    <img className={styles.iconsSn} src="assets/facebook.jpg" alt="" />
                    <img className={styles.iconsSn} src="assets/instagram.jpg" alt="" />
                    <img className={styles.iconsSn} src="assets/twitter.jpg" alt="" />
                    <img className={styles.iconsSn} src="assets/youtube.jpg" alt="" />
                </div>

                <div className={styles.line}></div>

                <div className={styles.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Paper className={styles.paper}>
                                <h3 className={styles.informationTitle}>Deseo recibir información</h3>
                            </Paper>
                        </Grid>
                        <form className={styles.root} noValidate autoComplete="off">
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <Paper className={styles.paper}>
                                        <TextField id="outlined-basic" label="correo electrónico" variant="outlined" />
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper className={styles.paper}>
                                        <Button variant="contained" color="primary">
                                            Suscribirme
                                    </Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </form>

                    </Grid>
                </div>
            </div>

        </div>
    );
}

export default SocialNetwork;