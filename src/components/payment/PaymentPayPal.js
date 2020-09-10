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
            
                onSuccess={(details, data) => {
                    alert("Compra exitosa! ");

                    let { create_time, id, payer, status } = details;

                    history.push('/');

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