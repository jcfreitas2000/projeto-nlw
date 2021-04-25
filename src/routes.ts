import {Router} from "express";
import {SettingsController} from "./controllers/SettingsController";
import {UserController} from "./controllers/UserController";
import {MessageController} from "./controllers/MessageController";

const routes = Router()

const settingsController = new SettingsController();
routes.get("/settings", settingsController.list.bind(settingsController));
routes.post("/settings", settingsController.create.bind(settingsController));

const userController = new UserController();
routes.get("/users", userController.list.bind(userController));
routes.post("/users", userController.create.bind(userController));

const messageController = new MessageController();
routes.get("/messages", messageController.list.bind(messageController));
routes.get("/messages/:userId", messageController.listByUser.bind(messageController));
routes.post("/messages", messageController.create.bind(messageController));

export {routes};
