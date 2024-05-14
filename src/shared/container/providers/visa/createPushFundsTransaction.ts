import client from './client';

async function pushFunds(data: any): Promise<any> {
    try {
        const response = await client.post('/visadirect/fundstransfer/v1/pushfundstransactions', data);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            const errorObject = {
                status: error.response.data.responseStatus.status,
                code: error.response.data.responseStatus.code,
                message: error.response.data.responseStatus.message,
                info: error.response.data.responseStatus.info
            }
            return errorObject;
        } else {
            console.error('Erro desconhecido:', error);
            throw new Error('Erro desconhecido');
        }
    }
}

export default pushFunds;
