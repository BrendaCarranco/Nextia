import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: 0,
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));

const useStylesCard = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: 270,
    },
});

export default function FullWidthGrid() {
    const classes = useStyles();
    const classesCard = useStylesCard();

    return (
        <div className={classes.root}>
            <div className={styles.cardsContainer}>
                <Grid container spacing={3}>

                    <Grid item xs={12} lg={10}>
                        <Paper className={styles.paper}>
                            <div className={styles.title}>
                                <div className={styles.categoriesTitle}>
                                    <CardHeader
                                        title="Categorías destacadas"
                                    />
                                </div>
                            </div>

                            <Card >

                                <CardActionArea>

                                    <CardMedia
                                        className={classesCard.media}
                                        image="assets/jaguar-barro.jpg"
                                    />
                                </CardActionArea>
                                <CardActions className={styles.cardWrapper} >
                                    <div className={styles.cardNameContent}>
                                        <div className={styles.cardName}>Barro</div>
                                        <div className={styles.cardNameButton}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                            >
                                                Conoce más
                                    </Button>
                                        </div>
                                    </div>

                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6} lg={5}>
                        <Paper className={classes.paper}>
                            <Card>
                                <CardActionArea>
                                    <div className={styles.imgWrapper}>
                                        <CardMedia
                                            className={classesCard.media}
                                            image="assets/Fibras.jpg"
                                        />
                                    </div>

                                </CardActionArea>
                                <CardActions className={styles.cardWrapper}>

                                    <div className={styles.cardNameContentdos}>
                                        <div className={styles.cardNamedos}>Fibras</div>
                                        <div className={styles.cardNameButtondos}>
                                            <Button
                                                size="small"
                                                color="primary">
                                                Ver
                                        </Button>
                                        </div>

                                    </div>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} sm={6} lg={5}>
                        <Paper className={classes.paper}>
                            <Card>
                                <CardActionArea>
                                    <div className={styles.imgWrapper}>
                                        <CardMedia
                                            className={classesCard.media}
                                            image="assets/Cacao.jpg"
                                        />
                                    </div>

                                </CardActionArea>
                                <CardActions className={styles.cardWrapper}>
                                    <div className={styles.cardNameContentdos}>
                                        <div className={styles.cardNamedos}>Cacao</div>

                                        <div className={styles.cardNameButtondos}>
                                            <Button
                                                className={styles.cardNameButtondos}
                                                size="small"
                                                color="primary">
                                                Ver
                                    </Button>
                                        </div>

                                    </div>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
}