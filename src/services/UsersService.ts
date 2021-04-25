import {User} from "../entities/User";
import {getCustomRepository, Repository} from "typeorm";
import {UsersRepository} from "../repositories/UsersRepository";
import {IService} from "./IService";

interface IUserCreate {
    email: string;
}

class UsersService implements IService<User> {

    async findByEmail(email: string): Promise<User> {
        return await this.getRepository().findOne({email});
    }

    async list(): Promise<User[]> {
        return await this.getRepository().find();
    }

    async create({email}: IUserCreate): Promise<User> {
        const userExists = await this.findByEmail(email);
        if (userExists) {
            throw new Error("This email has already been taken by other user.");
        }

        const user = this.getRepository().create({email});
        await this.getRepository().save(user);

        console.log(`Successfully created a new User: ${user}`);

        return user
    }

    getRepository(): Repository<User> {
        return getCustomRepository(UsersRepository);
    }
}

export {UsersService};
