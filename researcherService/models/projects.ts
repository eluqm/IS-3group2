import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const Project : any = iDataBase.define('Project', {
  idP: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id: {
    type: DataTypes.INTEGER
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  titulo: {
    type: DataTypes.STRING
  },
  antecedentes: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  idF: {
    type: DataTypes.STRING
  },
  financiacion: {
    type: DataTypes.FLOAT
  },
  fechaPubli: {
    type: DataTypes.DATEONLY
  },
  fechaInit: {
    type: DataTypes.DATEONLY
  },
  fechaFin: {
    type: DataTypes.DATEONLY
  },
  vacantes: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'projects'
  }
);

export default Project;
