import { api } from "../api/api";

type SignInParams = {
  email: string;
  password: string;
};

export async function signIn({ email, password }: SignInParams) {
  try {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    return response;
  } catch (error) {
    throw error;
  }
}
