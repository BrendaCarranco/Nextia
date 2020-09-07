import React from 'react';
import { Typography, Box, Grid, Avatar, Divider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 125,
        height: 125
    },
    info: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        marginTop: 0
    },
    title: {
        fontSize: 14,
        marginTop: 12,
        marginBottom: 12
    },
    divider: {
        marginTop: 20
    },
    pad: {
        paddingTop: 0,
        fontSize: 14
    },
    art: {
        width: 50,
        height: 50,
    }
}));


const MyOrders = () => {

    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.pad} style={{ backgroundColor: '#FAFAFA' }} >
                En espera de pago
            </Typography>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center" >
                <Box p={1}>
                    <Avatar className={classes.art} alt="artesania" src="https://www.eluniversal.com.mx/sites/default/files/2018/09/16/vq_artesanias_las_munecas_repres_3076299.jpg" />
                </Box>
                <Typography className={classes.info}>
                    Gabriel Perez Rajon
                    20/08/2020
                    <Typography className={classes.info} style={{ color: '#8E8E93' }}>
                        1 artículo
                    </Typography>
                </Typography>
            </Grid>
            <Box align='center'>
                <Typography className={classes.info}>Archivados (2)</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Typography className={classes.pad} style={{ backgroundColor: '#FAFAFA' }} >
                Entregado
            </Typography>
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center" >
                <Box p={1}>
                    <Avatar className={classes.art} alt="artesania" src="https://www.eluniversal.com.mx/sites/default/files/2018/09/16/vq_artesanias_las_munecas_repres_3076299.jpg" />
                </Box>
                <Typography className={classes.info}>
                    Gabriel Perez Rajon
                    20/08/2020
                    <Typography className={classes.info} style={{ color: '#8E8E93' }}>
                        1 artículo
                    </Typography>
                </Typography>
            </Grid>
            <Divider variant='middle' className={classes.divider} />
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center" >
                <Box p={1}>
                    <Avatar className={classes.art} alt="artesania" src="https://www.eluniversal.com.mx/sites/default/files/2018/09/16/vq_artesanias_las_munecas_repres_3076299.jpg" />
                </Box>
                <Typography className={classes.info}>
                    Gabriel Perez Rajon
                    20/08/2020
                    <Typography className={classes.info} style={{ color: '#8E8E93' }}>
                        1 artículo
                    </Typography>
                </Typography>
            </Grid>



        </div>
    );
};

export default MyOrders;
