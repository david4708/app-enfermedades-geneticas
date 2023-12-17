import express from 'express';
import userController from './user.controller.js';
import {
  validateExistUser,
  protect,
  protectAccountOwner,
  restrictTo,
} from './user.middleware.js';

export const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

router.use(protect);

router.patch('/change-password', userController.changePassword);

router.get('/', restrictTo('employee'), userController.findAllUsers);

router

  .route('/:id')
  .get(validateExistUser, protectAccountOwner, userController.findUser)
  .patch(validateExistUser, protectAccountOwner, userController.updateUser)
  .delete(validateExistUser, protectAccountOwner, userController.deleteUser);
