import capturePaymentPaypal from "../../../shared/container/providers/paypal/capturePaymentPaypal";
import createOrderPaypal from "../../../shared/container/providers/paypal/createOrder";
import { CreateOrderPaypal } from "../interfaces/paypal.interface";

class PayPalService {
  static async createOrder(data: CreateOrderPaypal): Promise<any> {
    try {
      return await createOrderPaypal(data);
    } catch (error: any) {
      return error;
    }
  }

  static async capturePayment({ orderId }: any): Promise<any> {
    try {
      return await capturePaymentPaypal(orderId);
    } catch (error) {
      return error;
    }
  }
}

export { PayPalService };
