
import React from 'react'
import './Grid.css'
import Card from './Card'

const Grid = ({ robots, items, amount, enterItemAmount, addItem }) => {
	return (
        <div className="Grid">
            { robots.map((robot, i) => <Card key={i} id={robots[i].id} items={items} amount={amount} enterItemAmount={enterItemAmount} addItem={addItem} />) }
        </div>
	)
}

export default Grid