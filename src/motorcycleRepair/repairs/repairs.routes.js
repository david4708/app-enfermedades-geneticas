//conf archivo ruta

import express from 'express';

import repairController from './repairs.controller.js';
import { validateExistRepair } from './repair.middleware.js';

export const router = express.Router();

router.route('/').get(repairController.findAllRepair);
router.route('/').post(repairController.createRepair);

router.route('/:id').get(validateExistRepair, repairController.findRepair);
router.route('/:id').patch(repairController.updateRepair);
router.route('/:id').delete(repairController.deleteRepair);
