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
            const requestObj = new cybersourceRestApi.CreateCreditRequest();

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

            const instance = new cybersourceRestApi.CreditApi(configObject, apiClient);

            return new Promise((resolve, reject) => {
                instance.createCredit(requestObj, (error: any, data: any, response: any) => {
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
