const Sequelize = require("sequelize");
const db = require("../db/index");

const Student = db.define("student", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  academic_register: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Student;
