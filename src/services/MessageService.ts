import {IService} from "./IService";
import {Message} from "../entities/Message";
import {getCustomRepository, Repository} from "typeorm";
import {MessageRepository} from "../repositories/MessageRepository";

interface ICreateMessage {
    adminId: string;
    text: string;
    userId: string;
}

class MessageService implements IService<Message> {

    async list(): Promise<Message[]> {
        return await this.getRepository().find();
    }

    async listByUserId(userId: any) {
        return await this.getRepository().find(
            {
                where: {userId},
                relations: ["user"]
            }
        );
    }

    async create({adminId, text, userId}: ICreateMessage): Promise<Message> {
        const message = await this.getRepository().create({
            adminId,
            text,
            userId
        });
        await this.getRepository().save(message);

        return message;
    }

    getRepository(): Repository<Message> {
        return getCustomRepository(MessageRepository);
    }
}

export {MessageService}
