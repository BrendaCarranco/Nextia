import React, { useEffect, useContext, useState } from 'react';
import { firebase } from '../../firebase';
import { Typography, Box, Grid, Avatar, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { UserContext } from '../../context/UserProvider';
import NavbarUser from '../navbarUser/NavbarUser';

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

const Wishlist = () => {

    const classes = useStyles();

    const [userData, setUserData] = useState([]);

    const { wishList, globalUser } = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const res = await db.collection('usuarios').where('email', '==', globalUser.email).get();
            const data = await res.docs.map(doc => doc.data());
            setUserData(data[0]);
        };
        fetchData();
    }, []);

    console.log(userData, 'wishhhh');

    return (
        <div>
            <div>
                <NavbarUser />
            </div>
            <Box mt={9}>
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
            </Box>
        </div>

    );
};

export default Wishlist;
