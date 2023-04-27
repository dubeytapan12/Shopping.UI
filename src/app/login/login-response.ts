
export class LoginResponse {
    user: LoginInnerResponse;
    statusCode: number;
  }

  export class LoginInnerResponse {
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
  }