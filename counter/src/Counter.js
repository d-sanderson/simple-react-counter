import React from "react"

class Counter extends React.Component {
	constructor() {
		super()
		this.state = {
			count: 0
		}
		this.addOne = this.addOne.bind(this)
		this.doubleIt = this.doubleIt.bind(this)
		this.halfIt = this.halfIt.bind(this)
		this.tripleIt = this.tripleIt.bind(this)
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


	render() {
		return (
			<div>
			<h1>{this.state.count}</h1>
		<button onClick={this.addOne}>Add One!</button>
		<button onClick={this.doubleIt}>Double It!</button>
		<button onClick={this.tripleIt}>Triple It!</button>
		<button onClick={this.halfIt}>Half It!</button>
		</div>
	)
	}
}

export default Counter