import { Interno } from "../models/interno.js";


export async function getInternos(req, res) {
    try {
        const Internos = await Interno.findAll({
            order: [["id", "DESC"]],
        });
        res.status(200).json(Internos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createInterno(req, res) {
    try {
        const newInterno = await Interno.create(req.body);
        res.status(200).json(newInterno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateInterno(req, res) {
    const { id } = req.params;
    try {
        const Interno = await Interno.findOne({
            where: { id },
        });

        Interno.set(req.body);

        await Interno.save();

        res.status(200).json(Interno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteInterno(req, res) {
    const { id } = req.params;
    try {
        await Interno.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getInterno(req, res) {
    const { id } = req.params;
    try {
        const Interno = await Interno.findOne({
            where: { id },
        });
        res.json(Interno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
