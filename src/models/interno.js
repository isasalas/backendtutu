import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Interno = sequelize.define(
    "interno", {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
}
);