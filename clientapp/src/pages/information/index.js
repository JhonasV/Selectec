import React, { useState, useEffect } from "react";

// components
import StepOne from "../../components/SignIn/SignInFormSteps/StepOne";
import StepTwo from "../../components/SignIn/SignInFormSteps/StepTwo";
import StepThree from "../../components/SignIn/SignInFormSteps/StepThree";
import { useUser } from "../../contexts/user-context";
import Breadcrumb from "../../components/Breadcrumb";
// services
import CareerService from "../../services/CareerService";

const Information = () => {
  const { user } = useUser();
  const [values, setValues] = useState(user);
  const [careers, setCareers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await CareerService.get();
        if (response.status === 200) {
          setCareers(response.data);
        }
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    fetchCareers();
  }, []);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.values });
  };

  return (
    <div className="mt-3 mb-3 card home-wrapper">
      <Breadcrumb
        crumbs={[
          { page: "Home", path: "/home" },
          { page: "Information", path: null },
        ]}
      />
      <div>
        <div className="row ml-1 mr-1 home-title">
          <div className="col">
            <h2>Completa tu información</h2>
          </div>
        </div>
        <div className="m-2">
          <StepOne values={values} edit={false} onChange={onChange} />
          <StepTwo values={values} edit={false} onChange={onChange} />
          <StepThree
            edit={false}
            isLoading={isLoading}
            values={values}
            careers={careers}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-success">Guardar cambios</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
