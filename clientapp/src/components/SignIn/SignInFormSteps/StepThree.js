import React from "react";

const StepThree = ({ careers, onChange, values, isLoading, edit }) => {
  const renderCareerOptions = (careers) => {
    return careers.map((career, index) => {
      return (
        <option key={index} value={career._id}>
          {career.name}
        </option>
      );
    });
  };

  return (
    <>
      <div className="form-group">
        <h3>Carrera a estudiar</h3>
      </div>
      <div className="form-group">
        <label>Carrera</label>
        <select
          className="form-control"
          name="career"
          onChange={(e) => onChange(e)}
          required
          value={!edit ? values.career._id : values.career}
          disabled={isLoading || !edit}
        >
          <option value="">Elige tu carrera</option>
          {/* {careers.map((career) => {
            return values.career._id === career._id ? (
              <option key={career._id} selected value={career._id}>
                {career.name}
              </option>
            ) : (
              <option value={career._id}>{career.name}</option>
            );
          })} */}
          {renderCareerOptions(careers)}
        </select>
      </div>
    </>
  );
};

export default StepThree;
