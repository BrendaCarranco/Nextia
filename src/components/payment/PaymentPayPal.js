import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import { saveTransaction } from './saveTransaction';

const PaymentPayPal = ({ amount, history }) => {

    const [mount, setMount] = useState(amount + 150);

    return (
        <>
            <PayPalButton
                onClick={() => console.log(amount + 150)}
                amount={mount}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Detail" + JSON.stringify(details));
                    alert("Data" + JSON.stringify(data));

                    let { create_time, id, payer, status } = details;

                    history.push('/');

                    /* setTimeout(() => diAlgo("pasaron 10 segundos"), 10000); */
                    return saveTransaction({ create_time, payer, id, status });
                }}
                catchError={(err) => {
                    alert("No se pudo procesar" + JSON.stringify(err));
                }}
                options={{
                    clientId: "AcpMgoACrTbDEc820QeH1XHBqeM8DJ91LQJvIc7SiXjNCcZX6P3omHSGRp0dYaL-4gBL0xDjvZ4_7Gm-",
                    currency: "MXN"
                }}
            />
        </>
    );
};

export default withRouter(PaymentPayPal);