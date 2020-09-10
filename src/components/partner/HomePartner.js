import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Grid, CardMedia } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyOrders from './MyOrders';
import MyProducts from './MyProducts';

import NavbarUser from '../navbarUser/NavbarUser';
import PartnerProfile from './PartnerProfile';
import photo from '../../assets/images/inicioGabriel.png';
import Help from '../help/Help';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        marginTop: 56,
        zIndex: 1000
    },
    tabsInfo: {
        marginTop: 243,
    },
    category: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: .5,
        letterSpacing: 3,
        padding: 8
    }
}));


function HomePartner() {

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <NavbarUser />
            <AppBar position='fixed' className={classes.tabs}   >
                <Grid>
                    <Box display="flex"
                        alignItems="center"
                    >
                        <CardMedia
                            component="img"
                            alt="user"
                            height="140"
                            image={photo}
                        />
                        <Box position='absolute' mt={6} ml={1} backgroundColor='primary'>
                            <Typography className={classes.category} >Gabriel Perez Rajón</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Box style={{ display: 'flex', justifyContent: 'center' }} >
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
                        <Tab label="Mis pedidos" {...a11yProps(0)} style={{ color: 'white' }} />
                        <Tab label="Mis datos" {...a11yProps(1)} style={{ color: 'white' }} />
                        <Tab label='Ayuda' {...a11yProps(2)} style={{ color: 'white' }} />
                    </Tabs>
                </Box>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.tabsInfo}>
                <MyOrders />
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabsInfo}>
                <PartnerProfile />
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabsInfo}>
                <Help />
            </TabPanel>
        </div >
    );
}

export default HomePartner;
