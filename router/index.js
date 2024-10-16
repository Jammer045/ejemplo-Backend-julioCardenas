import Router from "express";
import usersRouter from "./User.js";

const router = Router();

router.use("/users", usersRouter);

export default router