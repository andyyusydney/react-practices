1. How to improve the performance of a React App?
	- Lazy Loading, webpack dynamic loading
	   React.lazy gets a callback which returns a Promise, and returns a renderable component.

		Webpacks dynamic imports returns a Promise which will be resolved when the chunk is loaded, therefore, you can't directly render it.