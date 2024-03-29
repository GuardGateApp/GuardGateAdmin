export interface IUser {
  id: number;
  username: string;
  roleId: number;
  personId:number;
  names: string;
  surnames: string;
  email: string;
  phone: string;
  role: string;
  residences: IResidenceByUser[];
  status:boolean;
}

export interface IResidenceByUser {
  id: number;
  block: string;
  town: string;
  urbanization: string;
  isMain: boolean;
  num: number;
}

export interface IRegisterUserRequest extends Omit<IUser, 'role'> {
  password: string;
}

export type IUpdateUserRequest = Omit<IUser, 'role'>;
