import React from "react";

// images
import complete_information_logo from "../../images/complete_information.svg";
import choose_subjects_logo from "../../images/choose_subjects.svg";
import confirm_information_logo from "../../images/confirm_information.svg";

// css styles
import "./index.css";

// components
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div className="mt-3 mb-3 card home-wrapper">
      <div className="m-auto">
        <div className="row m-2 home-title">
          <div className="col">
            <h3>Pasos para matriculación</h3>
          </div>
        </div>
        <div className=" p-2 text-center h-auto">
          <div
            className="row m-auto h-25 steps-home pb-2 pt-2"
            style={{ width: "100%" }}
            onClick={() => history.push("/information")}
          >
            <div className="col-sm-2 col-md-3  col-lg-3 m-auto">
              <span className="pl-4" style={{ fontSize: "5em" }}>
                1
              </span>
            </div>
            <div className="col-sm-6 col-md-5  m-auto">
              <span className="pl-2" style={{ fontSize: "2em" }}>
                COMPLETA TU INFORMACIÓN
              </span>
            </div>
            <div className="col-sm-4 col-md-4 m-auto">
              <img
                height="40%"
                width="60%"
                src={complete_information_logo}
                alt="complete your info"
              />
            </div>
          </div>

          <div
            className="row h-25 steps-home m-auto pb-2 pt-2"
            onClick={() => history.push("/selection")}
          >
            <div className="col-sm-12 col-md-4 m-auto pl-4">
              <img
                height="40%"
                width="60%"
                src={choose_subjects_logo}
                alt="complete your info"
              />
            </div>
            <div className="col-sm-12 col-md-4 m-auto">
              <span style={{ fontSize: "2em" }}>SELECCIONA TUS MATERIAS</span>
            </div>
            <div className="col-sm-12 col-md-4 m-auto">
              <span style={{ fontSize: "5em" }}>2</span>
            </div>
          </div>

          <div className="row h-25 steps-home m-auto pb-2 pt-2">
            <div className="col-sm-12 col-md-3  m-auto">
              <span style={{ fontSize: "5em" }}>3</span>
            </div>
            <div className="col-sm-12  col-md-4 m-auto">
              <span className="pl-2" style={{ fontSize: "2em" }}>
                CONFIRMA TU SELECCIÓN
              </span>
            </div>
            <div className="col-sm-12 col-md-5 m-auto pl-2">
              <img
                height="40%"
                width="60%"
                src={confirm_information_logo}
                alt="complete your info"
              />
            </div>
          </div>
          {/* <div className="row">
          <div className="col-lg-4">
            {isLoading ? (
              "loading subjects"
            ) : (
              <SubjectList subjects={subjects} />
            )}
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
