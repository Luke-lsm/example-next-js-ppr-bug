"use client";

import {useSearchParams} from "next/navigation";

export default function ClientComponent() {
    const searchParams = useSearchParams();

    return (
        <div>
            {searchParams.toString()}
        </div>
    )
}