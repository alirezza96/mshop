"use client"
import { HeartIcon } from "@heroicons/react/24/outline"
import { isFavoriteAction } from "@/lib/actions"
import { useOptimistic, useEffect } from "react"

export default function Favorite({ isFavorite, productId, userId }) {
    const [optimisticFavorite, setOptimisticFavorite] = useOptimistic(
        isFavorite,
        (state, isFavorite) => isFavorite // تعریف تابع برای تعیین وضعیت جدید
    )

    useEffect(() => {
        if (optimisticFavorite !== isFavorite) {
            (async () => {
                try {
                    await isFavoriteAction(optimisticFavorite, productId, userId)
                } catch (error) {
                    setOptimisticFavorite(isFavorite) // بازگشت به حالت اولیه در صورت خطا
                    console.error("Failed to update favorite status:", error)
                }
            })();
        }
    }, [optimisticFavorite])

    const changeHandler = () => {
        setOptimisticFavorite(!optimisticFavorite) // تغییر فوری وضعیت خوش‌بینانه
    }

    return (
        <button onClick={changeHandler}>
            <HeartIcon className={`w-6 h-6 cursor-pointer ${optimisticFavorite ? "fill-Fuchsia text-Fuchsia" : ""}`} />
            <p>
                {optimisticFavorite ? "true" : "false"}
            </p>
        </button>
    )
}
