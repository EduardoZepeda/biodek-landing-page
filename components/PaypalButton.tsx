import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

interface PaypalButtonProps {
    invoice: string
    total: string
}

const PaypalButton = ({ invoice, total }: PaypalButtonProps) => {
    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: invoice,
                            amount: {
                                value: total,
                            },
                        },
                    ],
                });
            }}
                onApprove={async (data, actions) => {
                    return actions?.order?.capture().then((details) => {
                        const name = details?.payer?.name?.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
                style={{ layout: "horizontal", shape: "pill", height: 40 }} />
        </PayPalScriptProvider >

    )
}

export default PaypalButton