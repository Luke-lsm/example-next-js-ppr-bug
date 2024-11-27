import ClientComponent from "@/components/ClientComponent";
import {Suspense} from "react";

export default function TestPageClientComponent() {
    console.log("I am rendering")
    return (
        <div>
            <h1>Test page, Only a client component to read your search params</h1>
            <p>{Date.now()}</p>
            <Suspense>
                <ClientComponent/>
            </Suspense>
        </div>
    )
}