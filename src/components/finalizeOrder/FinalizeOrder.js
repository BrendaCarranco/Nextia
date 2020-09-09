import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import partner from '../../assets/images/partner1.png';
import { Box, Badge, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import PaymentPayPal from '../payment/PaymentPayPal';
import codigo from '../../assets/images/codigo.png';
import credit from '../../assets/images/creditCard.png';
import Download from '../../assets/images/Download.png';
import Folder from '../../assets/images/Folder.png';
import Card from '../../assets/images/Card.png';
import styles from './finalizeOrder.module.css';

import NavbarUser from '../navbarUser/NavbarUser';
import { UserContext } from '../../context/UserProvider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    /* avatar: {
        width: 125,
        height: 125,
    }, */
    info: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        marginTop: 15,
        opacity: 0.65
    },
    title: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 12
    },
    subject: {
        fontSize: 14,
        fontWeight: 'bold'
    }
}));


const FinalizeOrder = () => {
    const classes = useStyles();

    const { buyItem } = useContext(UserContext);

    const [vista, setVista] = useState({ checked: true });
    const [vistaCodi, setVistaCodi] = useState({ checked: true });
    const [vistaCard, setVistaCard] = useState({ checked: true });

    const handleChange = (checked) => {
        setVista(checked);
    };

    const handleChangeCodi = (checked) => {
        setVistaCodi(checked);
    };

    const handleChangeCard = (checked) => {
        setVistaCard(checked);
    };


    return (
        <>
            <div>
                <NavbarUser />
                <Box m={5}>.</Box>
                <Box mt={5} ml={1}>
                    <Button
                        color='secondary'
                        variant='contained'
                        size='large'
                        style={{ borderRadius: '2px' }}
                    >
                        FINALIZA TU COMPRA
            </Button>
                </Box>
                <Box ml={1} mt={3}>
                    <Typography variant='h5' ml={1} style={{ letterSpacing: 1.3 }}>
                        Resumen del Pedido
            </Typography>
                </Box>
                <div >
                    <Box
                        display="flex"
                        mt={3}
                        alignItems="center"
                        justifyContent="center">
                        <img src={buyItem.image} height='190px' width='260px' />
                    </Box>
                    <Box className={styles.resumenProduct} ml={2}>
                        <Typography variant='h6'>
                            {buyItem.title}
                        </Typography>
                        <Typography>
                            {buyItem.author}
                        </Typography>
                        <Typography >
                            Cantidad: {buyItem.quantity} pzs
                        </Typography>
                        <Typography>
                            Descripción: {buyItem.description}
                        </Typography>
                    </Box>
                </div>
                <div className={styles.price}>
                    <Box>
                        <Typography className={classes.subject}>
                            Precio: ${buyItem.price} MXN.
                </Typography>
                        <Typography className={classes.subject}>
                            Descuento: N/A
                </Typography>
                        <Typography className={classes.subject}>
                            Subtotal: ${buyItem.total} MXN.
                </Typography>
                        <Typography className={classes.subject}>
                            Envío: $150 MXN. 'Entrega de 3 a 10 días hábiles'
                </Typography>
                        <Typography className={classes.subject}>
                            Total: ${buyItem.total + 150} MXN.
                </Typography>
                    </Box>
                </div>
            </div>

            <div>
                <Grid container
                    direction="row"
                    justify="space-between"
                >
                    <Box>
                        <Typography className={useStyles.title} m={2}>
                            Mis datos
            </Typography>
                    </Box>
                    <Icon color='primary'><CreateIcon /></Icon>
                </Grid>
                <Box className={styles.contact}>
                    <Typography>
                        Nombre:
            </Typography>
                    <Typography>
                        Correo:
            </Typography>
                    <Typography>
                        Telefono:
            </Typography>
                    <Typography>
                        Dirección:
            </Typography>
                </Box>
            </div>

            <div className={styles.containerPay}>
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Box color="text.secondary" className={styles.boxPay}>
                        <Typography className={useStyles.title}>
                            Solicitar Pago con CoDi
            </Typography>
                    </Box>
                    {/* <PopoverPopupState /> */}
                    <Button variant="contained" color="primary" onClick={() => handleChangeCodi(!vistaCodi)}>
                        <img src={Download} alt="IconDownload" className={styles.iconDow} />
                    </Button>
                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {!vistaCodi ?
                        (<Box>
                            <img src={codigo} alt="IconDownload" className={styles.codi} />
                        </Box>)
                        : null}
                </Grid>


                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Box color="text.secondary" className={styles.boxPay}>
                        <Typography className={useStyles.title}>
                            Pagar con Paypal
            </Typography>
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => handleChange(!vista)}>
                        <img src={Folder} alt="IconDownload" className={styles.iconFolder} />
                    </Button>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Box className={styles.boxPaypal}>
                            {!vista ? (<PaymentPayPal amount={buyItem.total} />) : null}
                        </Box>
                    </Grid>

                </Grid>
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Box color="text.secondary" className={styles.boxPay}>
                        <Typography className={useStyles.title}>
                            Pagar con Tarjeta
            </Typography>
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => handleChangeCard(!vistaCard)}>
                        <img src={Card} alt="IconDownload" className={styles.iconCard} />
                    </Button>
                </Grid>

                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {!vistaCard ?
                        (<Box>
                            <img src={credit} alt="IconDownload" className={styles.creditCard} />
                        </Box>)
                        : (null)}
                </Grid>
            </div>


            <div className={styles.terminos}>
                <Box>
                    <input type="checkbox" />
                </Box>

                <Typography className={useStyles.title}>
                    He leido y acepto los Términos y condiciones y la Política de privacidad
            </Typography>

            </div>
        </>
    );
};

export default FinalizeOrder;