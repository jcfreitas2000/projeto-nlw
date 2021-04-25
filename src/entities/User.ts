import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as generateUuid} from "uuid";

@Entity("users")
class User {

    @PrimaryColumn()
    id: string = generateUuid();

    @Column()
    email: string;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}

export {User};
