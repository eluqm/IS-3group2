import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const Facultad : any = iDataBase.define('Facultad', {
  idF: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'facultad'
});

export default Facultad;
