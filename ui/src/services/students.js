import { axios } from "./config";

export default {
  getStudents: () => axios.get("students"),
  getStudentById: (id) => axios.get(`students/${id}`),
  createStudent: (sutdent) => axios.post("students", sutdent),
  updateStudent: (sutdent) => axios.put(`students/${sutdent.id}`, sutdent),
  deleteStudent: (id) => axios.delete(`students/${id}`),
};
