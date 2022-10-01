import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./trabajo.js";
import { Interno } from "./interno.js";


export const Linea = sequelize.define(
    "linea", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    direction: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}
);
Linea.hasMany(Trabajo, {
    foreinkey: "lineaId",
    sourceKey: "id",
});
Trabajo.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });
//Relacion con interno
Linea.hasMany(Interno, {
    foreinkey: "lineaId",
    sourceKey: "id",
});
Interno.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });
