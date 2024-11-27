import User from "@/components/User";
import {Suspense} from "react";
import Skeleton from "@/components/Skeleton";

export const experimental_ppr = true

export default function TestPageNoGenerateWithSuspense() {
    console.log("I am rendering")
    return (
        <div>
            <h1>Test page</h1>
            <p>This section should be pre-rendered therefore the date should not change on page refresh {Date.now()}</p>
            <Suspense fallback={<Skeleton/>}>
                <User/>
            </Suspense>
        </div>
    )
}