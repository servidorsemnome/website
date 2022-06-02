export type KratosIdentity = {
  id: string;
  traits: {
    email: string;
    name: {
      first: string;
      last: string;
    };
  };
  state: string;
  created_at: string;
  updated_at: string;
};

export type LoginParams = {
  identifier: string;
  password: string;
  csrf_token?: string;
  method?: string;
};

export type RegistrationParams = {
  traits: {
    email: string;
    nicknames: string[];
    primaryNickname: string;
  };
  password: string;
  csrf_token?: string;
  method?: string;
};
