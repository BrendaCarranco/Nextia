import React, { useContext, useState, Fragment, useEffect } from 'react';
import { firebase } from '../../firebase';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';

import cam from '../../assets/images/camera.png';

import { UserContext } from '../../context/UserProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        width: 125,
        height: 125
    },
    info: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        marginTop: 15,
        opacity: 0.65
    },
    title: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 12
    },
    divider: {
        marginTop: 20
    }
}));

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 40,
        height: 40,
    },
}))(Avatar);

const MyData = () => {

    const classes = useStyles();
    const { globalUser, setGlobalUser } = useContext(UserContext);

    const [editName, setEditName] = useState(false);
    const [editAdress, setEditAdress] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [userData, setUserData] = useState([]);

    const [name, setName] = useState(userData.displayName);

    const handleEditName = async (e) => {
        //setEditName(false);
        try {
            const db = firebase.firestore();
            await db.collection('usuarios').doc(globalUser.email).update({
                displayName: name
            });
            setGlobalUser({
                ...globalUser, displayName: name
            });
            //setName(e.target.value);
        } catch (err) {
            console.log(err);
        }
        setEditName(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const res = await db.collection('usuarios').where('email', '==', globalUser.email).get();
            const data = await res.docs.map(doc => doc.data());
            setUserData(data[0]);
        };
        fetchData();
    }, []);

    console.log(userData);

    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center">
                <Badge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    badgeContent={<SmallAvatar alt="camera" src={cam} />}
                >
                    <Avatar className={classes.avatar} alt="user-pic" src={globalUser.pic} />
                </Badge>
            </Box>
            <Typography align='left' className={classes.info}>
                Esta descripción ayudará a los vendedores a conocer tus datos de entrega.
                </Typography>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI NOMBRE
                </Typography>
                </Box>
                <Icon color='primary' onClick={() => setEditName(true)} ><CreateIcon /></Icon>
            </Grid>
            {
                editName ? (
                    <Fragment>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <TextField
                                id="filled-password-input"
                                label='Nombre'
                                placeholder={userData.displayName}
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                variant="filled"
                            />
                            <Icon color='primary' onClick={() => handleEditName()} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Typography align='left' variant='h4' className={classes.title} >
                            {userData.displayName}
                        </Typography>
                    )
            }
            <Typography align='left' className={classes.info}>
                Este nombre será visible para los vendedores.
                </Typography>
            <Divider variant='middle' className={classes.divider} />
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI CORREO ELECTRÓNICO
                </Typography>
                </Box>
                <Icon color='primary' onClick={() => setEditEmail(true)}><CreateIcon /></Icon>
            </Grid>
            {
                editEmail ? (
                    <Fragment>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <TextField
                                id="filled-password-input"
                                label='Email'
                                placeholder={globalUser.email}
                                type="text"
                                variant="filled"
                            />
                            <Icon color='primary' onClick={() => setEditEmail(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Typography align='left' variant='h4' className={classes.title} >
                            {globalUser.email} - {name}
                        </Typography>
                    )
            }
            <Typography align='left' variant='body1' className={classes.info}>
                Este correo electrónico será visible para tus compradores.
                Es un medio para poder contactarte con ellos, con nuestra plataforma y recibir promociones.
             </Typography>
            <Divider variant='middle' className={classes.divider} />
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI DIRECCIÓN
                </Typography>
                </Box>
                <Icon color='primary' onClick={() => setEditAdress(true)} ><CreateIcon /></Icon>
            </Grid>


            {
                editAdress ? (
                    <Fragment>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <TextField
                                id="filled-password-input"
                                label="Calle"
                                value='Bosques de Asia'
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                label="Número exterior"
                                value='#39'
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                label="Número interior"
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                label="Colonia"
                                value='Bosques de Aragón'
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                label="Municipio"
                                value='Nezahualcóyotl'
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                value='Estado de México'
                                label="Estado"
                                type="text"
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                label="Código Postal"
                                value='57190'
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                label="Referencias"
                                value='Casa azul con porton negro'
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <Icon color='primary' onClick={() => setEditAdress(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Fragment>
                            <Typography align='left' variant='h4' className={classes.title} >
                                Bosques de Asia #39
                        </Typography>
                            <Typography align='left' variant='h4' className={classes.title} >
                                Bosques de Aragón
                       </Typography>
                            <Typography align='left' variant='h4' className={classes.title} >
                                Estado de México
                      </Typography>
                            <Typography align='left' variant='h4' className={classes.title} >
                                Nezahualcóyotl
                     </Typography>
                            <Typography align='left' variant='h4' className={classes.title} >
                                57179
                   </Typography>
                        </Fragment>
                    )
            }
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Typography align='left' className={classes.info}>
                    La dirección que ingreses será el lugar que aparecerá a los vendedores
                    y las compañías de mensajería. Es importante que agregues referencias claras
                    como entrecalles o establecimientos para facilitar la entrega de tus productos.
             </Typography>
                <Divider variant='middle' className={classes.divider} />
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Box >
                        <Typography className={classes.title} >
                            MIS TARJETAS
                </Typography>
                    </Box>
                    <Icon color='primary' ><CreateIcon /></Icon>
                </Grid>
                <TextField
                    id="filled-read-only-input"
                    className={classes.title}
                    defaultValue="MasterCard terminación 3216 - 7/2025"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="filled"
                    fullWidth
                />
                <Typography align='left' className={classes.info}>
                    En esta sección encontrarás las tarjetas
                    que has ingresado en nuestra plataforma como métodos de pago.
                    Recuerda que también aceptamos CODI como forma de pago segura.
                    Si necesitas conocer más sobre cómo funciona CODI puedes encontrar
                    información en la sección de Ayuda.
             </Typography>
            </Grid>
        </div>
    );
};

export default MyData;
