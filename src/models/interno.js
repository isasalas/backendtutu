import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



export const Interno = sequelize.define(
  "interno", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING
  },/*
  userId: {
    type: DataTypes.STRING,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false
  },
  lineaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Linea,
      key: 'id',
    },
    allowNull: false
  },*/
}
);