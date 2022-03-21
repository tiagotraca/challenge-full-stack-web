const Student = require("../models/students.model");
const { Op } = require("@sequelize/core");

exports.getAllStudents = async (req, res) => {
  try {
    let allSutdents;
    if (req.query.search) {
      allSutdents = await Student.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.like]: `%${req.query.search}%` } },
            { email: { [Op.like]: `%${req.query.search}%` } },
          ],
        },
      });
    } else allSutdents = await Student.findAll();
    return res.status(200).json(allSutdents);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getStudentByid = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const USER_MODEL = {
      cpf: req.body.cpf,
      email: req.body.email,
      name: req.body.name,
      academic_register: req.body.academicRegister,
    };

    try {
      const student = await Student.create(USER_MODEL);
      console.log("Student crerated");
      return res.status(201).json(student);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const USER_MODEL = {
      cpf: req.body.cpf,
      email: req.body.email,
      name: req.body.name,
      academic_register: req.body.academicRegister,
    };

    try {
      const student = await Student.update(USER_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(student);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.destroy({ where: { id: req.params.id } });
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json(error);
  }
};
