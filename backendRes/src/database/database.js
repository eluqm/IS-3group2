import {Sequelize} from "sequelize";

export const ORM = new Sequelize('testing', 'root', 'root', {
  host: process.env.HOST,
  dialect: 'mysql'
});
