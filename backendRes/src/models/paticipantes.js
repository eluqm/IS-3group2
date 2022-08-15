import { DataTypes } from "sequelize";
import { ORM } from "../database/database.js";

export const Participante = ORM.define('Participante', {
  idP: {
    type: DataTypes.INTEGER
  },
  participante: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  timestamps: false,
  tableName: 'participants'
});
