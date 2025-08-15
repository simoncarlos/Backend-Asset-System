import { Router } from "express";
import { controllerLogin } from "../controllers/controllerLogin.js";

const login = new Router();

login.post("/", controllerLogin);

export default login;