import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const Area : any = iDataBase.define('Area', {
  idP: {
    type: DataTypes.INTEGER
  },
  area: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'areas'
});

export default Area;
