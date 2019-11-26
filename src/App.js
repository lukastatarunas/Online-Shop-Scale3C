import React, {Component} from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import Grid from './components/Grid'
import Aside from './components/Aside'
import { requestRobots } from './redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	
	componentDidMount() {
		this.props.onRequestRobots()
	}

	render() {
		const { robots, isPending } = this.props
		return isPending ?
			<h1>Loading...</h1> :
			(
			<div className="App">
				<ErrorBoundary>
					<Grid robots={ robots } />
					<Aside />
				</ErrorBoundary>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)