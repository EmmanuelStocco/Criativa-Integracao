interface PaymentUnitAmount {
	currency_code: string;
	value: string;
}

interface PaymentItem {
	name: string;
	description: string;
	quantity: string;
	unit_amount: PaymentUnitAmount;
}

interface PaymentAmountBreakdown {
	item_total: PaymentUnitAmount;
}

interface PaymentAmount {
	currency_code: string;
	value: string;
	breakdown: PaymentAmountBreakdown;
}

interface PurchaseUnit {
	items: PaymentItem[];
	amount: PaymentAmount;
}

interface ApplicationContext {
	return_url: string;
	cancel_url: string;
}

export interface CreateOrderPaypal {
	intent: string;
	purchase_units: PurchaseUnit[];
	application_context: ApplicationContext;
}