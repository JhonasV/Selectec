import React from "react";

const LoginForm = ({ loading, onChange, handleLogin }) => {
  return (
    <div
      className="card border-primary mb-3 m-auto"
      style={{ maxWidth: "75%" }}
    >
      <div className="card-header">
        <h3>Ingresar</h3>
      </div>
      <div className="card-body">
        <form onSubmit={(e) => handleLogin(e)} method="POST">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              disabled={loading}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              disabled={loading}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" disabled={loading}>
              {loading ? "cargando" : "ingresar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
