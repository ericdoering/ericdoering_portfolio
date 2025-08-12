"use client"

import Game from "@/components/game";
import React from "react";

export default function ExtrasPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-gray-200">
                <h1 className="mt-2 mb-4 font-bold text-3xl">Extras</h1>
            </div>
            <Game />
        </>
    )
}
