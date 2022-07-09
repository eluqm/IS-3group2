import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const Escuela : any = iDataBase.define('Escuela', {
  idP: {
    type: DataTypes.INTEGER
  },
  nameescuela: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  timestamps: false,
  tableName: 'escuelaspartici'
});

export default Escuela;
