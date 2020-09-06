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

const MyData = () => {

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
                <Icon color='primary'><CreateIcon /></Icon>
            </Grid>
            <Typography align='left' variant='h4' className={classes.title} >
                {globalUser.displayName}
            </Typography>
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
                <Icon color='primary'><CreateIcon /></Icon>
            </Grid>
            <Typography align='left' variant='h4' className={classes.title} >
                {globalUser.email}
            </Typography>
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
                <Icon color='primary' ><CreateIcon /></Icon>
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
