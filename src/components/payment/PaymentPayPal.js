import React, { useState } from 'react'
import { PayPalButton } from "react-paypal-button-v2";

const PaymentPayPal = () => {

    const [mount, setMount] = useState(200)

    const aumentar = () => {
        setMount(300);
    }

    return (
        <>
            <PayPalButton 
                amount={mount}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Detail" + JSON.stringify(details));
                    alert("Data" + JSON.stringify(data));
                    // OPTIONAL: Call your server to save the transaction
                /*  return fetch("/paypal-transaction-complete", {
                        method: "post",
                        body: JSON.stringify({
                        orderID: data.orderID
                        })
                    }); */
                }}
                catchError = { (err) => {
                    alert("No se pudo procesar" + JSON.stringify(err));
                }}         
                options ={{
                    clientId: "AcpMgoACrTbDEc820QeH1XHBqeM8DJ91LQJvIc7SiXjNCcZX6P3omHSGRp0dYaL-4gBL0xDjvZ4_7Gm-",
                    currency: "MXN"
                }}
            />
        </>
    )
}

export default PaymentPayPal
