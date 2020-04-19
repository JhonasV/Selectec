import React from "react";

import { NavLink, useHistory } from "react-router-dom";

// hooks
import { useUser } from "../contexts/user-context";

const Navbar = () => {
  const { user, isLoadingUser, logOut } = useUser();
  const history = useHistory();

  const renderAnonimousMenu = () => {
    if (isLoadingUser) {
      return;
    }

    switch (user) {
      case null:
        return (
          <>
            <li className="nav-item active">
              <NavLink activeClassName="active" className="nav-link" to="/">
                <i className="fa fa-home" aria-hidden="true"></i> Home{" "}
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </>
        );

      default:
        return;
    }
  };

  const renderLoggedInMenu = () => {
    if (isLoadingUser) {
      return <p>Loading</p>;
    }

    switch (user) {
      case null:
        return (
          <>
            <li className="nav-item active">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/login"
              >
                <i className="fa fa-sign-in" aria-hidden="true"></i> Ingresar{" "}
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/signin"
              >
                Registrarse <span className="sr-only">(current)</span>
              </NavLink>
            </li>
          </>
        );
      default:
        return (
          <>
            <li className="nav-link font-weight-bold">CIF: {user.collegeId}</li>
            <li className="nav-link font-weight-bold">
              Plan: {user.career ? user.career.code : null}
            </li>
            <li className="nav-item active font-weight-bold">
              <NavLink activeClassName="active" className="nav-link" to="/home">
                {user.lastnames} {user.names}
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger text-white"
                onClick={() => {
                  logOut();
                  history.push("/");
                }}
              >
                Salir <i className="fa fa-sign-out" aria-hidden="true"></i>
              </button>
            </li>
          </>
        );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container">
          <NavLink
            className="navbar-brand font-weight-bold"
            to={{ pathname: user ? "/home" : "/" }}
          >
            Selectec
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">{renderAnonimousMenu()}</ul>
            <ul className="navbar-nav mr-right">{renderLoggedInMenu()}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
