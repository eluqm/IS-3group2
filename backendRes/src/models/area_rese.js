import { DataTypes } from "sequelize";
import { ORM } from "../database/database.js";

export const AreaResearch = ORM.define('AreaResearch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  idUser: {
    type: DataTypes.INTEGER
  },
  area_res: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'areas_rese'
});