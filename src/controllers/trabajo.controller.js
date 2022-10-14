import { Trabajo } from "../models/trabajo.js";
 

export async function getTrabajos(req, res) {
    try {
        const Trabajos = await Trabajo.findAll({
            order: [["id", "DESC"]],
        });
        res.status(200).json(Trabajos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createTrabajo(req, res) {
    try {
        const newTrabajo = await Trabajo.create(req.body);
        res.status(200).json(newTrabajo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export async function updateTrabajo(req, res) {
    const { id } = req.params;
    try {
        const Trabajo = await Trabajo.findOne({
            where: { id },
        });

        Trabajo.set(req.body);

        await Trabajo.save();

        res.status(200).json(Trabajo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function deleteTrabajo(req, res) {
    const { id } = req.params;
    try {
        await Trabajo.destroy({
            where: { id },
        });

        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getTrabajo(req, res) {
    const { id } = req.params;
    try {
        const Trabajo = await Trabajo.findOne({
            where: { id },
        });
        res.json(Trabajo);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
