// @ts-ignore
import * as cybersourceRestApi from 'cybersource-rest-client';
import CreateCreditRequest from '../interfaces/credit.interface';

// Configuration module
const AuthenticationType = 'http_signature';
const RunEnvironment = 'apitest.cybersource.com';
const MerchantId = 'testrest';
const MerchantKeyId = '08c94330-f618-42a3-b09d-e1e43be5efda';
const MerchantSecretKey = 'yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=';
const KeysDirectory = 'Resource';
const KeyFileName = 'testrest';
const KeyAlias = 'testrest';
const KeyPass = 'testrest';
const UseMetaKey = false;
const PortfolioID = '';
const EnableLog = true;
const LogFileName = 'cybs';
const LogDirectory = 'log';
const LogfileMaxSize = '5242880';
const EnableMasking = true;
const PemFileDirectory = 'Resource/NetworkTokenCert.pem';

class Configuration {
    constructor() {
        return {
            'authenticationType': AuthenticationType,
            'runEnvironment': RunEnvironment,
            'merchantID': MerchantId,
            'merchantKeyId': MerchantKeyId,
            'merchantsecretKey': MerchantSecretKey,
            'logConfiguration': {
                'enableLog': EnableLog,
                'logFileName': LogFileName,
                'logDirectory': LogDirectory,
                'logFileMaxSize': LogfileMaxSize,
                'loggingLevel': 'debug',
                'enableMasking': EnableMasking
            }
        };
    }
}

class CreditService {
    static async creditPay(data: CreateCreditRequest): Promise<any> {
        try {
            const configObject = new Configuration();
            const apiClient = new cybersourceRestApi.ApiClient();
            const requestObj = new cybersourceRestApi.CreatePaymentRequest();

            const clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
            clientReferenceInformation.code = data.clientReferenceInformation.code;
            requestObj.clientReferenceInformation = clientReferenceInformation;

            const paymentInformation = new cybersourceRestApi.Ptsv2paymentsidrefundsPaymentInformation();
            const paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsidrefundsPaymentInformationCard();
            paymentInformationCard.number = data.paymentInformation.card.number;
            paymentInformationCard.expirationMonth = data.paymentInformation.card.expirationMonth;
            paymentInformationCard.expirationYear = data.paymentInformation.card.expirationYear;
            paymentInformationCard.type = data.paymentInformation.card.type;
            paymentInformation.card = paymentInformationCard;
            requestObj.paymentInformation = paymentInformation;

            const orderInformation = new cybersourceRestApi.Ptsv2paymentsidrefundsOrderInformation();
            const orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsidcapturesOrderInformationAmountDetails();
            orderInformationAmountDetails.totalAmount = data.orderInformation.amountDetails.totalAmount;
            orderInformationAmountDetails.currency = data.orderInformation.amountDetails.currency;
			orderInformationAmountDetails.originalAmount = data.orderInformation.amountDetails.originalAmount;
			orderInformationAmountDetails.originalCurrency = data.orderInformation.amountDetails.originalCurrency;
            orderInformation.amountDetails = orderInformationAmountDetails;

            const orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsidcapturesOrderInformationBillTo();
            orderInformationBillTo.firstName = data.orderInformation.billTo.firstName;
            orderInformationBillTo.lastName = data.orderInformation.billTo.lastName;
            orderInformationBillTo.address1 = data.orderInformation.billTo.address1;
            orderInformationBillTo.locality = data.orderInformation.billTo.locality;
            orderInformationBillTo.administrativeArea = data.orderInformation.billTo.administrativeArea;
            orderInformationBillTo.postalCode = data.orderInformation.billTo.postalCode;
            orderInformationBillTo.country = data.orderInformation.billTo.country;
            orderInformationBillTo.email = data.orderInformation.billTo.email;
            orderInformationBillTo.phoneNumber = data.orderInformation.billTo.phoneNumber;
            orderInformation.billTo = orderInformationBillTo;

            requestObj.orderInformation = orderInformation;

            const instance = new cybersourceRestApi.PaymentsApi(configObject, apiClient);

            return new Promise((resolve, reject) => {
                instance.createPayment(requestObj, (error: any, data: any, response: any) => {
                    if (error) {
                        console.error('\nError : ' + JSON.stringify(error));
                        return reject(error);
                    }
                    console.log('\nData : ' + JSON.stringify(data));
                    console.log('\nResponse : ' + JSON.stringify(response));
                    console.log('\nResponse Code of Process a Credit : ' + JSON.stringify(response['status']));
                    resolve({ data, response });
                });
            });
        } catch (error: any) {
            console.error('\nException on calling the API : ' + error);
            return error;
        }
    }
}

export { CreditService };



// type
// Type string
// Three-digit value that indicates the card type.

// IMPORTANT It is strongly recommended that you include the card type field in request messages even if it is
// optional for your processor and card type. Omitting the card type can cause the transaction to be processed with the wrong card type.

// Possible values:

// 001: Visa. For card-present transactions on all processors except SIX, the Visa Electron card type is processed the same way that the Visa debit card is processed. Use card type value 001 for Visa Electron.
// 002: Mastercard, Eurocard[^1], which is a European regional brand of Mastercard.
// 003: American Express
// 004: Discover
// 005: Diners Club
// 006: Carte Blanche[^1]
// 007: JCB[^1]
// 014: Enroute[^1]
// 021: JAL[^1]
// 024: Maestro (UK Domestic)[^1]
// 031: Delta[^1]: Use this value only for Ingenico ePayments. For other processors, use 001 for all Visa card types.
// 033: Visa Electron[^1]. Use this value only for Ingenico ePayments and SIX. For other processors, use 001 for all Visa card types.
// 034: Dankort[^1]
// 036: Cartes Bancaires[^1,4]
// 037: Carta Si[^1]
// 039: Encoded account number[^1]
// 040: UATP[^1]
// 042: Maestro (International)[^1]
// 050: Hipercard[^2,3]
// 051: Aura
// 054: Elo[^3]
// 062: China UnionPay