import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import MyData from './MyData';
import NavbarUser from '../navbarUser/NavbarUser';
import MyOrders from './MyOrders';
import HelpBuyUsers from '../helpBuyUsers/HelpBuyUsers';

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
                <Box p={1} >
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
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center'
    },
    tabsInfo: {
        marginTop: 102,

    }
}));

function Profile() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <NavbarUser />
            <AppBar position='fixed' className={classes.tabs}   >
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
                <MyData />
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabsInfo}>
                <HelpBuyUsers />
            </TabPanel>
        </div>
    );
}

export default Profile;