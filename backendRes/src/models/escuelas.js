import { DataTypes } from "sequelize";
import { ORM } from "../database/database.js";

export const Escuela = ORM.define('Escuela', {
  idP: {
    type: DataTypes.INTEGER
  },
  nameescuela: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  timestamps: false,
  tableName: 'escuelaspartici'
});
