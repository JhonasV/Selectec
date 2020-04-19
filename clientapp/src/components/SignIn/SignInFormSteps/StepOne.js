import React from "react";

const StepOne = ({ onChange, values, edit }) => {
  return (
    <>
      <div className="form-group">
        <h3>Datos de acceso</h3>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => onChange(e)}
          value={values.email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          disabled={!edit}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Contraseña</label>
        <input
          onChange={(e) => onChange(e)}
          value={values.password}
          required
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          disabled={!edit}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Confirma tu contraseña</label>
        <input
          onChange={(e) => onChange(e)}
          value={values.passwordConfirmation}
          required
          type="password"
          name="passwordConfirmation"
          className="form-control"
          placeholder="Confirma tu contraseña"
          disabled={!edit}
        />
      </div>
    </>
  );
};

export default StepOne;
