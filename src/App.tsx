import "./styles.css";
import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  StaticContext,
  RouteComponentProps
} from "react-router-dom";
import { PublicPage } from "./PublicPage";
import { PrivatePage } from "./PrivatePage";
import { AuthedPage } from "./AuthedPage";
import { ErrorPage } from "./ErrorPage";

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Router>
        <nav>
          <p>
            <Link
              to={(location) => ({
                pathname: "/public_page",
                state: {
                  prevPath: location.pathname
                }
              })}
            >
              Go Public Page
            </Link>
          </p>
          <p>
            <Link
              to={(location) => ({
                pathname: "/private_page",
                state: {
                  prevPath: location.pathname
                }
              })}
            >
              Go Private Page
            </Link>
          </p>
          <p>
            <Link
              to={(location) => ({
                pathname: "/authed_page",
                state: {
                  prevPath: location.pathname
                }
              })}
            >
              Go Authed Page
            </Link>
          </p>
        </nav>
        <Switch>
          <Route
            render={(
              props: RouteComponentProps<
                {},
                StaticContext,
                { prevPath: string }
              >
            ) => {
              const prevPath = props.location.state?.prevPath;
              const currentPath = props.location.pathname;
              console.log(`prev:    ${prevPath}`);
              console.log(`current: ${currentPath}`);
              console.log(`======================`);
              if (currentPath === "/") {
                return <Redirect to="/public" />;
              }
              // * -> Private はOK
              if (currentPath === "/private_page") {
                return <PrivatePage from={prevPath} />;
              }
              // * -> Public はOK
              if (currentPath === "/public_page") {
                return <PublicPage from={prevPath} />;
              }

              // Private -> Authed のみOK
              if (currentPath === "/authed_page" && prevPath === "/private") {
                return <AuthedPage from={prevPath} />;
              }
              return <ErrorPage from={prevPath} />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};
