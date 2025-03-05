import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import connectMongo from "./mongoose";
import NextAuth from "next-auth";

export const authOptions = {
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // Temporarily comment out the adapter to test basic authentication
  // adapter: MongoDBAdapter(connectMongo(), {
  //   databaseName: "focusfast",
  // }),
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        // When using JWT strategy, user comes from token
        // When using database strategy, user comes from the adapter
        session.user.id = token?.sub || user?.id;
      }
      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },
  // Change to JWT strategy temporarily to bypass database issues
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
};

export default NextAuth(authOptions);
