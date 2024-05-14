import express, { Router } from 'express';
import { HealthCheckController } from '../modules/healthcheck/controllers/HealthcheckController';

const router: Router = express.Router();

router.get('/', HealthCheckController.healtCheck);

export default router;