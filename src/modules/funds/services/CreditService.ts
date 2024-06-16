// @ts-ignore
import * as cybersourceRestApi from 'cybersource-rest-client';
import path from 'path';

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
            'keyAlias': KeyAlias,
            'keyPass': KeyPass,
            'keyFileName': KeyFileName,
            'keysDirectory': KeysDirectory,
            'useMetaKey': UseMetaKey,
            'portfolioID': PortfolioID,
            'pemFileDirectory': PemFileDirectory,
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
    static async creditPay(data: any): Promise<any> {
        try {
            const configObject = new Configuration();
            const apiClient = new cybersourceRestApi.ApiClient();
            const requestObj = new cybersourceRestApi.CreateCreditRequest();

            const clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
            clientReferenceInformation.code = data.clientReferenceInformation?.code || '12345678';
            requestObj.clientReferenceInformation = clientReferenceInformation;

            const paymentInformation = new cybersourceRestApi.Ptsv2paymentsidrefundsPaymentInformation();
            const paymentInformationCard = new cybersourceRestApi.Ptsv2paymentsidrefundsPaymentInformationCard();
            paymentInformationCard.number = data.paymentInformation?.card?.number || '4111111111111111';
            paymentInformationCard.expirationMonth = data.paymentInformation?.card?.expirationMonth || '03';
            paymentInformationCard.expirationYear = data.paymentInformation?.card?.expirationYear || '2031';
            paymentInformationCard.type = data.paymentInformation?.card?.type || '001';
            paymentInformation.card = paymentInformationCard;
            requestObj.paymentInformation = paymentInformation;

            const orderInformation = new cybersourceRestApi.Ptsv2paymentsidrefundsOrderInformation();
            const orderInformationAmountDetails = new cybersourceRestApi.Ptsv2paymentsidcapturesOrderInformationAmountDetails();
            orderInformationAmountDetails.totalAmount = data.orderInformation?.amountDetails?.totalAmount || '200';
            orderInformationAmountDetails.currency = data.orderInformation?.amountDetails?.currency || 'usd';
            orderInformation.amountDetails = orderInformationAmountDetails;

            const orderInformationBillTo = new cybersourceRestApi.Ptsv2paymentsidcapturesOrderInformationBillTo();
            orderInformationBillTo.firstName = data.orderInformation?.billTo?.firstName || 'John';
            orderInformationBillTo.lastName = data.orderInformation?.billTo?.lastName || 'Deo';
            orderInformationBillTo.address1 = data.orderInformation?.billTo?.address1 || '900 Metro Center Blvd';
            orderInformationBillTo.locality = data.orderInformation?.billTo?.locality || 'Foster City';
            orderInformationBillTo.administrativeArea = data.orderInformation?.billTo?.administrativeArea || 'CA';
            orderInformationBillTo.postalCode = data.orderInformation?.billTo?.postalCode || '48104-2201';
            orderInformationBillTo.country = data.orderInformation?.billTo?.country || 'US';
            orderInformationBillTo.email = data.orderInformation?.billTo?.email || 'test@cybs.com';
            orderInformationBillTo.phoneNumber = data.orderInformation?.billTo?.phoneNumber || '9321499232';
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
            return Promise.reject(error);
        }
    }
}

export { CreditService };
