import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import styles from './styles.module.css';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 1,
        letterSpacing: 3,
        textAlign: 'center',
        marginBottom: 50,
    },
    cardT: {
        fontWeight: 600,
        fontSize: 20,
        letterSpacing: 1
    },
    cardInfo: {
        fontSize: 15
    }
}));

const SocialNetwork = () => {
    const classes = useStyles();

    return (
        <div className={styles.socialNetworkContainer}>

            <div className={styles.socialNetworkWrapper}>
                <Box mt={3} mb={3} ml={1}>
                    <Typography className={classes.category}
                    >Redes<br></br>Sociales</Typography>
                </Box>
                <div className={styles.iconsSnContainer} >
                    <img className={styles.iconsSn} src="assets/facebook.jpg" alt="facebook" />
                    <img className={styles.iconsSn} src="assets/instagram.jpg" alt="instagram" />
                    <img className={styles.iconsSn} src="assets/Twitter.jpg" alt="twitter" />
                    <img className={styles.iconsSn} src="assets/youtube.jpg" alt="youtube" />
                </div>

                <div className={styles.line}></div>

                <div className={styles.root}>
                    <Grid container spacing={0}>

                        <Grid item xs={12}>
                            <Paper className={styles.paper}>
                                <Typography variant='subtitle1' style={{ letterSpacing: '1px' }} >Deseo recibir información</Typography>
                            </Paper>
                        </Grid>
                        <div className={styles.suscription}>

                            <form className={styles.root} noValidate autoComplete="off">
                                <Grid container spacing={0}>
                                    <Grid item xs={6}>
                                        <Paper className={styles.paper}>
                                            <TextField id="outlined-basic" label="Correo electrónico" size='small' variant="outlined" />
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
                        </div>

                    </Grid>
                </div>
            </div>

        </div>
    );
};

export default SocialNetwork;