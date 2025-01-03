export interface IUser {
    id: string;
    name: string;
}


export interface SignInResponse {
    email: string;
    name:string;
    token: string;
}

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
  }