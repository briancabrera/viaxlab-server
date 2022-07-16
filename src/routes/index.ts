import { Router } from "express";
import { ErrorHandler } from "../api/models/error-handler.model";
import { ticketRouter } from "./tickets/index";

export const router = Router();

router.use("/tickets", ticketRouter);

router.use("*", () => {
    throw new ErrorHandler(
        "That route does not exist",
        404
    );
});