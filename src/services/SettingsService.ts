import {getCustomRepository, Repository} from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";
import Setting from "../entities/Setting";

interface ISettingCreate {
    username: string;
    chat: boolean;
}

class SettingsService {

    async findByUsername(username: string) {
        return await this.settingsRepository().findOne({username});
    }

    async list() {
        return await this.settingsRepository().find();
    }

    async create({username, chat}: ISettingCreate): Promise<Setting> {
        const userAlreadyExists = await this.findByUsername(username);
        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const setting = this.settingsRepository().create({username, chat});
        await this.settingsRepository().save(setting);

        console.log(`Successfully created a new Setting: ${setting}`);

        return setting
    }

    private settingsRepository(): Repository<Setting> {
        return getCustomRepository(SettingsRepository);
    }
}

export default SettingsService;
