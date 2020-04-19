import React, { useState, useEffect } from "react";
import SignInForm from "../../components/SignIn/SignInForm";

// services
import CareerService from "../../services/CareerService";

// hooks
import { useUser } from "../../contexts/user-context";

// components
import { useHistory } from "react-router-dom";
import Alert from "../../components/Alert";
const SignIn = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [careers, setCareers] = useState([]);
  const { signin, isLoadingSignIn, signInValidations } = useUser();
  const history = useHistory();
  useEffect(() => {
    const getCareers = () => {
      CareerService.get()
        .then((resp) => {
          if (resp.status === 200) {
            setCareers(resp.data);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {});
    };
    getCareers();
  }, []);

  const onSubmit = async (e, values) => {
    e.preventDefault();
    console.log("[onSubmit]", values);
    let result = await signin(values);
    if (result) {
      history.push("/home");
    } else {
      console.log(signInValidations);
    }
  };

  console.log("[signInValidations]", signInValidations);
  console.log("[isLoadingSignIn]", isLoadingSignIn);
  return (
    <>
      <div className="mb-3 mt-3">
        <Alert
          type={signInValidations.type}
          message={signInValidations.message}
        />
      </div>
      <div className="mt-3 card home-wrapper" style={{ height: "70vh" }}>
        <div>
          <div className="row m-2 home-title">
            <div className="col ml-auto">
              <h3>¡Registrate! - ¡Da el primer paso! - Paso #{currentStep}</h3>
            </div>
          </div>
          <SignInForm
            isLoading={isLoadingSignIn}
            onSubmit={onSubmit}
            careers={careers}
            setStep={setCurrentStep}
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
