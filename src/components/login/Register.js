import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import { makeStyles } from '@material-ui/core/styles';

import { Button, TextField, Divider, Typography, CardMedia, Box, Container, Grid, Icon } from '@material-ui/core';

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
        marginTop: 10,
        marginBottom: 20
    },
    top: {
        marginTop: 5,
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
    },
    margin1: {
        marginBottom: 10,
    }
});

const Register = (props) => {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondPass, setSecondPass] = useState('');
    const [name, setName] = useState('');

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
                    Ingresa tus datos
                </Typography>
                <TextField
                    className={classes.margin1}
                    size='small'
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    margin="none"
                    fullWidth
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    className={classes.margin1}
                    size='small'
                    id="email"
                    label="Correo"
                    variant="outlined"
                    margin="none"
                    fullWidth
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    className={classes.margin1}
                    size='small'
                    id="pass"
                    label="Contraseña"
                    variant="outlined"
                    margin="none"
                    fullWidth
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <TextField
                    className={classes.margin1}
                    size='small'
                    id="pass2"
                    label="Confirmar contraseña"
                    variant="outlined"
                    margin="none"
                    fullWidth
                    type="password"
                    value={secondPass}
                    onChange={e => setSecondPass(e.target.value)}
                />
                <Grid justify="flex-end" container direction="row" className={classes.top} >
                    <Button variant="contained" onClick={() => loginEmail()} style={{ backgroundColor: '#1A5597', color: 'white' }}>
                        Registrarme
                </Button>
                </Grid>

                <Grid item xs={12} justify="center" container direction="row" className={classes.top}>
                    <Button
                        onClick={() => loginGoogle()}
                        justify='center'
                        className={classes.btn}
                    >Registrarme con google
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
        </div >
    );
};

export default withRouter(Register);