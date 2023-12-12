//definicion funciones
//controller

import { catchAsync } from '../../common/errors/catchAsync.js';
import { validatePartialRepair, validateRepair } from './repair.schema.js';
import repairService from './repair.services.js';

const createRepair = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, repairData } = validateRepair(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const repair = await repairService.createService(repairData);

  return res.status(200).json({
    status: 'success',
    repair,
  });
});

const findAllRepair = catchAsync(async (req, res) => {
  const repairs = await repairService.findAllService();

  return res.status(200).json({
    status: 'success',
    repairs,
  });
});

const findRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  return res.status(200).json({
    status: 'success',
    repair,
  });
});

const updateRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const { hasError, errorMessages } = validatePartialRepair(req.body);

  const repairs = await repairService.findOneService(id);

  if (!repairs) {
    return res.status(404).json({
      status: 'error',
      message: `user with id: ${id} cannot be updated`,
    });
  }

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const repairUpdated = await repairService.updateService(repairs);
  return res.status(200).json({
    status: 'success',
    message: `updated id: ${id} `,
    repairUpdated,
  });
});

const deleteRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const repair = await repairService.findOneService(id, [
    'pending',
    'completed',
  ]);
  if (repair?.status === 'completed') {
    return res.status(404).json({
      status: 'error',
      message: `user with id: ${id} already is completed`,
    });
  }
  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `user with id: ${id} not found`,
    });
  }
  const deleteService = await repairService.deleteService(repair);

  return res.status(200).json({
    status: 'success',
    message: `repair id: ${id} canceled`,
    deleteService,
  });
});

export default {
  createRepair,
  findAllRepair,
  findRepair,
  updateRepair,
  deleteRepair,
};
