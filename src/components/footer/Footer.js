import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

const SocialNetwork = () => {
    return (
        <div className={styles.footerContainer}>

            <div className={styles.footerkWrapper}>
                <div>
                    <h2 className={styles.footerTitle}>Nextia</h2>
                </div>

                <div className={styles.aboutContainer}>
                    <div
                        className={styles.aboutWrapper}>
                        <span>Sobre nosotros</span>
                        <span>Blog</span>
                        <span>Mi cuenta</span>
                        <span>Preguntas frecuentes</span>
                        <span>Formas de pago</span>
                        <span>Terminos y condiciones</span>
                        <span>Aviso de privacidad</span>
                    </div>
                </div>

                <div className={styles.footerIconsContainer} >
                    <img className={styles.iconsf} src="assets/codi.png" alt="" />
                    <img className={styles.iconsf} src="assets/citypay.png" alt="" />
                </div>

                <div className={styles.contactNextia}>
                    <h3>info@nextia.com</h3>
                    <p>Nextia© 2020 </p>
                </div>

            </div>
        </div>
    );
}

export default SocialNetwork;