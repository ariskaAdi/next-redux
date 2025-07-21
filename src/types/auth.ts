export type Users = {
  id: number;
  username: string;
  email: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
};

export type LoginResponse = {
  token: string;
};
