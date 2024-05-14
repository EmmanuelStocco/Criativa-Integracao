import express, { Router } from 'express';
import { FundsController } from '../modules/funds/controllers/FundsController';

const router: Router = express.Router();

router.post('/', FundsController.createPushFundsTransaction);

export default router;