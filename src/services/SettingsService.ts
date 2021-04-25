import {getCustomRepository, Repository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";
import {Setting} from "../entities/Setting";
import {IService} from "./IService";

interface ISettingCreate {
    username: string;
    chat: boolean;
}

class SettingsService implements IService<Setting> {

    async findByUsername(username: string) {
        return await this.getRepository().findOne({username});
    }

    async list() {
        return await this.getRepository().find();
    }

    async create({username, chat}: ISettingCreate): Promise<Setting> {
        const userSettingsExists = await this.findByUsername(username);
        if (userSettingsExists) {
            throw new Error("User settings already exists!");
        }

        const setting = this.getRepository().create({username, chat});
        await this.getRepository().save(setting);

        console.log(`Successfully created a new Setting: ${setting}`);

        return setting
    }

    getRepository(): Repository<Setting> {
        return getCustomRepository(SettingsRepository);
    }
}

export {SettingsService};
