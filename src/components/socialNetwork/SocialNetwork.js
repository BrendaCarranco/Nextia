import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

const SocialNetwork = () => {
    return (
        <div className={styles.socialNetworkContainer}>

            <div className={styles.socialNetworkWrapper}>
                <h2 className={styles.SnTitle}>Nuestras Redes Sociales</h2>

                <div className={styles.iconsSnContainer} >
                    <img className={styles.iconsSn} src="assets/facebook.jpg" alt="" />
                    <img className={styles.iconsSn} src="assets/instagram.jpg" alt="" />
                    <img className={styles.iconsSn} src="assets/twitter.jpg" alt="" />
                    <img className={styles.iconsSn} src="assets/youtube.jpg" alt="" />
                </div>

                <div className={styles.line}></div>

                <h3 className={styles.informationTitle}>Deseo recibir información</h3>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Suscribirme" />
                </form>
            </div>

        </div>
    );
}

export default SocialNetwork;