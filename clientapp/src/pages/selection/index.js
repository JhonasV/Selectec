import React, { useEffect, useState } from "react";

// components
import Breadcrumb from "../../components/Breadcrumb";
import AutoSelectionModal from "../../AutoSelectionModal";
import SelectionTable from "../../components/Selection/SelectionTable";
//services
import SubjectService from "../../services/SubjectService";

const Selection = () => {
  const [subjects, setSubject] = useState([]);
  const [selection, setSelection] = useState([]);
  const [credits, setCredits] = useState(0);

  const onChange = (subjectSelected) => {
    if (credits === 25) return;

    var filteredList = selection.filter(
      (sub) => sub.name !== subjectSelected.name
    );

    var exists = selection.filter((e) => e.name === subjectSelected.name);

    if (exists.length === 0) {
      setCredits(credits + subjectSelected.credits);
    }

    setSelection([...filteredList, subjectSelected]);
  };

  const handleSubjectRemove = (subject) => {
    let filteredList = selection.filter((e) => e.id !== subject.id);

    setSelection(filteredList);
    setCredits(credits - subject.credits);
  };

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await SubjectService.getSubjectSchedules();
        if (response.status === 200) {
          setSubject(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSubjects();
  }, []);
  return (
    <>
      <div className="mt-3 mb-3 card home-wrapper">
        <Breadcrumb
          crumbs={[
            { page: "Home", path: "/home" },
            { page: "Selección", path: null },
          ]}
        />

        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-white">
                <tr>
                  <th>CARRERA</th>
                  <th>LÍMITE DE CREDS</th>
                  <th>TANDA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INGENERIA DE SOFTWARE</td>
                  <td>{credits}/25</td>
                  <td>NOCTURNA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-2 mb-2">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#autoSelectionModal"
              disabled={selection.length === 0}
            >
              Materias Seleccionadas
            </button>
          </div>
        </div>

        <SelectionTable subjectSchedules={subjects} onChange={onChange} />
      </div>
      <AutoSelectionModal
        subjects={selection}
        handleSubjectRemove={handleSubjectRemove}
      />
    </>
  );
};

export default Selection;
