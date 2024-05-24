export default {
    "recipientPrimaryAccountNumber": "4104920120500001",
    "transactionIdentifier": "123",
    "acquiringBin": "408999",
    "retrievalReferenceNumber": "412770451036",
    "systemsTraceAuditNumber": "451018",
    "senderName": "Mohammed Qasim",
    "businessApplicationId": "AA",
    "transactionCurrencyCode": "USD",
    "recipientName": "rohan",
    "sourceAmount": "123.12",
    "senderCountryCode": "124",
    "senderAccountNumber": "4104920120500002",
    "amount": "124.05",
    "localTransactionDateTime": "2024-05-24T12:34:56",
    "purposeOfPayment": "purpose",
    "cardAcceptor": {
        "address": {
            "country": "USA",
            "zipCode": "94404",
            "county": "San Mateo",
            "state": "CA"
        },
        "idCode": "CA-IDCode-77765",
        "name": "Visa Inc. USA-Foster City",
        "terminalId": "TID-9999"
    },
    "senderReference": "",
    "acquirerCountryCode": "840",
    "sourceCurrencyCode": "840",
    "senderCity": "Foster City",
    "senderStateCode": "CA",
    "sourceOfFundsCode": "05"
}



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

interface TransactionData {
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