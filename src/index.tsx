import * as React from "react";
import * as ReactDom from "react-dom";
import {
  useRoutes,
  Outlet,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import ChildrenPropsWrapperComponent from "./concepts/inheritance/childrenProps";
import LazyLoadingWrapperComponent from "./concepts/lazy-loading";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeComponent />,
      children: [
        { path: "/", element: <article>Home's Content</article> },
        {
          path: "lazyLoading",
          element: (
            <article id="lazyLoading">
              <React.Suspense fallback={<div>Loading...</div>}>
                <LazyLoadingWrapperComponent />
              </React.Suspense>
            </article>
          ),
        },
		{ 
			path: "/inheritance",
			element: <><article>Inheritance's Content</article><Outlet /></>,
			children: [
				{ path: "/inheritance/childrenProps", element: <ChildrenPropsWrapperComponent /> }
			]
		},
      ],
    },
  ]);
};

const HomeComponent = () => {
  return (
    <>
      <header>
        <h1>React Practices</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lazyLoading">Lazy Loading</Link>
          </li>
          <li>
            <Link to="/inheritance/childrenProps">Children Props</Link>
          </li>
          <li>
            <Link to="/hoc">Higher Order Components</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
      </section>
    </>
  );
};

ReactDom.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
