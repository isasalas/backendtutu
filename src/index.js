import app from './app.js'
import dotenv from "dotenv";
import {sequelize} from "./database/database.js"

dotenv.config();

const port = process.env.PORT;

async function main(){
    await sequelize.sync({force: false});
    console.log('conexcion estabelcida con pg')
    app.listen(port);
    console.log('escuchando en el puerto: '+port)
}

main()