import healthCheck from "../../../shared/container/providers/visa/healthCheck";

class HealthCheckService {
    static async check(): Promise<Object> {
        try {
            const response = await healthCheck({});
            return response;
        } catch (error) {
            return false;
        }
    }
}

export { HealthCheckService };