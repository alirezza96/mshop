"use client"
import { Input } from "@/app/components/modules/form"
import { createOrder } from "@/app/lib/actions"
import { formatCurrency } from "@/app/lib/utils"
import { useActionState } from "react"
import { InputRadio } from "@/app/components/modules/form"
export default function Form({ colors, sizes, id }) {
    const totalPrice = 1_180_000
    const initialState = { errors: {}, message: null }
    const add2CartWithId = createOrder.bind(null, id)
    const [state, formAction] = useActionState(add2CartWithId, initialState)
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
                                <InputRadio key={item} name="color" value={item} color={item} className="w-6 h-6" />
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        state.errors?.color &&
                        state.errors?.color.map((error) => (
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
                                <InputRadio key={item} name="size" value={item} label={item} className={"border border-solid border-gray min-w-6"} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        state.errors?.size &&
                        state.errors?.size.map((error) => (
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
                            state?.message &&
                            <p className="mt-2 text-sm text-pink bg-pink/5">
                                {state.message}
                            </p>
                        }
                    </div>
                    <div className="flex justify-between items-center ">
                        {/* <Counter/> */}
                        <Input type="submit" value="افزودن به سبد خرید" />
                        <span className="font-bold">
                            {formatCurrency(totalPrice)}
                        </span>
                    </div>
                </div>
            </div>

        </form>
    )
}


