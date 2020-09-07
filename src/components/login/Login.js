import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';

import { Button, TextField, Divider, Typography, CardMedia, Box, Container, Grid } from '@material-ui/core';

import logo from '../../assets/images/nextia_black.png';
import googleIcon from '../../assets/images/google.svg';
import NavbarUser from '../navbarUser/NavbarUser';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        width: 160,
        height: 160,
        marginTop: 30
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    inputName: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 0,
        marginTop: 30
    },
    top: {
        marginTop: 30,
    },
    btn: {
        textTransform: 'none',
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
    },
    login: {
        color: '#3f51b5'
    }
});

const Login = (props) => {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginGoogle = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const res = await firebase.auth().signInWithPopup(provider);
            const collection = await firebase.firestore().collection('usuarios').doc(res.user.email).get();

            if (!collection.exists) {
                await firebase.firestore().collection('usuarios').doc(res.user.email).set({
                    email: res.user.email,
                    uid: res.user.uid,
                    role: 'cliente',
                    displayName: res.user.displayName
                });
            }
            return props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    const loginEmail = () => {
        console.log('email login');
    };

    return (
        <div>
            <NavbarUser />
            <Container className={classes.root}>
                <Typography className={classes.title} >Ingresa</Typography>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <CardMedia
                        className={classes.media}
                        image={logo}
                        alt='logo'
                        align='center'
                    />
                </Box>
                <Typography className={classes.inputName}>
                    Correo electrónico *
                </Typography>
                <TextField
                    id="email"
                    label="correo@ejemplo.com"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Typography className={classes.inputName} >
                    Contraseña *
                </Typography>
                <TextField
                    id="password"
                    label="Contraseña"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Grid justify="flex-end" container direction="row" className={classes.top} >
                    <Button variant="contained" onClick={() => loginEmail()} style={{ backgroundColor: '#1A5597', color: 'white' }}>
                        Ingresar
                </Button>
                </Grid>

                <Grid item xs={12} justify="center" container direction="row" className={classes.top}>
                    <Button
                        onClick={() => loginGoogle()}
                        justify='center'
                        className={classes.btn}
                    >Ingresar con google
                    <CardMedia
                            className={classes.icon}
                            image={googleIcon}
                            alt='logo'
                            align='center'
                        />
                    </Button>
                </Grid>
                <Divider className={classes.top} variant='middle' />

            </Container >
            {/*  <Typography variant='h4'>Registro</Typography>
            <Button
                onClick={() => loginGoogle()}
            >Iniciar sesión con google</Button> */}
        </div >
    );
};

export default withRouter(Login);