import * as React from "react";
import * as ReactDom from "react-dom";
import {
  useRoutes,
  Outlet,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage";
import ChildrenPropsWrapperComponent from "./concepts/inheritance/childrenProps";
import LazyLoadingWrapperComponent from "./concepts/lazy-loading";
import NumerList from "./concepts/lists/lists";

const primaryNumberArray = [1, 3, 5, 7, 11, 13];

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeComponent />,
      children: [
        { path: "/", element: <article>Home's Content</article> },
        { path: "list", element: <NumerList list={primaryNumberArray} /> },
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
          element: (
            <>
              <article>Inheritance's Content</article>
              <Outlet />
            </>
          ),
          children: [
            {
              path: "/inheritance/childrenProps",
              element: <ChildrenPropsWrapperComponent />,
            },
          ],
        },
		{ path: "*", element: <NotFoundPage /> }
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
            <Link to="/list">List</Link>
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
