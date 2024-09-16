import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;
export const useLogin = () => {
  return useMutation(LOGIN_MUTATION);
};
