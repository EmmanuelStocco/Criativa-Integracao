class HealthCheckService {
    static async check(): Promise<Object> {
        return {
            check: true
        };
    }
}

export { HealthCheckService };