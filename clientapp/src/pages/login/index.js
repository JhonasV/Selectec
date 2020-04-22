import React, { useState } from "react";

// components
import LoginForm from "../../components/LoginForm";
import Alert from "../../components/Alert";
import { useHistory } from "react-router-dom";

// hooks
import { useUser } from "../../contexts/user-context";

const Login = () => {
  const { login, isLoadingLogin, alert } = useUser();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    let isSuccess = await login(credentials);
    if (isSuccess) history.push("/home");
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <Alert type={alert.type} message={alert.message} />
      </div>
      <LoginForm
        loading={isLoadingLogin}
        onChange={onChange}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
