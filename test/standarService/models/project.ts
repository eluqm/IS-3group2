import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const Project : any = iDataBase.define('Project', {
  idDoc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  Likes: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'projectResearch'
});

export default Project;
