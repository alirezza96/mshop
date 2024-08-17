"use client"
import { createInvoice } from "@/lib/actions"
import { formatCurrency } from "@/lib/utils"
import { useActionState, useOptimistic } from "react"
import { InputRadio, Button } from "@modules/form"
// import { useSearchParams } from "next/navigation"
export default function Form({ colors, sizes, id }) {

    const totalPrice = 1_180_000
    const initialState = { errors: {}, message: null }
    // const add2CartWithId = createInvoice.bind(null, id)


    // const [errorsMessage, formAction, pending] = useActionState(add2CartWithId, initialState)
    return (
        <div
            // action={formAction}
            className="space-y-[10px]"
        >

            {/* {
                errorsMessage.errors.color?.map(error => <ErrorMessage key={error} error={error} />)
            } */}
            <div>
                <Picker
                    title="رنگ"
                >
                    {
                        colors?.map((item) => (
                            <button
                                key={item.color}
                                name="color"
                                type="button"
                                role="radio"
                                disabled={!item.inventory}
                                className="min-w-14 min-h-2 px-4 py-1"
                            >
                                {item.name}
                            </button>
                        ))

                    }
                </Picker>
                <Picker title="سایز">
                    {
                        sizes?.map((item) => (
                            <InputRadio
                                key={item.size}
                                name="size"
                                type="button"
                                role="radio"
                                disabled={!item.inventory}
                                className="min-w-14 min-h-2 px-4 py-1"

                            >
                                {item.size}
                            </InputRadio>
                        ))
                    }
                </Picker>
            </div>
            <div>
                {/* {
                    errorsMessage.errors.size?.map(error => <ErrorMessage key={error} error={error} />)
                } */}
            </div>
            <div className="flex justify-between items-center ">
                <Button
                    type="submit"
                // disabled={pending}
                // className={`${pending && "animate-pulse cursor-not-allowed"} `}
                >
                    افزودن به سبد خرید
                </Button>
                <span className="font-bold">
                    {formatCurrency(totalPrice)}
                </span>
            </div>
        </div>
    )
}




const Picker = ({ title, children }) => {
    return (
        <div>
            <p className="font-morabba py-1">
                {title}:
            </p>
            <div className="flex gap-x-[6px]" role="radiogroup">
                {children}
            </div>
        </div>
    )
}