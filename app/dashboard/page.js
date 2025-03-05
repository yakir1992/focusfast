import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import mongoose from "mongoose";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default async function Dashboard() {
  try {
    // Connect to MongoDB
    await connectMongo();

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
            <p className="text-gray-300 mb-6">You must be signed in to view this page.</p>
            <a href="/" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
              Back to Home
            </a>
          </div>
        </div>
      );
    }

    // Validate user ID
    if (!mongoose.Types.ObjectId.isValid(session.user.id)) {
      console.error("Invalid MongoDB ObjectId:", session.user.id);
      return <p>Invalid user ID format</p>;
    }

    const user = await User.findById(session.user.id);

    if (!user) {
      return <p>User not found. ID: {session.user.id}</p>;
    }

    // Pass user data to the client component
    return <DashboardClient user={JSON.parse(JSON.stringify(user))} />;

  } catch (error) {
    console.error("Dashboard error:", error);
    return <p>Error: {error.message}</p>;
  }
}