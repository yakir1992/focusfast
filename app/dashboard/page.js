import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export default async function Dashboard() {
  try {
    // Test MongoDB connection
    await connectMongo();
    console.log("MongoDB connected successfully");

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return <p>You are not logged in.</p>;
    }

    console.log("Session user:", session.user);

    const user = await User.findById(session.user.id);

    if (!user) {
      console.log("User not found for ID:", session.user.id);
      return <p>User not found.</p>;
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