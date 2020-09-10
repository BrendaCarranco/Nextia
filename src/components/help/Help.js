import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import styles from './styles.module.css';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Card className={styles.root}>
                <CardHeader
                    title="Información de apoyo para el uso de la plataforma"
                />
                <CardMedia
                    className={styles.media}
                    image="assets/question-profile-people.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Cómo llenar mi perfil</h3>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.media}
                    image="assets/question-profile.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Cómo doy de alta un producto</h3>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.media}
                    image="assets/image-9.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Cómo tomo fotos para mostrar mis productos</h3>
                    </Typography>

                </CardContent>
            </Card>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.media}
                    image="assets/question-how-book.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cómo puedo ver los pedidos que me han hecho?</h3>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.media}
                    image="assets/question-box.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Cómo embalar un pedido de forma segura?</h3>
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
                <CardMedia
                    className={styles.media}
                    image="assets/question-how-send.svg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>¿Aún no he recibido mi pedido?</h3>
                        <p></p>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.root}>
                <CardMedia
                    className={styles.media}
                    image="assets/obio-coffe.jpg"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <h3>Enviar un pedido</h3>
                        <p></p>
                    </Typography>
                </CardContent>
            </Card>

        </div>

    );
}



