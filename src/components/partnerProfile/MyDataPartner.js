import React, { useContext } from 'react';
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
        marginTop: 15
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

const MyDataPartner = () => {
    const classes = useStyles();
    const { globalUser } = useContext(UserContext);

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
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI NOMBRE
                </Typography>
                </Box>
                <Icon><CreateIcon /></Icon>
            </Grid>
            <Typography align='left' variant='h4' className={classes.title} >
                {globalUser.displayName}
            </Typography>
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
                <Icon><CreateIcon /></Icon>
                <Typography align='left' className={classes.info}>
                    Soy originario de Izamal,
                    Yucatán. Comencé a trabajar con la madera a los 18 años.
                    Era jardinero y un día encontré una raíz e imaginé una serpiente, empecé a tallarla hasta dejarla perfecta.
                    Me gustó y comencé a realizar piezas inspiradas en retablos y objetos prehispánicos mayas.
             </Typography>

            </Grid>
            <Typography align='left' className={classes.info}>
                Este correo electrónico será visible para tus compradores.
                Es un medio para poder contactarte con ellos, con nuestra plataforma y recibir promociones.
             </Typography>

            <Typography align='left' className={classes.info}>
                Esta descripción ayudará a tus clientes a conocer un poco sobre ti.
                Puedes consultar la sección Ayuda y conocer algunos consejos para escribir esta descripción.
             </Typography>

            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Box >
                    <Typography className={classes.title} >
                        MI CORREO ELECTRÓNICO
                </Typography>
                </Box>
                <Icon><CreateIcon /></Icon>
            </Grid>
            <Typography align='left' variant='h4' className={classes.title} >
                {globalUser.email}
            </Typography>
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
                <Icon><CreateIcon /></Icon>
            </Grid>
            <Typography align='left' variant='h4' className={classes.title} >
                Artesanías Pérez Rajón
            </Typography>
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
                <Icon><CreateIcon /></Icon>
            </Grid>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <TextField
                    id="filled-password-input"
                    label="Calle"
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
                    type="text"
                    variant="filled"
                    fullWidth
                />
                <TextField
                    label="Municipio"
                    type="text"
                    variant="filled"
                    fullWidth
                />
                <TextField
                    className={classes.title}
                    label="Estado"
                    type="text"
                    variant="filled"
                    fullWidth
                />

                <TextField
                    label="Código Postal"
                    type="text"
                    variant="filled"
                    fullWidth
                />
                <TextField
                    className={classes.title}
                    label="Referencias"
                    type="text"
                    variant="filled"
                    fullWidth
                />
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
                    <Icon><CreateIcon /></Icon>
                </Grid>
                <TextField
                    className={classes.title}
                    label="Facebook"
                    type="text"
                    variant="filled"
                    fullWidth
                />

                <TextField
                    label="Instagram"
                    type="text"
                    variant="filled"
                    fullWidth
                />
                <TextField
                    className={classes.title}
                    label="Sitio web"
                    type="text"
                    variant="filled"
                    fullWidth
                />
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
                    <Icon><CreateIcon /></Icon>
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
                <Icon><CreateIcon /></Icon>
            </Grid>


        </div>
    );
};

export default MyDataPartner;
