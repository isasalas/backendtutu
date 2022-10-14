import { Role } from "../models/role.js";
import { User } from "../models/user.js";




export async function getRoleUsers(req, res) {
    const { id } = req.params;
    try {
        const role = await Role.findOne({
            //include: User,
            include: User ,
            where: { id },
        });
        if(!role) return res.status(500).json({ message: 'no existe' });
        res.json(role);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




//////////////////////////////////////
export async function getRoles(req, res) {
    try {
        const Roles = await Role.findAll({
            order: [["id", "DESC"]],
        });
        res.status(200).json(Roles);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createRole(req, res) {
    try {
        const newRole = await Role.create(req.body);
        res.status(200).json(newRole);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateRole(req, res) {
    const { id } = req.params;
    try {
        const role = await Role.findOne({
            where: { id },
        });

        role.set(req.body);

        await role.save();

        res.status(200).json(role);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteRole(req, res) {
    const { id } = req.params;
    try {
        await Role.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getRole(req, res) {
    const { id } = req.params;
    try {
        const role = await Role.findOne({
            where: { id },
        });
        if(!role) return res.status(500).json({ message: 'no existe' });
        res.json(role);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
