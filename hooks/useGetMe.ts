import { AUTH_TOKEN } from "@/constants/authToken";
import { gql, useQuery } from "@apollo/client";

const GET_ME = gql`
  query {
    myProfile {
      id
      name
      avatar
    }
  }
`;

const useGetMe = () => {
  let access;
  if (typeof window !== "undefined") {
    access = localStorage.getItem(AUTH_TOKEN);
  }
  return useQuery(GET_ME, {
    context: { headers: { authorization: access ? `Bearer ${access}` : "" } },
  });
};

export default useGetMe;

// folder service all logins and data users authjs
// to login form call fuction on submit
