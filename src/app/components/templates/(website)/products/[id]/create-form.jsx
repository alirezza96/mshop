"use client"
import { createOrder } from "@/app/lib/actions"
import { formatCurrency } from "@/app/lib/utils"
import { useActionState } from "react"
import { InputRadio } from "@/app/components/modules/form"
export default function Form({ colors, sizes, id }) {

    const totalPrice = 1_180_000
    const initialState = { errors: {}, message: null }
    const add2CartWithId = createOrder.bind(null, id)
    const [errorsMessage, formAction, pending] = useActionState(add2CartWithId, initialState)
    // console.log("errorsMessage =>", errorsMessage)
    return (
        <form
            action={formAction}
        >

            <div className="space-y-[10px]">
                <div className="flex items-center justify-between">
                    <span>
                        رنگ بندی:
                    </span>
                    <div className="flex gap-x-[6px]">
                        {
                            colors?.map((item) => (
                                <InputRadio key={item} name="color" id={item} value={item} color={item} className="w-6 h-6" />
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        errorsMessage &&
                        errorsMessage.errors.color?.map((error) => (
                            <p
                                key={error}
                                className="mt-2 text-sm text-pink bg-pink/5">
                                {error}
                            </p>
                        ))
                    }
                </div>
                <div className="flex items-center justify-between">
                    <span>
                        سایز بندی:
                    </span>
                    <div className="flex gap-x-[6px]">
                        {
                            sizes?.map((item) => (
                                <InputRadio key={item} name="size" id={item} value={item} label={item} className={"border border-solid border-gray min-w-6"} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        errorsMessage &&
                        errorsMessage.errors.size?.map((error) => (
                            <p
                                key={error}
                                className="mt-2 text-sm text-pink bg-pink/5">
                                {error}
                            </p>
                        ))
                    }
                </div>
                <div className="border-t border-dashed ">
                    <div>
                        {
                            errorsMessage &&
                            <p className="mt-2 text-sm text-pink bg-pink/5">
                                {errorsMessage.message}
                            </p>
                        }
                    </div>
                    <div className="flex justify-between items-center ">
                        <button
                            type="submit"
                            disabled={pending}
                            className={`${pending && "animate-pulse cursor-not-allowed"} bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24 cursor-pointer font-morabba`}>
                            افزودن به سبد خرید
                        </button>
                        <span className="font-bold">
                            {formatCurrency(totalPrice)}
                        </span>
                    </div>
                </div>
            </div>

        </form>
    )
}


