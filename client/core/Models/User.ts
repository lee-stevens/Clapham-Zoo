export interface StaffUser{
  id: number;
  firstName: string;
  lastName: string;
  dateRegistered: Date;
  dateLastLoggedIn: Date;
}

export interface CustomerUser{
  id: number;
  firstName: string;
  lastName: string;
  dateRegistered: Date;
  dateLastLoggedIn: Date;
}

export enum UserPriviledge{
  "Employee",
  "Manager",
  "Admin"
}
