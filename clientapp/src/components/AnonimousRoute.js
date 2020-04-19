import React from "react";

import { Route, Redirect } from "react-router-dom";
import { useUser } from "../contexts/user-context";
const AnonimousRoute = ({ component: Component, ...rest }) => {
  const { user, isLoadingUser } = useUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoadingUser) return <h1>Cargando</h1>;

        switch (user) {
          case null:
            return <Component {...rest} {...props} />;

          default:
            return <Redirect to={"/home"} />;
        }
      }}
    />
  );
};

export default AnonimousRoute;
