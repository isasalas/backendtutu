import { User } from "../models/user.js";
import bcryptjs from "bcryptjs"
import { Linea } from "../models/linea.js";
import { Interno } from "../models/interno.js";

export async function getUserLogin(req, res) {
    const id = req.body.id;
    const password = req.body.password;
    try {
        const user = await User.findOne({where: { id }, });
        if (!user) return res.status(501).json({ message: "Usuario inexistente" });
        const confirmPass = await bcryptjs.compare(password, user.password);
        if (!confirmPass) return res.status(502).json({ message: "contraseña incorrecta" });
        res.status(200).json(user);
    } catch (error) {  return res.status(500).json({ message: error.message }); }
}

export async function getUsersInterno(req, res) {
    try {
        const Users = await User.findAll({
            include: Interno,
            order: [["id", "DESC"]],
        });
        res.status(200).json(Users);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

////////////////////////////////////////////////////////////////

export async function getUsers(req, res) {
    try {
        const Users = await User.findAll({ order: [["id", "DESC"]], });
        res.status(200).json(Users);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

export async function createUser(req, res) {
    try {
        req.body.password = await bcryptjs.hash(req.body.password, 8);
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}


export async function updateUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { id } });
        user.set(req.body);
        await user.save();
        res.status(200).json(user);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

export async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        return res.sendStatus(200);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

export async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { id } });
        res.json(user);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

export async function getUserLinea(req, res) {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            include: Linea,
            where: { id },
            //attributes: ["id", "name", "lastname", "phone", "email"],
        });
        res.json(user);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}
