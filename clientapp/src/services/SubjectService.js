import axios from "axios";
class SubjectService {
  get() {
    return axios.get("/api/v1/subjects/list", {
      headers: {
        authorization: `bearer ${localStorage.getItem("selectec-token") || ""}`,
      },
    });
  }

  getSubjectSchedules() {
    return axios.get("/api/v1/subjectschedules/list", {
      headers: {
        authorization: `bearer ${localStorage.getItem("selectec-token") || ""}`,
      },
    });
  }
}

export default new SubjectService();
