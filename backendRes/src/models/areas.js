import { DataTypes } from "sequelize";
import { ORM } from "../database/database.js";

export const Area = ORM.define('Area', {
  idP: {
    type: DataTypes.INTEGER
  },
  area: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  timestamps: false,
  tableName: 'areas'
});
