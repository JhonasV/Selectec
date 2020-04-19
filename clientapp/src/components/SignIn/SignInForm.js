import React, { useState } from "react";
import StepOne from "./SignInFormSteps/StepOne";
import StepTwo from "./SignInFormSteps/StepTwo";
import StepThree from "./SignInFormSteps/StepThree";

let steps = {
  stepOne: 1,
  stepTwo: 2,
  stepThree: 3,
};

const SignInForm = ({ setStep, careers, onSubmit, isLoading }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [canContinue, setContinue] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    names: "",
    lastnames: "",
    career: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    stepsValidation();
  };

  const stepsValidation = () => {
    if (currentStep === steps.stepOne) {
      if (
        values.email.length > 0 &&
        values.password.length > 0 &&
        values.passwordConfirmation.length > 0
      ) {
        setContinue(true);
        return;
      }
      setContinue(false);
      return;
    }

    if (currentStep === steps.stepTwo) {
      if (values.names.length > 0 && values.lastnames.length > 0) {
        setContinue(true);
        return;
      }
      setContinue(false);
      return;
    }

    if (currentStep === steps.stepThree) {
      if (values.career.length > 0) {
        setContinue(true);
        return;
      }
      setContinue(false);
      return;
    }
  };

  const renderStep = () => {
    setStep(currentStep);
    switch (currentStep) {
      case steps.stepOne:
        return <StepOne onChange={onChange} edit={true} values={values} />;

      case steps.stepTwo:
        return <StepTwo onChange={onChange} edit={true} values={values} />;

      case steps.stepThree:
        return (
          <StepThree
            edit={true}
            isLoading={isLoading}
            careers={careers}
            onChange={onChange}
            values={values}
          />
        );
      default:
        break;
    }
  };
  return (
    <div className="m-2">
      <form onSubmit={(e) => onSubmit(e, values)} method="POST">
        {renderStep()}
        <div className="form-group">
          <input
            disabled={
              isLoading || (!canContinue && currentStep === steps.stepOne)
            }
            className="btn btn-primary"
            onClick={(e) => {
              currentStep === steps.stepOne
                ? setCurrentStep(currentStep + 1)
                : setCurrentStep(currentStep - 1);

              if (
                currentStep === steps.stepOne &&
                values.names.length === 0 &&
                values.lastnames.length === 0
              ) {
                setContinue(false);
                return;
              }

              setContinue(true);
            }}
            type="button"
            value={currentStep === steps.stepOne ? "Siguiente" : "Volver"}
          />

          {currentStep === steps.stepThree ? (
            <button
              disabled={isLoading || canContinue || values.career === ""}
              className="btn btn-success ml-3"
            >
              Registrarse
            </button>
          ) : null}

          {currentStep > steps.stepOne && currentStep !== steps.stepThree ? (
            <input
              className="btn btn-primary ml-3"
              type="button"
              value="Siguiente"
              disabled={isLoading || !canContinue}
              onClick={() => {
                setCurrentStep(currentStep + 1);
                if (
                  currentStep === steps.stepThree &&
                  values.career.length === 0
                ) {
                  setContinue(false);
                  return;
                }

                setContinue(true);
              }}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
