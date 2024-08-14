"use client"
import { useOptimistic } from "react"
import { HeartIcon } from "@heroicons/react/24/outline"
import { isFavoriteAction } from "@/lib/actions"

export default function Favorite({ isFavorite, product_id, user_id }) {
    const [optimisticState, addOptimistic] = useOptimistic(
        isFavorite,
        (currentState, optimisticValue) => {
            console.log("current =>", currentState)
            console.log("optimisticValue =>", optimisticValue)
            return optimisticValue
        }
    )

    const formAction = async (state) => {
        addOptimistic(!state)
        isFavoriteAction(!state, product_id, user_id)

    }
    return (
        <button onClick={() => formAction(optimisticState)}>
            <HeartIcon className={`w-6 h-6 cursor-pointer hover:fill-Fuchsia/40 hover:text-Fuchsia ${optimisticState ? "fill-Purple text-Purple" : ""}`} />
            <p>
               value: {optimisticState ? "true" : "false"}
            </p>
        </button>
    )
}