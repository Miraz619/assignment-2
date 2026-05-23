import { Router } from "express";
import { authController } from "./authentication.controller";

const router=Router();



router.post('/signup/', authController.createUser )



export const authRouter=router;
