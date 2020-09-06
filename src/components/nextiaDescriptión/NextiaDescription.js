import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

const NextiaDescription = () => {

    return (
        <div className={styles.nextiaWraper}>
            <img className={styles.nextiaLogoDescription} src="assets/nextia-Black-and-White-for-description.png" alt="" />
            <h3 className={styles.nextiaDescription}>Nextia es una plataforma que reune a pequeños productores y artesanos, que bajo estos estándares
            productivos, ofrecen productos atractivos para el creciente mercado, realizados con técnicas amigables
            con la biodiversidad, permitiendo una cadena de Comercio Justo con productos de alta calidad que permita
            impulsar el desarrollo económico de las comunidades en nuestro país.</h3>
            <div className={styles.nextiaMeet}>
                <Button
                    color="Secondary"
                    variant="contained"
                    size='medium'>
                    Conoce más
            </Button>
            </div>

        </div>
    );
}

export default NextiaDescription;