import {DataTypes} from "sequelize";
import {ORM} from "../database/database.js";

export const User = ORM.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  namecompleto: {
    type: DataTypes.STRING
  },
  pass: {
    type: DataTypes.STRING
  },
  user: {
    type: DataTypes.STRING
  },
  fecharegistro: {
    type: DataTypes.DATEONLY
  },
  emailcontacto: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  areaRese: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  insitucion: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  sobremi: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  codigo_orcdir: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'users'
});
