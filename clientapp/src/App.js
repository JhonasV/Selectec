import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AnonimousRoute from "./components/AnonimousRoute";
// pages
import Index from "./pages/index";
import Login from "./pages/login";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Information from "./pages/information";
import selection from "./pages/selection";
// contexts
import { UserProvider, useUser } from "./contexts/user-context";

const About = () => <div>Acerca de</div>;

export default () => (
  <UserProvider>
    <App></App>
  </UserProvider>
);

const App = () => {
  const { user, isLoadingUser } = useUser();

  return (
    <Router>
      <Layout>
        <Switch>
          {isLoadingUser ? "Loading" : null}
          <AnonimousRoute component={Index} path="/" exact={true} />
          <AnonimousRoute component={About} path="/about" exact={true} />
          <AnonimousRoute component={Login} path="/login" exact={true} />
          <AnonimousRoute component={SignIn} path="/signin" exact={true} />
          <ProtectedRoute
            exact
            path="/home"
            user={user}
            currentUser={user}
            component={Home}
          />
          <ProtectedRoute
            exact
            path="/information"
            currentUser={user}
            component={Information}
          />
          <ProtectedRoute
            exact
            path="/selection"
            currentUser={user}
            component={selection}
          />
        </Switch>
      </Layout>
    </Router>
  );
};
