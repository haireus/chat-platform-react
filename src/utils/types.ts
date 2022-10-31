export type ConversationType = {
  id: number;
  name: string;
  lastMessage: string;
};

export type CreateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
