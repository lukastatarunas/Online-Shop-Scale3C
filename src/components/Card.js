
import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemAmount: 0
        }
    }

    getItemAmount = e => {
        this.setState({ itemAmount: e.target.value })
    }

    addItem = () => {
        console.log(this.props.id)
    }

    render() {
        return (
            <div className="Card">
                <img src={`https://robohash.org/${ this.props.id }`} alt="shopping-item" />
                <div>
                    <h2>1000€</h2>
                    <p>Home Robot</p>
                </div>
                <div>
                    <input onChange={ this.getItemAmount } placeholder="Enter Amount" />
                    <button onClick={ this.addItem }>Add item</button>
                </div>
            </div>
        )
    }
}

export default Card