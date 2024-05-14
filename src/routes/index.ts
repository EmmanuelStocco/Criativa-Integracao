import express from 'express';
import HealthCheckRoutes from './HealthcheckRoutes';
import FundsRoutes from './FundsRoutes';

const router = express.Router();

router.use('/healthcheck', HealthCheckRoutes);
router.use('/funds', FundsRoutes);

export default router;