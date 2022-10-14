import { User } from "../models/user.js";
import { Role } from "../models/role.js";
import bcryptjs from "bcryptjs"
import { Trabajo } from "../models/trabajo.js";
import { Linea } from "../models/linea.js";
import { Interno } from "../models/interno.js";

/*
const getLogin = async({user,email, password}) =>{
    if(!email || !password) return false
    var response= await user.findOne({email});
    if (!response) return false
    confirmPass = await bcryptjs.compare(password, response.password);
    if(!confirmPass) return false
    return response
}*/
export async function getUserLogin(req, res) {
    //const {id,password} = req.body;
    const id = req.body.id;
    const password = req.body.password;
    console.log(req.body)

    try {
        const user = await User.findOne({
            include: [
                { model: Trabajo, include: Linea }
              ],
            where: { id },
        });
        if(!user) return res.status(501).json({message:"Usuario inexistente"});

        const confirmPass = await bcryptjs.compare(password, user.password);
        console.log(confirmPass)
        if (!confirmPass) return res.status(502).json({message:"contrase;ia incorrecta"});
        //user.set(req.body);

        //await user.save();

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export async function getUsersTrabajo(req, res) {
    try {
        const Users = await User.findAll({
            //attributes: ["id", "name", "lastname", "phone", "email"],
            include:[
                { model : Trabajo },
                { model : Interno }
            ] ,
            
            order: [["id", "DESC"]],
        });
        res.status(200).json(Users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function getUsersRole(req, res) {
    try {
        const Users = await User.findAll({
            //attributes: ["id", "name", "lastname", "phone", "email"],
            include: Role,
            order: [["id", "DESC"]],
        });
        res.status(200).json(Users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

////////////////////////////////////////////////////////////////

export async function getUsers(req, res) {
    try {
        const Users = await User.findAll({
            //attributes: ["id", "name", "lastname", "phone", "email"],
            order: [["id", "DESC"]],
        });
        res.status(200).json(Users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createUser(req, res) {
    try {
        req.body.password = await bcryptjs.hash(req.body.password, 8);
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            where: { id },
        });

        user.set(req.body);

        await user.save();

        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await User.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            include: { model: Trabajo, include: Linea },
            where: { id },
            attributes: ["id", "name", "lastname", "phone", "email"],
        });
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
