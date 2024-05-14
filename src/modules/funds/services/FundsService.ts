import { createPushFundsTransaction } from "../../../shared/container/providers/visa";
import { createPushRequest } from "../interfaces/funds.interface";

class FundsService {
    static async createPushFundsTransaction(data: createPushRequest): Promise<any> {
        try {
            const response = await createPushFundsTransaction(data);
            return response;
        } catch (error: any) {
						return error;
        }
    }
}

export { FundsService };
