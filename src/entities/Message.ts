import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {v4 as generateUuid} from "uuid"
import {User} from "./User";

@Entity("messages")
class Message {
    @PrimaryColumn()
    id: string = generateUuid();

    @Column({name: "admin_id"})
    adminId: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    admin: User;

    @Column({name: "user_id"})
    userId: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @Column()
    text: string;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;
}

export {Message};
