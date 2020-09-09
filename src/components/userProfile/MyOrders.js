import React, { useEffect, useContext, useState } from 'react';
import { firebase } from '../../firebase';
import { Typography, Box, Grid, Avatar, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { UserContext } from '../../context/UserProvider';


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

    const { globalUser, setGlobalUser } = useContext(UserContext);
    const classes = useStyles();
    const [orders, setOrders] = useState([]);
    const [email, setEmail] = useState(globalUser.email);

    useEffect(() => {
        const fetchUserData = async () => {
            const orderCollection = await firebase.firestore().collection('ordenes').where('customer', '==', globalUser.email).get();
            const arrayData = orderCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(arrayData);
        };
        fetchUserData();
    }, []);

    console.log(orders, 'ordenes');

    return (
        <div>
            <Typography className={classes.pad} style={{ backgroundColor: '#FAFAFA' }} >
                Pendientes
            </Typography>
            {
                orders.map(order => (

                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center" >
                        <Box p={1}>
                            <Avatar className={classes.art} alt="artesania" src="https://www.eluniversal.com.mx/sites/default/files/2018/09/16/vq_artesanias_las_munecas_repres_3076299.jpg" />
                        </Box>
                        <Typography className={classes.info}>
                            {order.author} - {order.date}
                            <Typography className={classes.info} style={{ color: '#8E8E93' }}>
                                1 artículo
                </Typography>
                        </Typography>
                    </Grid>
                ))
            }

            {/*            <Grid container
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
 */}

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
