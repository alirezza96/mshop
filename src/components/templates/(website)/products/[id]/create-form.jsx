"use client"
import { createInvoice } from "@/lib/actions"
import { formatCurrency } from "@/lib/utils"
import { useActionState, useOptimistic } from "react"
import { InputRadio, Button } from "@/components/modules/form"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import ErrorMessage from "@/components/modules/ErrorMessage"
// import { useSearchParams } from "next/navigation"
export default function Form({ colors, sizes, id }) {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const { push } = useRouter()
    const changeHandler = (key, value) => {
        if (value) {
            params.set(key, value)
        } else {
            params.delete(key)
        }
        push(`${pathname}/?${params.toString()}`)
        console.log("changeHandler fired =>", key, value)


    }


    const totalPrice = 1_180_000
    const initialState = { errors: {}, message: null }
    const add2CartWithId = createInvoice.bind(null, id)


    const [errorsMessage, formAction, pending] = useActionState(add2CartWithId, initialState)
    return (
        <div
            // action={formAction}
            className="space-y-[10px]"
        >
            <div>
                <p className="font-morabba py-1">
                    رنگ:
                </p>
                <div className="flex gap-x-[6px]" role="radiogroup">
                    {
                        colors?.map((item) => (
                            <InputRadio
                                key={item.color}
                                name="color"
                                type="button"
                                role="radio"
                                onClick={() => changeHandler(item.color)}
                                disabled={!item.inventory}
                            >
                                {item.name}
                            </InputRadio>
                        ))

                    }
                </div>
            </div>
            {
                errorsMessage.errors.color?.map(error => <ErrorMessage key={error} error={error} />)
            }
            <div>
                <p className="font-morabba py-1">
                    سایز:
                </p>
                <div className="flex gap-x-[6px]">
                    {
                        sizes?.map((item) => (
                            <InputRadio
                                key={item.size}
                                name="size"
                                type="button"
                                onClick={() => changeHandler("size", item.size)}
                                disabled={!item.inventory}
                            >
                                {item.size}
                            </InputRadio>
                        ))
                    }
                </div>
            </div>
            <div>
                {
                    errorsMessage.errors.size?.map(error => <ErrorMessage key={error} error={error} />)
                }
            </div>
            <div className="flex justify-between items-center ">
                <Button
                    type="submit"
                    disabled={pending}
                    className={`${pending && "animate-pulse cursor-not-allowed"} `}>
                    افزودن به سبد خرید
                </Button>
                <span className="font-bold">
                    {formatCurrency(totalPrice)}
                </span>
            </div>
        </div>
    )
}


