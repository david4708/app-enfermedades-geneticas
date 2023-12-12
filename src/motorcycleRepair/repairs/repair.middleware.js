import { AppError } from '../../common/errors/appError.js';
import { catchAsync } from '../../common/errors/catchAsync.js';
import RepairServices from './repair.services.js';

export const validateExistRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await RepairServices.findOneService(id);

  if (!repair) {
    return next(new AppError(`Repair with id: ${id} not found`, 404));
  }

  req.repair = repair;
  next();
});
