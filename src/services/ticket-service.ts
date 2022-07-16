import { TicketStatus } from '../models/ticket-status.model';

import fs from 'fs';
import path from 'path';

export class TicketService {

    static async getAllTickets(req: any, res: any) {
        try {
            const tickets = fs.createReadStream(
                path.join(__dirname, `../../data/data.json`)
            )
            tickets.pipe(res);
        } catch (err) {
            res.send(err);
        }
    }
}