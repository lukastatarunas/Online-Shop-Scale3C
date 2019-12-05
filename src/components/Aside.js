
import React from 'react'
import './Aside.css'

const Aside = ({ robots, items, amount, addItem }) => {
    // let totalSum = amount[amount.length - 1] * 1000
    // if (isNaN(totalSum)) {
    //     totalSum = 0
    // }
    // console.log(amount)
    let totalSum
    if (amount.length > 0) {
        totalSum = amount.reduce((accumulator, currentValue) => accumulator + currentValue) * 1000
    }
	return (
        <div className="Aside">
            <h1>Shopping basket</h1>
            <ul>
                {items.map((item, i) => 
                    <li key={i}>
                        {`${ amount[i] }X`}
                        <img width="100" src={`https://robohash.org/${ item }`} alt="shopping-item" />
                        <button className="delete-button">X</button>
                    </li>
                )}
            </ul>
            {/* <p>{`Total sum to pay: ${items.length * 1000}€`}</p> */}
            <p>{`Total sum to pay: ${totalSum === undefined ? `` : totalSum}€`}</p>
            <button className="checkout-button">Checkout</button>
        </div>
	)
}

export default Aside