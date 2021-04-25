import {Request, Response} from "express";
import {UsersService} from "../services/UsersService";

class UserController {

    private userService = new UsersService();

    async list(request: Request, response: Response): Promise<Response> {
        return response.json(await this.userService.list());
    }

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.userService.create(request.body);

            return response
                .status(201)
                .json(user);
        } catch (err) {
            return response
                .status(400)
                .json({message: err.message});
        }
    }
}

export {UserController};
