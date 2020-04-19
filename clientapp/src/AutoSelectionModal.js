import React from "react";

const AutoSelectionModal = ({ subjects, handleSubjectRemove }) => {
  return (
    <div
      className="modal fade"
      tabindex="-1"
      role="dialog"
      id="autoSelectionModal"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div
          className="modal-content"
          style={{ height: "90vh", overflow: "auto" }}
        >
          <div className="modal-header bg-primary text-white">
            <div className="modal-title">
              <h4>Materias seleccionadas</h4>
            </div>
          </div>
          <div className="modal-body p-3">
            <div className="row">
              <div className="col">
                <table className="table table-hover">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Materia</th>
                      <th>CRD</th>
                      <th>Remover</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((sub) => {
                      return (
                        <tr>
                          <td>{sub.name}</td>
                          <td>{sub.credits}</td>
                          <td>
                            <button
                              className="btn btn-warning"
                              onClick={(e) =>
                                handleSubjectRemove({
                                  id: sub.id,
                                  credits: sub.credits,
                                })
                              }
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <input
              type="button"
              className="btn btn-primary"
              value="Confirmar"
            /> */}
            <input
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              value="Cerrar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSelectionModal;
