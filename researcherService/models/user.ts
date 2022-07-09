import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const iUser : any = iDataBase.define('User', {
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
    type: DataTypes.STRING
  },
  areaRese: {
    type: DataTypes.STRING
  },
  insitucion: {
    type: DataTypes.STRING
  },
  sobremi: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'users'
});

export default iUser;
