import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import check from '../../assets/images/check.png';
import styles from './successPurchase.module.css';

import NavbarUser from '../navbarUser/NavbarUser';

const SuccessPurchase = (props) => {
    return (
        <div>
            <NavbarUser />
            <div className={styles.purchase}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Box>
                        <Box mt={10}>
                            <Typography variant='h5' mt={9} ml={1} style={{ letterSpacing: 1.3 }}>
                                ¡Compra Exitosa!
                </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.purchase} mt={4}>
                        <img src={check} alt="IconDownload" className={styles.iconCheck} />
                    </Box>
                    <Box className={styles.info}>
                        <Typography variant='body2' ml={1} style={{ letterSpacing: 1.3 }}>
                            Hemos enviado a tu correo toda la informacion referente a tu orden, la cual seguiremos de cerca para asegurarnos que disfrutes de la experiencia Nextia. Te esperamos pronto.
                </Typography>
                        <Box mt={4}>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={() => props.history.push('/')}
                                size='large'>
                                Volver a inicio
                    </Button>
                        </Box>
                    </Box>
                </Grid>
            </div>
        </div>
    );
};

export default withRouter(SuccessPurchase);
