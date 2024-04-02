import { UpdatePasswordDTO } from '../dtos/update-password.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: 'abc',
  newPassword: 'djaks',
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
  lastPassword: 'jdkalsa',
  newPassword: 'dkjaçsld',
};
