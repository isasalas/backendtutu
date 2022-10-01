import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./user.js";

export const Role = sequelize.define(
    "role", {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}
);
Role.hasMany(User, {
    foreinkey: "roleId",
    sourceKey: "id",
});
User.belongsTo(Role, { foreinkey: "roleId", targetId: "id" });
