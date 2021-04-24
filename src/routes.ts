import {Router} from "express";
import SettingsController from "./controllers/SettingsController";

const routes = Router()

const settingsController = new SettingsController();
routes.get("/settings", settingsController.list.bind(settingsController));
routes.post("/settings", settingsController.create.bind(settingsController));

export default routes;
