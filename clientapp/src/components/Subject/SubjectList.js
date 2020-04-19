import React from "react";

const SubjectList = ({ subjects }) => {
  const renderList = () => {
    console.log(subjects);
    return subjects.map((subject) => {
      return (
        <>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {subject.name}
            <span className="badge badge-primary badge-pill">
              {subject.quater}
            </span>
          </li>
        </>
      );
    });
  };
  return <ul className="list-group">{renderList()}</ul>;
};

export default SubjectList;
