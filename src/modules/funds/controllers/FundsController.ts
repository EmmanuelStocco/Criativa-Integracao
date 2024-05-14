import { Request, Response } from "express";
import { FundsService } from "../services/FundsService";
import { createPushRequest } from "../interfaces/funds.interface";

class FundsController {
    static async createPushFundsTransaction(req: Request, res: Response) {
        try {
            const data: createPushRequest = req.body;
            const response = await FundsService.createPushFundsTransaction(data);

            if (response.status && response.status !== 200) {
                return res.status(500).json({ message: "Erro ao processar a solicitação.", detailsError: response });
            }

            return res.status(200).json(response);
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao processar a solicitação.", detailsError: error.message });
        }
    }
}

export { FundsController };
