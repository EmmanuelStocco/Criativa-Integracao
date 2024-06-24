import express, { Router } from 'express';
import { FundsController } from '../modules/funds/controllers/FundsController';

const router: Router = express.Router();
//
router.post('/', FundsController.createPushFundsTransaction);
router.post('/credit', FundsController.creditPay);
router.post('/paypal', FundsController.paypal);

export default router;