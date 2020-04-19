import React from "react";

// components
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div
      className="jumbotron mt-5"
      style={{ backgroundColor: "#fff", boxShadow: "1px 2px 3px" }}
    >
      <h1 className="display-3">Bienvenido a Selectec</h1>
      <p className="lead">
        Selectec es el módulo de selección de materias de la universidad UNAPEC
      </p>
      <hr className="my-4" />
      <p>
        Podrás utilizar este sistema para la selección de materias, de forma
        eficiente, confiable y planificar lo que aprenderás para el próximo
        cuatrimestre hasta que que llegues a tu meta de ser profesional
      </p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/login">
          Comenzar
        </Link>
      </p>
    </div>
  );
};

export default Index;
