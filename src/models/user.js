import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./trabajo.js";
import { Interno } from "./interno.js";

export const User = sequelize.define(
    "user", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}
);
//Relacion con trabajo
User.hasMany(Trabajo, {
    foreinkey: "userId",
    sourceKey: "id",
});
Trabajo.belongsTo(User, { foreinkey: "userId", targetId: "id" });
//Relacion con interno
User.hasMany(Interno, {
    foreinkey: "userId",
    sourceKey: "id",
});
Interno.belongsTo(User, { foreinkey: "userId", targetId: "id" });
