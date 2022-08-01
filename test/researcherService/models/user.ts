import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const User : any = iDataBase.define('User', {
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
  refreshtoken: {
    type: DataTypes.STRING,
    defaultValue: ''
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'users'
});

export default User;
