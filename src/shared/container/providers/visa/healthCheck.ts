import generateXPayToken from '../../../utils/generateXPayToken';
import client from './client';

async function healthCheck(data: any): Promise<any> {
    try {
        const xPayToken = generateXPayToken("", 'helloworld');
        const response = await client.get(`vdp/helloworld?apikey=${process.env.API_KEY}`, {
            headers: {
                'x-pay-token': xPayToken,
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error:', error, 'data', error.response.data);
        return false;
    }
}

export default healthCheck;