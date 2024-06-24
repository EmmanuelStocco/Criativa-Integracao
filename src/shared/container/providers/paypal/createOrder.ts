const Payapl = require('paypal-server-api');

async function createOrderPaypal(data: any): Promise<any> {
    try {
        const paypal = new Payapl({
            clientId: process.env.PAY_PAL_CLIENT_ID, // Your PayPal client ID
            secret: process.env.PAY_PAL_SECRET, // Your PayPal secret
            environment: process.env.PAY_PAL_ENVIRONMENT, // Determine which API URL to use (sandbox OR production)
            log: true, // Log some information to the console
          });
          await paypal.authenticate();

          const order = await paypal.execute(`v2/checkout/orders`, {
            method: 'POST',
            body: data
          });

          return order;
    } catch (error: any) {
        return error;
    }
}

export default createOrderPaypal;