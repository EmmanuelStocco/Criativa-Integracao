import CryptoJS from "crypto-js";
import dotenv from 'dotenv';

dotenv.config();

const hmac = (secretKey: string, data: string) => {
	return CryptoJS.HmacSHA256(data, secretKey);
};

const generateXPayToken = (body: any) => {
	const APIKey = process.env.API_KEY || '';
	const sharedSecret = process.env.SHARED_SECRET || '';
	const URI = "fundstransfer/v1/pushfundstransactions";
	const QS = "apikey=" + APIKey;
	const timeStampUTC = Math.floor(Date.now() / 1000).toString();
	const payload = JSON.stringify(body);

	const HMACDigest = hmac(sharedSecret, timeStampUTC + URI + QS + payload);
	const encodedDigest = CryptoJS.enc.Hex.stringify(HMACDigest);
	return "xv2:" + timeStampUTC + ":" + encodedDigest;
};

export default generateXPayToken;