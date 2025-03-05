import NextAuth from "next-auth";
import { authOptions } from "@/libs/next-auth";

// This is the correct way to export handlers in App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
