import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Interno } from "./interno.js";
import { User } from "./user.js";
import { Viaje } from "./viaje.js";

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
    direction: {
        type: DataTypes.JSON,
        require: true
    },
    color: {
        type: DataTypes.JSON,
        require: true
    },
    phone: {
        type: DataTypes.STRING
    },
    ida: {
        type: DataTypes.JSON,
        require: true
    },
    vuelta: {
        type: DataTypes.JSON,
        require: true
    },
    /*origin: {
        type: DataTypes.JSON,
        require: true
    },
    destination: {
        type: DataTypes.JSON,
        require: true
    },
    waypoint: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        require: true
    },
    stop: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        require: true
    }*/
}
);

//Relacion con interno
Linea.hasMany(Interno, {
    foreinkey: "lineaId",
    sourceKey: "id",
    required: true
});
Interno.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });

//Relacion con interno
Linea.hasMany(User, {
    foreinkey: "lineaId",
    sourceKey: "id",
});
User.belongsTo(Linea, { foreinkey: "lineaId", targetId: "id" });

