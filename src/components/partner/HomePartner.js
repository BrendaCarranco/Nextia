/* import React from 'react'
import MyOrders from './MyOrders'
import MyProducts from './MyProducts'
import PartnertProfile from './PartnerProfile'
import principal from '../../assets/images/inicioGabriel.png'
import { Grid } from '@material-ui/core'
import PaymentPayPal from '../payment/PaymentPayPal'

const HomePartner = () => {
    return (
        <>
        <Grid container justify = "center" item sx={12}>
            <img alt="imgpartner" src={principal} />
        </Grid>
        <MyOrders />
        <MyProducts />
        <PartnertProfile />
        <PaymentPayPal />
            
        </>
    )
}

export default HomePartner */



import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyOrders from './MyOrders';


import PartnerProfile from './PartnerProfile';


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


function HomePartner() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div >
            {/* <NavbarUser /> */}
            <AppBar position="static"  >
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
                    <Tab label="Mis pedidos" {...a11yProps(0)} style={{ color: 'white' }} />
                    <Tab label="Mis datos" {...a11yProps(1)} style={{ color: 'white' }} />
                    <Tab label='Ayuda' {...a11yProps(2)} style={{ color: 'white' }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MyOrders />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PartnerProfile />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
        </div>
    );
}

export default HomePartner;
