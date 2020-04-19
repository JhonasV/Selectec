import axios from "axios";
class CareerService {
  get() {
    return axios.get("/api/v1/careers/list");
  }
}

export default new CareerService();
