import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51IQjPQDhn5NFP4KQU8tJ3ZxsR7StiWpy1Wb0uyCi4f20MBrtJyvXw7V8ia6Vk5nF7eMfdfaNlqAP5ASfDknXt0Jb00b104pLna'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='UNIQLO-NE'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton