import React from "react";

const SelectionTable = ({ subjectSchedules, onChange }) => {
  const renderTBody = (subjectSchedules) => {
    return subjectSchedules.map((subSche) => {
      return (
        <tr>
          <td>{subSche.subject.code}</td>
          <td>{subSche.subject.name}</td>
          <td>
            {subSche.dayOne} -{" "}
            {subSche.dayOneIsVirtual ? "Virtual" : "Presencial"}
            <br />
            {subSche.dayTwo !== null ? subSche.dayTwo : ""}-{" "}
            {subSche.dayTwo !== null
              ? `${subSche.dayTwoIsVirtual ? "Virtual" : "Presencial"}`
              : ""}
          </td>
          <td>{subSche.subject.credits}</td>
          <td>{subSche.subject.group === null ? "" : subSche.subject.group}</td>
          <td>
            <input
              onChange={() =>
                onChange({
                  id: subSche.subject._id,
                  name: subSche.subject.name,
                  credits: subSche.subject.credits,
                })
              }
              type="radio"
              name={subSche.subject.name}
              value={subSche.subject.id}
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="row">
      <div className="col">
        <table className="table table-bordered table-hover">
          <thead className="bg-primary text-white">
            <tr>
              <th>CODIGO</th>
              <th>ASIGNATURA</th>
              <th>DÍA</th>
              <th>CR</th>
              <th>GRUPO</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderTBody(subjectSchedules)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectionTable;
