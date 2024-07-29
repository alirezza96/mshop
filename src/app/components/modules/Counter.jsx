"use client"
import { formatNumber } from "@/app/lib/utils"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const Counter = ({ className, disabled, onClick, ...res }) => {
    const [count, setCount] = useState(defaultValue)
    const plusHandler = () => {
        setCount(prev => prev + 1)
        onClick({ type: "PLUS" })
    }
    const minusHandler = () => {
        setCount(prev => prev - 1)
        onClick({ type: "MINUS" })
    }
    return (
        <div className={`mx-auto w-24 max-w-64 leading-6 text-center  rounded-lg border border-solid border-Fuchsia text-fu   ${className}`}>
            <div className="flex justify-evenly">
                <button onClick={plusHandler}>
                    <PlusIcon className="w-4 h-4" />
                </button>
                <span className=" bg-Fuchsia/10 min-w-8 px-1 text-center font-bold ">
                    {formatNumber(count)}
                </span>
                <button onClick={minusHandler}>
                    <MinusIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default Counter