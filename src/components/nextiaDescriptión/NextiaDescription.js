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
            <Typography className={classes.info}>
                Nextia es una plataforma que reune a pequeños productores y artesanos, que bajo estos estándares
                productivos, ofrecen productos atractivos para el creciente mercado, realizados con técnicas amigables con la biodiversidad, permitiendo una cadena de Comercio Justo con
                productos de alta calidad que permita impulsar el desarrollo económico de las comunidades en nuestro país.
            </Typography>
            <div className={styles.nextiaMeet}>
            </div>

        </div>
    );
};

export default NextiaDescription;