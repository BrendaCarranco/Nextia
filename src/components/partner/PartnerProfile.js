import React from 'react'
import photo from '../../assets/images/partner1.png'
import codigo from '../../assets/images/codigo.png'
import {partners} from '../../assets/data/data.js'
import styles from './partner.module.css'
import {Grid} from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    divLine: {
      margin:"0px 0px 10px 0px",
    },
  });

const PartnerProfile = () => {

    const classes = useStyle();
    
    return (
        <div className={styles.partnerProfile}>
            <Grid container justify = "center" item sx={12}>
            <img alt="imgpartner" src={photo} />
            </Grid>
            <div>
                <label>MI NOMBRE</label>
                <p>{partners[0].name}</p>
            </div>
            <Divider variant="middle" className={classes.divLine}/>
            <div>
                <label>MI INFORMACIÓN</label>
                <p>{partners[0].description}</p>
            </div>
            <Divider variant="middle" className={classes.divLine}/>
            <div>
                <label>MI CORREO ELECTRÓNICO</label>
                <p>{partners[0].email}</p>
            </div>
            <Divider variant="middle" className={classes.divLine}/>
            <div>
                <label>NOMBRE DE MI TIENDA</label>
                <p>{partners[0].brand}</p>
            </div>
            <Divider variant="middle" className={classes.divLine}/>
            <div>
                <label>MI DIRECCIÓN</label>
                <p>Calle {partners[0].address.calle}, colonia {partners[0].address.colonia}, municipio {partners[0].address.municipio}, {partners[0].address.estado}</p>
                {/* <p>Colonia: {partners[0].address.colonia}</p>
                <p>Municipio: {partners[0].address.municipio}</p>
                <p>Estado: {partners[0].address.estado}</p>*/}
                <p>CP {partners[0].address.cp}</p>
                <p>Referencia: {partners[0].address.referencia}</p> 
            </div>
            <Divider variant="middle" className={classes.divLine}/>
            <div>
                <label>MIS REDES SOCIALES</label>
                <p>{partners[0].networks.facebook}</p>
                <p>{partners[0].networks.instagram}</p>
                <p>{partners[0].networks.pageweb}</p>
            </div>
            <Divider variant="middle" className={classes.divLine}/>
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
