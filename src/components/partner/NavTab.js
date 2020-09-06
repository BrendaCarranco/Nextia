import React from 'react'
import styles from './navtab.module.css'

const NavTab = () => {
    return (
        <div className={styles.tabs}>
            <button>MIS PEDIDOS</button>
            <button>PRODUCTOS</button>
            <button>MIS DATOS</button>
        </div>
    )
}

export default NavTab
