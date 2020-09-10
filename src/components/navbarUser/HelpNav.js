import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import NavbarUser from './NavbarUser';
import HelpBuyUsers from '../helpBuyUsers/HelpBuyUsers';



const HelpNav = () => {
    return (
        <div>
            <NavbarUser />
            <Box mt={9}>
                <HelpBuyUsers />
            </Box>
        </div>
    );
};

export default HelpNav;
