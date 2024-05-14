import express from 'express';
import HealthCheckRoutes from './HealthcheckRoutes';

const router = express.Router();

router.use('/healthcheck', HealthCheckRoutes);

export default router;