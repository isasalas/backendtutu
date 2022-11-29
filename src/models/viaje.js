import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Interno } from "./interno.js";
import { User } from "./user.js";

export const Viaje = sequelize.define(
    "viaje", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    datetimeIda: {
        type: DataTypes.DATE
    },
    timeParada: {
        type: DataTypes.INTEGER
    },
    ida: {
        type: DataTypes.JSON
    },
    vuelta: {
        type: DataTypes.JSON
    }
}
);



