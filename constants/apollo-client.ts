import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import authenticatedVar from "@/constants/authenticated"
import { API_URL } from "./urls"

const backLink = new HttpLink({
    uri: `${API_URL}`,
    credentials: "same-origin",
});

const logoutLink = onError(({ graphQLErrors }) => {
    if (
        graphQLErrors?.length &&
        (graphQLErrors[0].extensions?.response as any)?.statusCode === 401
    ) {
        authenticatedVar(false);
    }
});
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: logoutLink.concat(backLink),
});

export default client;