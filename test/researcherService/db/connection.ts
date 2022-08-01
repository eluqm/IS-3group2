import { Sequelize } from "sequelize";

const iDataBase : Sequelize = new  Sequelize('testing', 'root', 'root', {
  host: process.env.HOST,
  dialect: 'mysql'
});

export default iDataBase;