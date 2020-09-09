import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import artwoman from '../../assets/images/artisanWomen.jpg';
import { Grid, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: red[500],
    },
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 1,
        letterSpacing: 3
    },
    cardT: {
        fontWeight: 600,
        fontSize: 20,
        letterSpacing: 1
    },
    yellow: {
        color: yellow
    },
    cardInfo: {
        fontSize: 15
    },
    title: {
        fontSize: 14,
        marginTop: 5,
        marginBottom: 12,
        opacity: 0.65
    }
}));

export default function RecipeReviewCard() {
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Card >
                <CardMedia
                    className={styles.media}
                    image={artwoman}
                    /*Esta img debe cambiar de acuerdo a la compra*/
                />
                <CardContent>
                    <Typography variant="body2" component="p">
                        <Typography className={classes.cardT}>
                            Mujeres zapatistas de la revolución mexicana
                        </Typography>
                        
                        <Typography className={classes.cardInfo}>
                            Zenaida Rafael Julián
                        </Typography>
                    </Typography>
                    <div className={styles.iconsWraper}>
                        <div className={styles.startWrapper}>
                            <StarRateIcon style={{ color: 'yellow' }} />
                            <StarRateIcon style={{ color: 'yellow' }} />
                            <StarRateIcon style={{ color: 'yellow' }} />
                            <StarRateIcon style={{ color: 'yellow' }} />
                            <StarRateIcon style={{ color: 'yellow' }} />
                        </div>
                        <Typography variant='subtitle2' >5.0</Typography>
                    </div>
                </CardContent>
                
                <CardActions disableSpacing className={styles.cardAction}>
                    <Box>
                    <Typography variant='h5' >$5960</Typography>
                    </Box>

                    <Box className={styles.btnGroup}>                     
                    <Button variant="outlined" color="secondary" size='small'>
                        -
                    </Button>
                    <Box className={styles.cantidad}>
                    <Typography variant='h6' > 1 </Typography>
                    </Box>
                    <Button variant="outlined" color="secondary" size='small'>
                        +
                    </Button>
                    </Box> 
                    
                    <Box className={styles.btnPay}>
                    <Button
                        color="secondary"
                        variant="contained"
                        size='large'>
                        COMPRAR
                    </Button>
                    </Box>
                </CardActions>
              
                <CardContent>
                    <Typography className={classes.title} >
                        DESCRIPCIÓN
                    </Typography>
                    <Typography className={classes.cardInfo}>
                    Hermoso nacimiento hecho por el artesano Gabriel Pérez Rajón ganador del Concurso Nacional de Nacimientos Mexicanos 2009. La madera es tallada a mano, de acuerdo a sus características va tomando su propia forma hasta convertirse en una pieza única.
                    </Typography>
                    <Typography className={classes.title} >
                        CARACTERISTICAS
                    </Typography>
                    <Typography>
                        Material:
                        Madera de Cedro tallada y policromada al pincel
                    </Typography>
                    <Typography>
                        Unidades:
                        16 piezas
                    </Typography>
                    <Typography>
                        Región: Península de Yucatán
                    </Typography>
                    
                </CardContent>
            </Card>
        </>
    );
}