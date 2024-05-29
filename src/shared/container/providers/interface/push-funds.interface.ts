interface PointOfServiceData {
    panEntryMode: string;
    posConditionCode: string;
    motoECIIndicator: string;
}

interface ServiceProcessingType {
    requestType: string;
}

interface CardAcceptorAddress {
    country: string;
    zipCode: string;
    county: string;
    state: string;
}

interface CardAcceptor {
    address: CardAcceptorAddress;
    idCode: string;
    name: string;
    terminalId: string;
}

export default interface TransactionData {
    surcharge?: string; // Sobretaxa do remetente conforme avaliada pelo originador
    senderAddress?: string; // Endereço do doador até 35 caracteres
    pointOfServiceData?: PointOfServiceData;
    recipientPrimaryAccountNumber: string;
    transactionIdentifier: string;
    serviceProcessingType?: ServiceProcessingType;
    acquiringBin?: string;
    retrievalReferenceNumber: string;
    systemsTraceAuditNumber: string;
    senderName: string;
    businessApplicationId: string;
    settlementServiceIndicator: string;
    transactionCurrencyCode: string;
    recipientName: string;
    sourceAmount: string;
    senderCountryCode: string;
    senderAccountNumber: string;
    amount: string;
    localTransactionDateTime: string;
    purposeOfPayment: string;
    cardAcceptor: CardAcceptor;
    senderReference: string;
    acquirerCountryCode: string;
    sourceCurrencyCode: string;
    senderCity: string;
    senderStateCode: string;
    merchantCategoryCode: string;
    sourceOfFundsCode: string;
}