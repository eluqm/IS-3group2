import {DataTypes} from "sequelize";
import {ORM} from "../database/database.js";

export const Project = ORM.define('Project', {
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
      type: DataTypes.STRING,
      defaultValue: 'antecedentes pw'
    },
    descripcion: {
      type: DataTypes.STRING,
      defaultValue: 'description'
    },
    idF: {
      type: DataTypes.STRING
    },
    financiacion: {
      type: DataTypes.FLOAT,
      defaultValue: 5844.33
    },
    fechaPubli: {
      type: DataTypes.DATEONLY,
      defaultValue: '2022-07-22'
    },
    fechaInit: {
      type: DataTypes.DATEONLY,
      defaultValue: '2022-07-22'
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      defaultValue: '2022-07-22'
    },
    vacantes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'projects'
  }
);
