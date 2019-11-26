
import React from 'react'
import './Grid.css'
import Card from './Card'

const Grid = ({ robots }) => {
	return (
        <div className="Grid">
            { robots.map((robot, i) => <Card key={i} id={robots[i].id} />) }
        </div>
	)
}

export default Grid