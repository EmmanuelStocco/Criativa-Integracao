import client from './clientHealthCheck';

async function healthCheck(data: any): Promise<any> {
    try {
        const response = await client.get(`/vdp/helloworld?apikey=${process.env.API_KEY}`);
        return response.data;
    } catch (error: any) {
        console.error('Error:', error, 'data', error.response.data);
        return false;
    }
}

export default healthCheck;
