import React from "react";

const StepTwo = ({ onChange, values, edit }) => {
  return (
    <>
      <div className="form-group">
        <h3>Información personal</h3>
      </div>
      <div className="form-group">
        <label>Nombres</label>
        <input
          type="text"
          onChange={(e) => onChange(e)}
          value={values.names}
          name="names"
          className="form-control"
          placeholder="Ingresa tus nombres"
          required
          disabled={!edit}
        />
      </div>
      <div className="form-group">
        <label>Apellidos</label>
        <input
          onChange={(e) => onChange(e)}
          value={values.lastnames}
          type="text"
          name="lastnames"
          className="form-control"
          placeholder="Ingresa tus Apellidos"
          required
          disabled={!edit}
        />
      </div>
    </>
  );
};

export default StepTwo;
