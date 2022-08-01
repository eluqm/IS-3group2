import { DataTypes } from "sequelize";
import iDataBase from "../db/connection";

const Participante : any = iDataBase.define('Participante', {
  idP: {
    type: DataTypes.INTEGER
  },
  participante: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'participants'
});

export default Participante;
