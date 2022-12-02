export interface RegisterPayloadProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayloadProps {
  name?: string;
  email: string;
  password: string;
}
