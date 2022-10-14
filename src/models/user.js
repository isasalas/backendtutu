import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Interno } from "./interno.js";
import { Trabajo } from "./trabajo.js";

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
    },/*
    roleId: {
        type: DataTypes.STRING,
        references: {
            model: Role,
            key: 'id',
        },
        allowNull: false
    },*/
}
);


//Relacion con control
User.hasMany(Trabajo, {
    //foreinkey: "userId",
    foreinkey:{
        type: DataTypes.STRING,
        primaryKey: true
        
    },
    sourceKey: "id",
});
Trabajo.belongsTo(User, { foreinkey: "userId", targetId: "id" });

//Relacion con interno
User.hasMany(Interno, {
    foreinkey: "userId",
    sourceKey: "id",
});
Interno.belongsTo(User, { foreinkey: "userId", targetId: "id" });
