import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: `${process.env.GOOGLE_ID}`,
            clientSecret: `${process.env.GOOGLE_SECRET}`,
          }),
      // ...add more providers here
    ],
    secret: process.env.NEXTAUTH_SECRET,
  })