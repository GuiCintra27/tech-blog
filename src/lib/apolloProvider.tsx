"use client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider as Provider } from "@apollo/client";
export function ApolloProvider({ children }: { children: React.ReactNode }) {

 const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache({}),
});

  return <Provider client={client}>{children}</Provider>;
}
