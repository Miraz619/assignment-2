import { Router } from "express";
import { issueController } from "./issues.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../types";

const router=Router();



router.post('/', auth(USER_ROLE.contributor,USER_ROLE.maintainer), issueController.createIssue);


export const issueRouter=router;