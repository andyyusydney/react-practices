

import * as React from 'react'
import * as ReactDom from 'react-dom'

const App = () => {
	return (
		<>
			<header>
				<h1>React Practices</h1>
			</header>
			<nav>
				<ul>
					<li><a href="#hoc">Higher Order Components</a></li>
				</ul>
			</nav>
			<section>
				<article>
				</article>
			</section>
		</>)
}
ReactDom.render(<App />, document.getElementById('app'))