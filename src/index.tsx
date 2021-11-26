import * as React from "react";
import * as ReactDom from "react-dom";
import {
  useRoutes,
  Outlet,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage";
import NameClassComponent from "./concepts/es6/NameComponent";
import FormComponent from "./concepts/form/FormComponent";
import FunctionalPureParentComponent from "./concepts/hoc/FunctionalPureParentComponent";
import UseMemoComponent from "./concepts/hooks/UseMemoComponent";
import ChildrenPropsWrapperComponent from "./concepts/inheritance/childrenProps";
import ParentContextWrapper from "./concepts/inheritance/context/ContextWrapper";
import MouseWrapper from "./concepts/inheritance/renderProps/MouseWrapper";
import LazyLoadingWrapperComponent from "./concepts/lazy-loading";
import NumerList from "./concepts/lists/lists";
import StopWatch from "./concepts/refs/StopWatch";
import Clock from "./concepts/state/Clock";
import ClockClass from "./concepts/state/Clock.class";
import "./index.css";

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
              <h2>Inheritance's Content</h2>
              <article>
                <Outlet />
              </article>
            </>
          ),
          children: [
            {
              path: "/inheritance/childrenProps",
              element: <ChildrenPropsWrapperComponent />,
            },
            {
              path: "/inheritance/renderProps",
              element: <MouseWrapper />,
            },
            {
              path: "/inheritance/context",
              element: <ParentContextWrapper />,
            },
          ],
        },
        {
          path: "/useRef",
          element: (
            <>
              <h2>Ref</h2>
              <article>
                <Outlet />
              </article>
            </>
          ),
          children: [
            {
              path: "/useRef/stopWatch",
              element: <StopWatch />,
            },
          ],
        },
        {
          path: "/form",
          element: <FormComponent />,
        },
        {
          path: "/hooks",
          element: (
            <>
              <h2>React Hooks</h2>
              <Outlet />
            </>
          ),
          children: [
            {
              path: "/hooks/useMemo",
              element: <UseMemoComponent />,
            },
          ],
        },
        {
          path: "/hoc",
          element: (
            <>
              <h2>HOC</h2>
              <Outlet />
            </>
          ),
          children: [
            {
              path: "/hoc/functionalPureComponent",
              element: <FunctionalPureParentComponent />,
            },
          ],
        },
        {
          path: "/state",
          element: (
            <>
              <h2>React State - Clock</h2>
              <Outlet />
            </>
          ),
          children: [
            {
              path: "/state/clockFunctional",
              element: <Clock />,
            },
            {
              path: "/state/clockClass",
              element: <ClockClass />,
            },
          ],
        },
        {
          path: "/es6",
          element: (
            <>
              <h2>ES6 - Getter Setter</h2>
              <Outlet />
            </>
          ),
          children: [
            {
              path: "/es6/getterSetter",
              element: <NameClassComponent name="Andy" />,
            },
          ],
        },
        { path: "*", element: <NotFoundPage /> },
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
        <NavLink to="/">Home</NavLink>
        {" | "}
        <NavLink to="/list">List</NavLink>
        {" | "}
        <NavLink to="/lazyLoading">Lazy Loading</NavLink>
        {" | "}
        <NavLink to="/inheritance/childrenProps">Children Props</NavLink>
        {" | "}
        <NavLink to="/inheritance/context">Context</NavLink>
        {" | "}
        <NavLink to="/inheritance/renderProps">Render Props</NavLink>
        {" | "}
        <NavLink to="/useRef/stopWatch">Refs - Stop Watch</NavLink>
        {" | "}
        <NavLink to="/form">Form</NavLink>
        {" | "}
        <NavLink to="/hooks/useMemo">Use Memo</NavLink>
        {" | "}
        <NavLink to="/hoc/functionalPureComponent">
          Functional Pure Component
        </NavLink>
        {" | "}
        <NavLink to="/state/clockFunctional">Clock Functional</NavLink>
        {" | "}
        <NavLink to="/state/clockClass">Clock Class</NavLink>
        {" | "}
        <NavLink to="/es6/getterSetter">ES6 Getter Setter</NavLink>
        {" | "}
        <NavLink to="/hoc">Higher Order Components</NavLink>
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
