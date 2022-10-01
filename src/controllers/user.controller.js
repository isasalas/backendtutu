import { User } from "../models/user.js";
import bcryptjs from "bcryptjs"

/*
const userLogin = async({user,email, password}) =>{
    if(!email || !password) return false
    var response= await user.findOne({email});
    if (!response) return false
    confirmPass = await bcryptjs.compare(password, response.password);
    if(!confirmPass) return false
    return response
}*/


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
        req.body.password = await bcryptjs.hash(req.body.password,8);
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
            where: { id },
            attributes: ["id", "name", "lastname", "phone", "email"],
        });
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
