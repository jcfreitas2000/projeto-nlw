import {MessageService} from "../services/MessageService";
import {Request, Response} from "express";

class MessageController {

    private messageService = new MessageService();

    async list(request: Request, response: Response): Promise<Response> {
        return response.json(await this.messageService.list());
    }

    async listByUser(request: Request, response: Response): Promise<Response> {
        const {userId} = request.params;
        return response.json(await this.messageService.listByUserId(userId));
    }

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const message = await this.messageService.create(request.body);

            return response.status(201).json(message);
        } catch (err) {
            return response.status(400).json({message: err.message})
        }
    }
}

export {MessageController}
