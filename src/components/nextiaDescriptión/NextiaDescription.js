import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles.module.css';
import { Typography, Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 0,
        textAlign: 'center',
    },
    info: {
        fontSize: 14
    },
}));


const NextiaDescription = () => {

    const classes = useStyles();


    return (
        <div className={styles.nextiaWraper}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center">
                <img src="assets/nextia-Black-and-White-for-description.png" alt="Nextia" />
            </Box>
            <div className={styles.descriptionWrapper}>
                <Typography className={classes.info}>
                    Nextia reune a Grandes Maestros Artesanos y Productores Orgánicos
                    Certificados que ofrecen los mejores productos,
                    realizados con técnicas amigables con la biodiversidad.
                    A través de nuestra plataforma promovemos la cadena del Comercio
                    Justo buscando preservar las tradiciones e impulsar el desarrollo
                    económico de las comunidades en nuestro país.
                </Typography>
            </div>
            <div className={styles.nextiaMeet}>
            </div>
        </div>
    );
};

export default NextiaDescription;