
import React, { Component } from 'react'
import './Card.css'

class Card extends Component {

    constructor() {
        super()
        this.state = {
            disableAddButton: true
        }
    }

    getItemAmount = e => {
        this.props.enterItemAmount(Number(e.target.value))
        this.setState({ disableAddButton: false })
    }

    addItem = () => {
        this.props.addItem(this.props.id)
        this.setState({ disableAddButton: true })
        console.log(this.props.amount[this.props.amount.length - 1])
    }

    render() {
        const disableAddButton = {
            pointerEvents: "none"
        }
        return (
            <div className="Card">
                <img src={`https://robohash.org/${ this.props.id }`} alt="shopping-item" />
                <div>
                    <h2>1000€</h2>
                    <p>Home Robot</p>
                </div>
                <div>
                    <select onChange={ this.getItemAmount }>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <button style={ this.state.disableAddButton ? disableAddButton : null } className="add-button" onClick={ this.addItem }>Add item</button>
                </div>
            </div>
        )
    }
}

export default Card