
export class LoginResponse {
    user: LoginInnerResponse;
  }

  export class LoginInnerResponse {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
  }