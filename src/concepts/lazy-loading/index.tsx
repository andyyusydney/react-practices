import * as React from "react"
const LazyLoadingComponent = React.lazy(() => import('./LazyLoadingComponent'))

const LazyLoadingWrapperComponent = () => {
	return (
		<>
			<React.Suspense fallback={<div>Loading...</div>}>
				<LazyLoadingComponent />
			</React.Suspense>
			</>
	)
}

export default LazyLoadingWrapperComponent