"use client"
import { updateInvoiceQuantity } from "@/lib/actions"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { useOptimistic } from "react"

const Counter = ({ className, disabled, onClick, ...res }) => {
    const { invoiceId, productId, quantity } = res
    const [optimisticQuantity, addOptimisticQuantity] = useOptimistic(
        quantity,
        (sate, amount) => sate + amount
    )

    const updateQuantity = async (amount) => {
        addOptimisticQuantity(amount)
        await updateInvoiceQuantity(invoiceId, productId, amount)
    }
    return (
        <div className={`mx-auto w-24 max-w-64 leading-6 text-center  rounded-lg border border-solid border-Fuchsia text-fu   ${className}`}>
            <div className="flex justify-evenly">
                <button onClick={() => updateQuantity(1)}>
                    <PlusIcon className="w-4 h-4" />
                </button>
                <span className=" bg-Fuchsia/10 min-w-8 px-1 text-center font-bold ">
                    {optimisticQuantity}
                </span>
                <button onClick={() => updateQuantity(-1)}>
                    <MinusIcon className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default Counter