import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import check from '../../assets/images/check.png'
import styles from './successPurchase.module.css'

const SuccessPurchase = () => {
    return (
        <div className={styles.purchase}>
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
            >
            <Box>
                <Typography variant='h5' ml={1} style={{ letterSpacing: 1.3 }}>
                    Compra Exitosa!
                </Typography>
            </Box>
            <Box className={styles.purchase}>
            <img src={check} alt="IconDownload" className={styles.iconCheck}/>
            </Box>
            <Box className={styles.info}>
                <Typography variant='body2' ml={1} style={{ letterSpacing: 1.3 }}>
                    Hemos enviado a tu correo toda la informacion referente a tu orden, la cual seguiremos de cerca para asegurarnos que disfrutes de la experiencia Nextia. Te esperamos pronto.
                </Typography>
            </Box>
            </Grid>

        </div>
    );
};

export default SuccessPurchase;
