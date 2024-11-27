import {cookies} from "next/headers";

export default async function User() {
    const session = (await cookies()).get("session")?.value;

    return (
        <div>
            <p>
                User session: {session}
            </p>
        </div>
    )
}