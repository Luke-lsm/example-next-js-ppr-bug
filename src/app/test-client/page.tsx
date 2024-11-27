import ClientComponent from "@/components/ClientComponent";
import {Suspense} from "react";
import Skeleton from "@/components/Skeleton";

export default function TestPageClientComponent() {
    console.log("I am rendering")
    return (
        <div>
            <h1>Test page, Only a client component to read your search params</h1>
            <p>{Date.now()}</p>
            <Suspense  fallback={<Skeleton/>}>
                <ClientComponent/>
            </Suspense>
        </div>
    )
}