interface ClientReferenceInformation {
    code: string;
}

interface PaymentInformationCard {
    number: string;
    expirationMonth: string;
    expirationYear: string;
    type: string;
}

interface PaymentInformation {
    card: PaymentInformationCard;
}

interface OrderInformationAmountDetails {
    totalAmount: string;
    currency: string;
    originalAmount: string;
    originalCurrency: string;
}

interface OrderInformationBillTo {
    firstName: string;
    lastName: string;
    address1: string;
    locality: string;
    administrativeArea: string;
    postalCode: string;
    country: string;
    email: string;
    phoneNumber: string;
}

interface OrderInformation {
    amountDetails: OrderInformationAmountDetails;
    billTo: OrderInformationBillTo;
}

export default interface CreateCreditRequest {
    clientReferenceInformation: ClientReferenceInformation;
    paymentInformation: PaymentInformation;
    orderInformation: OrderInformation;
}