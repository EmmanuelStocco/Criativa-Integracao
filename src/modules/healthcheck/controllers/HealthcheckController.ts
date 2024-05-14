import { Request, Response } from "express";
import { HealthCheckService } from "../services/HealthcheckService";

class HealthCheckController {
    static async healtCheck(req: Request, res: Response) {
        const healthCheck = await HealthCheckService.check();
        return res.status(200).json(healthCheck);
    }
}

export { HealthCheckController };