export type IdentityTraits = {
  email: string;
  nicknames: string[];
  primaryNickname: string;
}

export type KratosIdentity = {
  id: string;
  traits: IdentityTraits;
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
  traits: IdentityTraits;
  password: string;
  csrf_token?: string;
  method?: string;
};
