import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
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
    },
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 1,
        letterSpacing: 3
    },
}));

const useStylesCard = makeStyles({
    root: {
        maxWidth: 640,
    },
    media: {
        minHeight: 280,
    },
});

export default function FullWidthGrid() {
    const classes = useStyles();
    const classesCard = useStylesCard();

    return (
        <div className={classes.root}>
            <Box mt={3} mb={3} ml={1}>
                <Typography className={classes.category}
                >Nuestros <br></br>Estados</Typography>
            </Box>
            <Grid container spacing={3}>

                <Grid item xs={12} lg={4}>
                    <Paper className={styles.paper}>

                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    className={classesCard.media}
                                    image="assets/chiapas.jpg"
                                />
                            </CardActionArea>
                            <CardActions className={styles.cardWrapper} >
                                <div className={styles.cardNameContent}>
                                    <div className={styles.cardName}>Chiapas</div>
                                    <div className={styles.cardNameButton}>
                                        <Button
                                            style={{ borderRadius: '2px', width: '130px' }}
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

                <Grid item xs={6} sm={6} lg={4}>
                    <Paper className={classes.paper}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classesCard.media}
                                    image="assets/hidalgo.jpg"
                                />
                            </CardActionArea>
                            <CardActions className={styles.cardWrapper}>
                                <div className={styles.cardNameContentdos}>
                                    <div className={styles.cardNamedos}>Hidalgo</div>
                                    <div className={styles.cardNameButtondos}>
                                        <Button
                                            style={{ borderRadius: '2px' }}
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

                <Grid item xs={6} sm={6} lg={4}>
                    <Paper className={classes.paper}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    className={classesCard.media}
                                    image="assets/Campeche.jpg"
                                />
                            </CardActionArea>
                            <CardActions className={styles.cardWrapper}>
                                <div className={styles.cardNameContentdos}>
                                    <div className={styles.cardNamedos}>Campeche</div>

                                    <div className={styles.cardNameButtondos}>
                                        <Button
                                            style={{ borderRadius: '2px' }}
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
    );
}