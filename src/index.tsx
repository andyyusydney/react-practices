

import * as React from 'react';
import * as ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LazyLoadingWrapperComponent from './concepts/lazy-loading';

const App = () => {
	return (
		<Router>
			<header>
				<h1>React Practices</h1>
			</header>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/lazyLoading">Lazy Loading</Link></li>
					<li><Link to="/hoc">Higher Order Components</Link></li>
				</ul>
			</nav>
			<section>
				<Routes>
				<Route path="/" element={<article>Home's Content</article>} />
				<Route path="/lazyLoading" element={
					<article id="lazyLoading">
						<React.Suspense fallback={<div>Loading...</div>}>
							<LazyLoadingWrapperComponent />
						</React.Suspense>
					</article>} />
				{/* <article id="hoc">
					hoc
				</article> */}
				</Routes>
			</section>
		</Router>)
}
ReactDom.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>, document.getElementById('app'))