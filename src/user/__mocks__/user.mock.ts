import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '123456789',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 43242,
  name: 'nameMock',
  password: '$2b$10$S62WmVpIxL52Z.0y22DWfuaAz8.XUNESChWP.AlMFZnOJ9n9uiqi.',
  phone: '40028922',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
