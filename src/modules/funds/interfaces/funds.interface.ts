interface PointOfServiceData {
    panEntryMode: string;
    posConditionCode: string;
    motoECIIndicator: string;
}

interface Address {
    country: string;
    zipCode: string;
    county: string;
    state: string;
}

interface CardAcceptor {
    address: Address;
    idCode: string;
    name: string;
    terminalId: string;
}

interface ColombiaNationalServiceData {
    addValueTaxReturn: string;
    taxAmountConsumption: string;
    nationalNetReimbursementFeeBaseAmount: string;
    addValueTaxAmount: string;
    nationalNetMiscAmount: string;
    countryCodeNationalService: string;
    nationalChargebackReason: string;
    emvTransactionIndicator: string;
    nationalNetMiscAmountType: string;
    costTransactionIndicator: string;
    nationalReimbursementFee: string;
}

export interface createPushRequest {
    amount: string;
    senderAddress?: string;
    localTransactionDateTime: string;
    pointOfServiceData?: PointOfServiceData;
    recipientPrimaryAccountNumber?: string;
    colombiaNationalServiceData?: ColombiaNationalServiceData; // Caso for alguma transação feita da colombia
    cardAcceptor: CardAcceptor;
    senderReference?: string;
    transactionIdentifier: string;
    acquirerCountryCode: string;
    acquiringBin: string;
    retrievalReferenceNumber: string;
    senderCity?: string;
    senderStateCode?: string;
    systemsTraceAuditNumber: string;
    senderName?: string;
    businessApplicationId: string;
    settlementServiceIndicator?: string;
    merchantCategoryCode?: string;
    transactionCurrencyCode: string;
    recipientName?: string;
    senderCountryCode?: string;
    sourceOfFundsCode?: string;
    senderAccountNumber?: string;
}