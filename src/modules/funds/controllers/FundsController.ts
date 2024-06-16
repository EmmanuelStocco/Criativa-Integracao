import { Request, Response } from "express";
import { FundsService } from "../services/FundsService";
import { createPushRequest } from "../interfaces/funds.interface";
import { CreditService } from "../services/CreditService";

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

    static async creditPay(req: Request, res: Response) {
        try {
            const data: any = req.body;
            const response = await CreditService.creditPay(data);

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
