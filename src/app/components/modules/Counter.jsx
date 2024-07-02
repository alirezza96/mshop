"use client"
import { formatNumber } from "@/app/lib/utils"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Counter = ({ className, disabled }) => {
    const [count, setCount] = useState(0)
    const handelCount = () => {
        console.log("count =>", count)
    }
    return (
        <div className={`w-36 max-w-64 leading-8 text-center  rounded-lg border border-solid border-Fuchsia text-fu   ${className}`}>
            {!count ? (
                <button
                    disabled={disabled}
                    className="button block w-full font-morabba disabled:cursor-not-allowed" onClick={() => setCount(prev => prev + 1)}>
                    افزودن به سبد خرید
                </button>
            )
                :
                (<div className="flex justify-evenly">
                    <button onClick={() => setCount(prev => prev + 1)}>
                        <PlusIcon className="w-4 h-4" />
                    </button>
                    <span className=" bg-Fuchsia/10 min-w-8 px-1 text-center font-bold ">
                        {formatNumber(count)}
                    </span>
                    <button onClick={() => setCount(prev => prev - 1)}>
                        <MinusIcon className="w-4 h-4" />
                    </button>
                </div>)}
        </div>
    )
}

export default Counter