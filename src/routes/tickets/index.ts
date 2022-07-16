import express from "express";
import { ErrorHandler } from "../../api/models/error-handler.model";
import { TicketService } from "../../services/ticket-service";

export const ticketRouter = express.Router();

ticketRouter.get('/', TicketService.getAllTickets);

ticketRouter.use("*", () => {
    throw new ErrorHandler(
        "That route does not exist in /tickets",
        404
    );
});