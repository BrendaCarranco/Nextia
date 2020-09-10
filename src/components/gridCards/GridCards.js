import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css';

import { UserContext } from '../../context/UserProvider';

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
    }
}));

const useStylesCard = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        minHeight: 270,
    },
});

function FullWidthGrid(props) {

    const classes = useStyles();
    const classesCard = useStylesCard();

    const { setArtId } = useContext(UserContext);

    const handleFibras = () => {
        setArtId('Fibras vegetales');
        props.history.push('/art');
    };

    const handleBarro = () => {
        setArtId('Barro');
        props.history.push('/art');
    };

    const handleCacao = () => {
        setArtId('chocolate');
        props.history.push('/art');
    };

    return (
        <div className={classes.root}>
            <div className={styles.cardsContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Paper className={styles.paper}>
                            <div className={styles.title}>
                                <div className={styles.categoriesTitle}>
                                    <Box mt={2}>
                                        <Typography className={classes.category}
                                        >Categorías <br></br> destacadas</Typography>
                                    </Box>
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
                                                style={{ borderRadius: '2px', width: '130px' }}
                                                size="small"
                                                onClick={() => handleBarro()}
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
                    <Grid item xs={6} sm={6} lg={6}>
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

                                    <div className={styles.cardNameContentdos}  >
                                        <div className={styles.cardNamedos}>Fibras</div>
                                        <div className={styles.cardNameButtondos}>
                                            <Button
                                                style={{ borderRadius: '2px' }}
                                                size="small"
                                                onClick={() => handleFibras()}
                                                color="primary">
                                                Ver
                                        </Button>
                                        </div>
                                    </div>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6}>
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
                                                color="primary"
                                                onClick={() => handleCacao()}
                                                style={{ borderRadius: '2px' }}
                                            >
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

export default withRouter(FullWidthGrid);