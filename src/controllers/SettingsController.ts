import {getCustomRepository} from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";
import {Request, Response} from "express";

class SettingsController {

    async list(req: Request, res: Response) {
        const settingsRepository = getCustomRepository(SettingsRepository);
        res.json(await settingsRepository.find());
    }

    async create(req: Request, res: Response) {
        const {username, chat} = req.body;
        const settingsRepository = getCustomRepository(SettingsRepository);

        const setting = settingsRepository.create({
            username,
            chat
        });

        await settingsRepository.save(setting);

        console.log(`Successfully created a new Setting: ${setting}`);

        return res
            .status(201)
            .json(setting);
    }
}

export default SettingsController;
