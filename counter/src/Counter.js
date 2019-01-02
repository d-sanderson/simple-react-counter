import React from "react"

class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}

		//bind all the function here so they work
		this.addOne = this.addOne.bind(this)
		this.doubleIt = this.doubleIt.bind(this)
		this.halfIt = this.halfIt.bind(this)
		this.tripleIt = this.tripleIt.bind(this)
		this.infinity = this.infinity.bind(this)
		this.subtractOne = this.subtractOne.bind(this)
	}


	subtractOne() {
		this.setState(prevState => {
			return {
				count: prevState.count - 1
			}
		})
	}
	addOne() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			}
		})
	}

	doubleIt() {
		this.setState(prevState => {
			return {
				count: prevState.count * 2
			}
		})
	}
	tripleIt() {
		this.setState(prevState => {
			return {
				count: prevState.count * 3
			}
		})
	}

	halfIt() {
		this.setState(prevState => {
			return {
				count: prevState.count / 2
			}
		})
	}

	infinity() {
		this.setState(prevState => {
			return {
				count: prevState.count / 0
			}
		})
	}


	render() {
		return (
			<div>
			<h1>{this.state.count}</h1>
		<button onClick={this.addOne}>Add One!</button>
		<button onClick={this.subtractOne}>Subtract One!</button>
		<button onClick={this.doubleIt}>Double It!</button>
		<button onClick={this.tripleIt}>Triple It!</button>
		<button onClick={this.halfIt}>Half It!</button>
		<button onClick={this.infinity}>Infinity!</button>
		</div>
	)
	}
}

export default Counter