import express from 'express';
import { router as repairRoute } from '../motorcycleRepair/repairs/repairs.routes.js';
import { router as usersRoute } from '../motorcycleRepair/users/user.routes.js';

export const router = express.Router();

router.use('/users', usersRoute);
router.use('/repairs', repairRoute);
