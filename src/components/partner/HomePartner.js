import React from 'react'
import NavTab from './NavTab'
import MyOrders from './MyOrders'
import principal from '../../assets/images/inicioGabriel.png'
import { Grid } from '@material-ui/core'

const HomePartner = () => {
    return (
        <>
        <Grid container justify = "center" item sx={12}>
            <img alt="imgpartner" src={principal} />
        </Grid>
        <NavTab />
        <MyOrders />
            
        </>
    )
}

export default HomePartner
