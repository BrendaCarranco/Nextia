import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import partner from '../../assets/images/partner1.png'
import { Box, Badge, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import Download from '../../assets/images/Download.png'
import Folder from '../../assets/images/Folder.png'
import Card from '../../assets/images/Card.png'
import styles from './finalizeOrder.module.css'
//import PopoverPopupState from './Popup';
import PaymentPayPal from '../payment/PaymentPayPal';
import codigo from '../../assets/images/codigo.png'
import credit from '../../assets/images/creditCard.png'


const FinalizeOrder = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
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
        }
    }));

    const [vista, setVista] = useState({checked: true});
    const [vistaCodi, setVistaCodi] = useState({checked: true});
    const [vistaCard, setVistaCard] = useState({checked: true});

    const handleChange = (checked) => {
        setVista(checked);
    }

    const handleChangeCodi = (checked) => {
        setVistaCodi(checked);
    }
 
    const handleChangeCard = (checked) => {
        setVistaCard(checked);
    }
    return (
        <>
        <div>
            <Box className={styles.btnFinalize}>
            <Button
                color='secondary'
                variant='contained'
                size='large'
                >
                FINALIZAR TU COMPRA
            </Button>
            </Box>
            <Typography className={useStyles.title}>
                    Resumen del Pedido 
            </Typography>
        <div className={styles.resumenPedido}>
            <Box
                display="flex"
                alignItems="start"
                justifyContent="start">
                <Badge
                    overlap="circle"
                >
                    <Avatar className={styles.avatar} alt="user-pic" src={partner} />
                </Badge>
            </Box>
            <Box className={styles.resumenProduct}>
                <Typography>
                    Cantidad:
                </Typography>
                <Typography>
                    Articulo:
                </Typography>
                <Typography>
                    Descripción:
                </Typography>
            </Box>
            </div>
            <div className={styles.price}>
            <Box>
                <Typography>
                    Precio
                </Typography>
                <Typography>
                    Descuento
                </Typography>
                <Typography>
                    Subtotal
                </Typography>
                <Typography>
                    Envío
                </Typography>
                <Typography>
                    Total
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
        <img src={Download} alt="IconDownload" className={styles.iconDow}/>
        </Button>
        </Grid>
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >
        { !vistaCodi ?
        <Box>
         <img src={codigo} alt="IconDownload" className={styles.codi}/> 
        </Box>
        : console.log("nada") }
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
        <img src={Folder} alt="IconDownload" className={styles.iconFolder}/>
        </Button>
        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >
        <Box className={styles.boxPaypal}>
        { !vista ? <PaymentPayPal /> : console.log("nada") }
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
        <img src={Card} alt="IconDownload" className={styles.iconCard}/>
        </Button>
        </Grid>

        <Grid container
            direction="row"
            justify="center"
            alignItems="center"
        >
        { !vistaCard ?
        <Box>
         <img src={credit} alt="IconDownload" className={styles.creditCard}/> 
        </Box>
        : console.log("nada") }
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
    )
}

export default FinalizeOrder
