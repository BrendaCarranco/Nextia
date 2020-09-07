
import React from 'react'
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

export default HomePartner
