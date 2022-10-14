import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";



export const Trabajo = sequelize.define(
    "trabajo", {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
    },
    /*lineaId: {
        //primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: Linea,
            key: 'id',
        },
        allowNull: false
    },
    userId: {
        //primaryKey: true,
        type: DataTypes.STRING,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false
    },*/


}
); 
