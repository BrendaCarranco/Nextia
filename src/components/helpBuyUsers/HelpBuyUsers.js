import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarRateIcon from '@material-ui/icons/StarRate';
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
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>

            <Card className={styles.root}>

                <CardMedia
                    className={styles.media}
                    image="assets/user-question-5-1.jpg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cómo son las experiencias virtuales?</h3>

                        <p></p>

                    </Typography>

                </CardContent>
            </Card>

            <Card className={styles.root}>

                <CardMedia
                    className={styles.media}
                    image="assets/user-question-4.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cómo contratar experiencias presenciales?</h3>

                        <p></p>

                    </Typography>

                </CardContent>
            </Card>


            <Card className={styles.root}>

                <CardMedia
                    className={styles.media}
                    image="assets/question-codi-people.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cómo pagar con CoDi?</h3>

                        <p></p>

                    </Typography>

                </CardContent>
            </Card>

            <Card className={styles.root}>
                <CardHeader
                    title="Información de apoyo para el uso de la plataforma"
                />
                <CardMedia
                    className={styles.media}
                    image="assets/user-question-1.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cómo realizar una compra?</h3>
                        <p></p>
                    </Typography>
                </CardContent>
            </Card>

            <Card className={styles.root}>

                <CardMedia
                    className={styles.media}
                    image="assets/user-question-2.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cuáles son las formas de pago disponibles?</h3>

                        <p></p>

                    </Typography>

                </CardContent>
            </Card>

            <Card className={styles.root}>

                <CardMedia
                    className={styles.media}
                    image="assets/user-question-3.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cuándo y cómo recibiré mi pedido?</h3>

                        <p></p>

                    </Typography>

                </CardContent>
            </Card>

            <Card className={styles.root}>

                <CardMedia
                    className={styles.media}
                    image="assets/question-how-send.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Aún no he recibido mi pedido</h3>

                        <p></p>

                    </Typography>

                </CardContent>
            </Card>

        </div>

    );
}



