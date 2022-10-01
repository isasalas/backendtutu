import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Trabajo = sequelize.define(
    "trabajo", {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
    },
}
);
