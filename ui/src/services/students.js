import { axios } from "./config";

export default {
  getStudents: (search) => {
    const query = search ? `students?search=${search}` : "students";
    return axios.get(query);
  },
  getStudentById: (id) => axios.get(`students/${id}`),
  createStudent: (sutdent) => axios.post("students", sutdent),
  updateStudent: (sutdent) => axios.put(`students/${sutdent.id}`, sutdent),
  deleteStudent: (id) => axios.delete(`students/${id}`),
};
