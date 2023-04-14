export interface SignInRequest {
  login: string;
  password: string;
}

export interface SignInResponse {
  login: string;
  isAdmin: boolean;
  token:string;
}