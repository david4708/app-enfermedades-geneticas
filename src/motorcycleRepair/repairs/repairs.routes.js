//conf archivo ruta

import express from 'express';

import repairController from './repairs.controller.js';
import { validateExistRepair } from './repair.middleware.js';
import { protect, restrictTo } from '../users/user.middleware.js';

export const router = express.Router();
router.use(protect);
router.route('/').get(restrictTo('employee'), repairController.findAllRepair);
router.route('/').post(restrictTo('employee'), repairController.createRepair);

router
  .route('/:id')
  .get(
    restrictTo('employee'),
    validateExistRepair,
    repairController.findRepair
  );
router
  .route('/:id')
  .patch(
    restrictTo('employee'),
    validateExistRepair,
    repairController.updateRepair
  );
router
  .route('/:id')
  .delete(
    restrictTo('employee'),
    validateExistRepair,
    repairController.deleteRepair
  );
