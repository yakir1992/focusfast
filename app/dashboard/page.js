import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export default async function Dashboard() {
  await connectMongo();
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return <p>You are not logged in.</p>;
  }

  const user = await User.findById(session.user.id);

  if (!user) {
    return <p>User not found.</p>;
  }

  console.log("Session:", session);
  console.log("User ID:", session?.user?.id);

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
}