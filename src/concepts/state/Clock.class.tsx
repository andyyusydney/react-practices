import * as React from "react"

class ClockClass extends React.Component<{}, {time: String}> {
	constructor(props: {}) {
		super(props)
		this.state = {
			time: new Date().toLocaleTimeString()
		}
	}
	timerId: ReturnType<typeof setInterval> = null

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState({ time: new Date().toLocaleTimeString()})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	render() {
		return (
			<p>Class Clock: {this.state.time}</p>
		)
	}
}

export default ClockClass