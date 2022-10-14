import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Interno } from "./interno.js";
import { Trabajo } from "./trabajo.js";



export const Linea = sequelize.define(
    "linea", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    directionLat: {
        type: DataTypes.STRING
    },
    directionLon: {
        type: DataTypes.STRING
    },
    colorBg: {
        type: DataTypes.STRING
    },
    colorPr: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}
);

//relacion con control
Linea.hasMany(Trabajo, {
    //foreinkey: "lineaId",
    foreinkey:{
        type: DataTypes.STRING,
        primaryKey: true
        
    },
    sourceKey: "id",
});
Trabajo.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });

//Relacion con interno
Linea.hasMany(Interno, {
    foreinkey: "lineaId",
    sourceKey: "id",
});
Interno.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });


