
import React from 'react'
import './Aside.css'

const Aside = () => {
	return (
        <div className="Aside">
            <h1>Shopping basket</h1>
            <p>Total sum to pay:</p>
            <p>10000€</p>
            <button className="checkout-button">Checkout</button>
        </div>
	)
}

export default Aside