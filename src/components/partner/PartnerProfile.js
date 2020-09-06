import React from 'react'
import photo from '../../assets/images/partner1.png'
import codigo from '../../assets/images/codigo.png'

import {partners} from '../../assets/data/data.js'
import styles from './partner.module.css'
import {Grid} from '@material-ui/core'
import NavTab from './NavTab'

const PartnerProfile = () => {
    
    return (
        <div className={styles.partnerProfile}>
            <Grid container justify = "center" item sx={12}>
            <img alt="imgpartner" src={photo} />
            </Grid>
            <div>
                <label>MI NOMBRE</label>
                <p>{partners[0].name}</p>
            </div>
            <div>
                <label>MI INFORMACIÓN</label>
                <p>{partners[0].description}</p>
            </div>
            <div>
                <label>MI CORREO ELECTRÓNICO</label>
                <p>{partners[0].email}</p>
            </div>
            <div>
                <label>NOMBRE DE MI TIENDA</label>
                <p>{partners[0].brand}</p>
            </div>
            <div>
                <label>MI DIRECCIÓN</label>
                <p>Calle {partners[0].address.calle}, colonia {partners[0].address.colonia}, municipio {partners[0].address.municipio}, {partners[0].address.estado}</p>
                {/* <p>Colonia: {partners[0].address.colonia}</p>
                <p>Municipio: {partners[0].address.municipio}</p>
                <p>Estado: {partners[0].address.estado}</p>*/}
                <p>CP {partners[0].address.cp}</p>
                <p>Referencia: {partners[0].address.referencia}</p> 
            </div>
            <div>
                <label>MIS REDES SOCIALES</label>
                <p>{partners[0].networks.facebook}</p>
                <p>{partners[0].networks.instagram}</p>
                <p>{partners[0].networks.pageweb}</p>
            </div>
            <div>
                <label>MI CODI PARA COBRAR</label>
                <Grid container justify = "center" item sx={12}>
                <img alt="imgcodigoQR" src={codigo} />
                </Grid>
            </div>
        </div>
    )
}

export default PartnerProfile
