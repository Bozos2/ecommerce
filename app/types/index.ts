export interface WindowSize {
  width: number;
  height: number;
}

export interface RUser {
  _id?: string;
  email: string;
  fullName: string;
  gender: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}
