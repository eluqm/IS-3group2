import { DataTypes } from "sequelize";
import { ORM } from "../database/database.js";

export const Facultad = ORM.define('Facultad', {
  idF: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  timestamps: false,
  tableName: 'facultad'
});
