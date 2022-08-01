import { Sequelize } from "sequelize";

const iDataBase = new Sequelize('beResearcher', 'root', 'root', {
  host: process.env.HOST,
  dialect: 'mysql',
});

export default iDataBase;