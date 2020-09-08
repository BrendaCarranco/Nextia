import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles.module.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 1,
        letterSpacing: 3
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
        <div className={styles.footerContainer}>

            <div className={styles.footerkWrapper}>
                <Box mt={3} mb={3} ml={3}>
                    <Typography className={classes.category}
                    >Nextia</Typography>
                </Box>
                <Box ml={3}>
                    <Typography variant='subtitle2'>Sobre nosotros</Typography>
                    <Typography variant='subtitle2'>Blog</Typography>
                    <Typography variant='subtitle2'>Mi cuenta</Typography>
                    <Typography variant='subtitle2'>Preguntas frecuentes</Typography>
                    <Typography variant='subtitle2'>Formas de pago</Typography>
                    <Typography variant='subtitle2'>Terminos y condiciones</Typography>
                    <Typography variant='subtitle2'>Aviso de privacidad</Typography>
                </Box>

                {/* <div className={styles.footerIconsContainer} >
                    <img className={styles.iconsf} src="assets/codi.png" alt="coDi" />
                    <img className={styles.iconsf} src="assets/citypay.png" alt="Citypay" />
                </div> */}

                <div className={styles.contactNextia}>
                    <Box mt={3} mb={1} ml={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography style={{ fontStyle: 'bold', letterSpacing: '1px' }} >info@nextia.com</Typography>
                    </Box>
                    <Box mt={1} mb={3} ml={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Typography style={{ fontStyle: 'bold', letterSpacing: '2px' }} >Nextia© 2020</Typography>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default SocialNetwork;