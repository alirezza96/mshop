"use client"
import { useOptimistic } from "react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { isFavoriteAction } from "@/lib/actions"

export default function Favorite({ isFavorite, product_id, user_id }) {
    const [optimisticState, addOptimistic] = useOptimistic(
        isFavorite,
        (currentState, optimisticValue) => !currentState
    )
    const formAction = () => {
        addOptimistic(false)
        isFavoriteAction(!optimisticState, product_id, user_id)

    }

    console.log("optimisticState =>", optimisticState)
    return (
        <button onClick={formAction}>
            <HeartIcon className={`w-6 h-6 cursor-pointer hover:fill-Fuchsia/40 hover:text-Fuchsia ${optimisticState ? "fill-Purple text-Purple" : ""}`} />
            <p>
                value: {optimisticState ? "true" : "false"}
            </p>
        </button>
    )
}