import { Interno } from "../models/interno.js";
import { Linea } from "../models/linea.js";
import { User } from "../models/user.js";



export async function getLineaUser(req, res) {
    const { id } = req.params;
    try { const linea = await Linea.findOne({
            include:  User ,
            where: { id },
            order: [["id", "DESC"]],
        });
        res.json(linea);
    } catch (error) { return res.status(500).json({ message: error.message }); }
}

export async function getLineaInternos(req, res) {

    const { id } = req.params;
    try {
        const linea = await Linea.findOne({
            include: [
                { model: Interno, include: User }
              ],
            where: { id },
            order: [["id", "DESC"]],
        });
        res.json(linea);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

///////////////////////////////////////////////////////////
export async function getLineas(req, res) {
    try {
        const Lineas = await Linea.findAll({
            order: [["id", "DESC"]],
        });
        res.status(200).json(Lineas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createLinea(req, res) {
    try {
        const newLinea = await Linea.create(req.body);
        res.status(200).json(newLinea);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateLinea(req, res) {
    const { id } = req.params;
    try {
        const linea = await Linea.findOne({
            where: { id },
        });

        linea.set(req.body);

        await linea.save();

        res.status(200).json(linea);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteLinea(req, res) {
    const { id } = req.params;
    try {
        await Linea.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getLinea(req, res) {
    const { id } = req.params;
    try {
        const linea = await Linea.findOne({
            where: { id },
        });
        res.json(linea);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
