import axios from "axios";
import CryptoJS from "crypto-js";
import dotenv from 'dotenv';

dotenv.config();

const hmac = (secretKey: string, data: string) => {
    return CryptoJS.HmacSHA256(data, secretKey);
};

const generateXPayToken = () => {
    const APIKey = process.env.API_KEY || '';
    const sharedSecret = process.env.SHARED_SECRET || '';
    const URI = "reports/v1/transactiondata";
    const QS = "apikey=" + APIKey;
    const timeStampUTC = Math.floor(Date.now() / 1000).toString();
    const payload = "";
    const HMACDigest = hmac(sharedSecret, timeStampUTC + URI + QS + payload);
    const encodedDigest = CryptoJS.enc.Hex.stringify(HMACDigest);
    return "xv2:" + timeStampUTC + ":" + encodedDigest;
};

const client = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-pay-token': generateXPayToken()
    }
});

export default client;
