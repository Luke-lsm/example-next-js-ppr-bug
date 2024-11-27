import {cookies} from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    cookieStore.set("session", "User 1");
    return Response.json({message: "You now have a session"});
}