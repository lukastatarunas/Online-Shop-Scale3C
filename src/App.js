import React, {Component} from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Grid from './components/Grid'
import Aside from './components/Aside'
import { requestRobots, enterItemAmount, addItem, deleteItem, showPrice } from './redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error,
		amount: state.enterItemAmount.amount,
		items: state.addOrDeleteItems.items,
		bool: state.showPrice.bool
	}
}

const mapDispatchToProps = dispatch => {
	return {
		requestRobots: () => dispatch(requestRobots()),
		enterItemAmount: amount => dispatch(enterItemAmount(amount)),
		addItem: item => dispatch(addItem(item)),
		showPrice: () => dispatch(showPrice())
	}
}

class App extends Component {
	
	componentDidMount() {
		this.props.requestRobots()
	}

	render() {
		const { robots, isPending, items, amount, enterItemAmount, addItem, bool } = this.props
		return isPending ?
			<h1>Loading...</h1> :
		(
			<div className="App">
				<ErrorBoundary>
					<Grid robots={ robots } items={items} amount={amount} enterItemAmount={enterItemAmount} addItem={addItem} bool={bool} />
					<Aside robots={ robots } items={items} amount={amount} addItem={addItem} />
				</ErrorBoundary>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)