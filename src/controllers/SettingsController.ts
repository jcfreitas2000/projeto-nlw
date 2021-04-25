import {Request, Response} from "express";
import {SettingsService} from "../services/SettingsService";

class SettingsController {

    private settingsService = new SettingsService();

    async list(request: Request, response: Response) {
        response.json(await this.settingsService.list());
    }

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const setting = await this.settingsService.create(request.body);

            return response.status(201).json(setting);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }
}

export {SettingsController};
