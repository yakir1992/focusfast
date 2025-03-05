import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import mongoose from "mongoose";

export default async function Dashboard() {
  try {
    // Connect to MongoDB
    await connectMongo();
    console.log("MongoDB connected successfully");

    const session = await getServerSession(authOptions);
    console.log("Raw session:", JSON.stringify(session, null, 2));

    if (!session || !session.user) {
      return <p>You are not logged in.</p>;
    }

    console.log("Session user ID:", session.user.id);

    // Validate user ID
    if (!mongoose.Types.ObjectId.isValid(session.user.id)) {
      console.error("Invalid MongoDB ObjectId:", session.user.id);
      return <p>Invalid user ID format</p>;
    }

    const user = await User.findById(session.user.id);
    console.log("User from database:", user ? JSON.stringify(user, null, 2) : "Not found");

    if (!user) {
      return <p>User not found. ID: {session.user.id}</p>;
    }

    return (
      <>
        <main className="min-h-screen p-8 pb-24">
          <section className="max-w-xl mx-auto space-y-8">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              User Dashboard
            </h1>
            <p>Welcome {user.name} 👋</p>
            <p>Your email is {user.email}</p>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error("Dashboard error:", error);
    return <p>Error: {error.message}</p>;
  }
}