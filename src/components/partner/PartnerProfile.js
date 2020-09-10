import React, { useState, Fragment } from 'react';

import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';
import SaveIcon from '@material-ui/icons/Save';

import cam from '../../assets/images/camera.png';
import photo from '../../assets/images/partner1.png';
import codigo from '../../assets/images/codigo.png';
import { partners } from '../../assets/data/data.js';

const useStyles = makeStyles((theme) => ({
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


const PartnerProfile = () => {

    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [editName, setEditName] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const [editAdress, setEditAdress] = useState(false);
    const [editStore, setEditStore] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editNet, setEditNet] = useState(false);

    const classes = useStyles();

    return (
        <div >
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
                    <Avatar className={classes.avatar} alt="user-pic" src={photo} />
                </Badge>
            </Box>
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
                                value={partners[0].name}
                                type="text"
                                variant="filled"
                            />
                            <Icon color='primary' onClick={() => setEditName(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Typography align='left' variant='h4' className={classes.title} >
                            {partners[0].name}
                        </Typography>
                    )
            }
            <Typography align='left' className={classes.info}>
                Este nombre será visible para tus clientes.
         </Typography>
            <Divider variant='middle' className={classes.divider} />
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI INFORMACIÓN
                </Typography>
                </Box>
                <Icon color='primary' onClick={() => setEditInfo(true)}><CreateIcon /></Icon>
            </Grid>
            {
                editInfo ? (
                    <Fragment>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Multiline"
                                multiline
                                rowsMax={4}
                                value={partners[0].description}
                                onChange={handleChange}
                                variant="outlined"
                            />
                            <Icon color='primary' onClick={() => setEditInfo(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Typography align='left' variant='h4' className={classes.title} >
                            {partners[0].description}
                        </Typography>
                    )
            }
            <Typography align='left' className={classes.info}>
                Esta descripción ayudará a tus clientes a conocer un poco sobre ti.
                Puedes consultar la sección Ayuda y conocer algunos consejos para escribir esta descripción.
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
                                value={partners[0].email}
                                type="text"
                                variant="filled"
                            />
                            <Icon color='primary' onClick={() => setEditEmail(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Typography align='left' variant='h4' className={classes.title} >
                            {partners[0].email}
                        </Typography>
                    )
            }
            <Typography align='left' className={classes.info}>
                Este correo electrónico será visible para tus clientes.
                Es un medio para poder contactarte con ellos y con nuestra plataforma.
             </Typography>

            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        NOMBRE DE MI TIENDA
                </Typography>
                </Box>
                <Icon onClick={() => setEditStore(true)} color='primary' ><CreateIcon /></Icon>
            </Grid>
            {
                editStore ? (
                    <Fragment>
                        <Grid container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <TextField
                                id="filled-password-input"
                                label='Email'
                                value='Artesanias Pérez Rajón'
                                type="text"
                                variant="filled"
                            />
                            <Icon color='primary' onClick={() => setEditStore(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Typography align='left' variant='h4' className={classes.title} >
                            Artesanías Pérez Rajón
                        </Typography>
                    )
            }
            <Typography align='left' className={classes.info}>
                Este campo es opcional. Si ya tienes un nombre o deseas usar uno para tu tienda o marca,
                será visible para tus clientes en lugar tu nombre propio.
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
                                value={partners[0].address.calle}
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                label="Número exterior"
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
                                value={partners[0].address.colonia}
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                label="Municipio"
                                type="text"
                                value={partners[0].address.municipio}
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                label="Estado"
                                value={partners[0].address.estado}
                                type="text"
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                label="Código Postal"
                                type="text"
                                value={partners[0].address.cp}
                                variant="filled"
                                fullWidth
                            />
                            <TextField
                                className={classes.title}
                                label="Referencias"
                                value={partners[0].address.referencia}
                                type="text"
                                variant="filled"
                                fullWidth
                            />
                            <Icon color='primary' onClick={() => setEditAdress(false)} ><SaveIcon /></Icon>
                        </Grid>
                    </Fragment>

                ) : (
                        <Fragment>
                            <Typography>Calle {partners[0].address.calle}, colonia {partners[0].address.colonia},
                         municipio {partners[0].address.municipio}, {partners[0].address.estado}</Typography>
                            <Typography>CP {partners[0].address.cp}</Typography>
                            <Typography>Referencia: {partners[0].address.referencia}</Typography>
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
                    La dirección que ingreses será el lugar que aparecerá a las compañías de mensajería.
                    Es importante que agregues referencias claras como entrecalles o establecimientos.
             </Typography>
                <Divider variant='middle' className={classes.divider} />
                <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center">
                    <Box >
                        <Typography className={classes.title} >
                            REDES SOCIALES
                </Typography>
                    </Box>
                    <Icon color='primary' onClick={() => setEditNet(true)} ><CreateIcon /></Icon>
                </Grid>
                {
                    editNet ? (
                        <Fragment>
                            <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <TextField
                                    label='Facebook'
                                    value={partners[0].networks.facebook}
                                    type="text"
                                    variant="filled"
                                />
                                <TextField
                                    label='Instagram'
                                    value={partners[0].networks.instagram}
                                    type="text"
                                    variant="filled"
                                />
                                <TextField
                                    label='Sitio web'
                                    value={partners[0].networks.pageweb}
                                    type="text"
                                    variant="filled"
                                />
                                <Icon color='primary' onClick={() => setEditNet(false)} ><SaveIcon /></Icon>
                            </Grid>
                        </Fragment>

                    ) : (
                            <Fragment>
                                <Typography align='left' variant='h4' className={classes.title} >
                                    Facebook
                                </Typography>
                                <Typography align='left' variant='h4' className={classes.title} >
                                    Instagram
                                </Typography>
                                <Typography align='left' variant='h4' className={classes.title} >
                                    Sitio web
                                </Typography>
                            </Fragment>
                        )
                }
                <Typography align='left' className={classes.info}>
                    En este apartado podrás agregar tus redes sociales o página web.
                    Estas direcciones serán visibles para tus compradores.
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
                    <Icon color='primary'><CreateIcon /></Icon>
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
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI CODI PARA COBRAR
                </Typography>
                </Box>
                <Icon color='primary' onClick={() => setEditNet(true)} ><CreateIcon /></Icon>
                <Grid container justify="center" item sx={12}>
                    <img alt="imgcodigoQR" src={codigo} />
                </Grid>
            </Grid>
        </div>
    );
};

export default PartnerProfile;
