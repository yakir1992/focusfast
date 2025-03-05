import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export default async function TestDBPage() {
    try {
        await connectMongo();
        console.log("MongoDB connected successfully");

        // Try to get all users (limit to 5)
        const users = await User.find().limit(5);

        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Database Test Page</h1>
                <p className="mb-4">MongoDB connected successfully</p>
                <h2 className="text-xl font-semibold mb-2">Users in Database: {users.length}</h2>
                <pre className="bg-gray-100 p-4 rounded">
                    {JSON.stringify(users, null, 2)}
                </pre>
            </div>
        );
    } catch (error) {
        console.error("Database test error:", error);
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Database Test Error</h1>
                <p className="text-red-500">{error.message}</p>
                <p className="mt-2">Stack trace:</p>
                <pre className="bg-gray-100 p-4 rounded mt-2">
                    {error.stack}
                </pre>
            </div>
        );
    }
} 