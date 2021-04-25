import {Repository} from "typeorm";

export interface IService<T> {
    getRepository(): Repository<T>;
}
