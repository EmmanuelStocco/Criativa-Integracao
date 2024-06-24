import createOrderPaypal from "../../../shared/container/providers/paypal/createOrder";
import { CreateOrderPaypal } from "../interfaces/paypal.interface";

class PayPalService {
  static async payment(data: CreateOrderPaypal): Promise<any> {
    try {
      return await createOrderPaypal(data);
    } catch (error: any) {
      return error;
    }
  }
}

export { PayPalService };
