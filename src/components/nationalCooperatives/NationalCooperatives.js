import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({

    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
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
    cardInfo: {
        fontSize: 15
    }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className={styles.root}>
            <Box mt={3} mb={3} ml={1}>
                <Typography className={classes.category}
                >Cooperativas<br></br>Nacionales</Typography>
            </Box>
            <CardMedia
                className={styles.media}
                image="assets/obio-coffe.jpg"
            />
            <CardContent>
                <Typography className={classes.cardT}>
                    Café orgánico de Chiapas
                    </Typography>
                <Typography className={classes.cardT}>
                    Altura especial
                    </Typography>
                <Typography color='textSecondary' className={classes.cardInfo}>
                    Bolsa de 500 gr. Café orgánico con notas a chocolate y frutas secas.
                    De pequeños productores de la Reserva de la Biosfera del Triunfo.
                    </Typography>
                <Typography className={classes.cardInfo}>Sierra Madre de Chiapas</Typography>
                <Typography className={classes.cardInfo}>Café El Triunfo</Typography>
            </CardContent>

            <CardActions disableSpacing>
                <Box ml={1}>
                    <Typography variant='h5' >$376</Typography>
                </Box>
                <Paper square className={styles.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<ShoppingBasketIcon fontSize="large" className={styles.favoriteIcon} />} />
                        <Tab icon={<FavoriteIcon fontSize="large" className={styles.bagIcon} />} />
                    </Tabs>
                </Paper>
            </CardActions>
        </Card>
    );
}