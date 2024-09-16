import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../constants/apollo-client";
import Guard from "@/components/Guard";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={client}>
        <Guard excludedRoutes={["/login"]}>
          <Component {...pageProps} />
        </Guard>
      </ApolloProvider>
  );
}

export default MyApp;
