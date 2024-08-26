"use client"
import { useUpdateQueryParam } from "@/hooks/useUpdateQueryParam";
import { Input, Submit } from "@modules/form";
import ErrorMessage from "@/components/modules/ErrorMessage";
import { useActionState } from "react";
import { createInvoice } from "@/actions/invoice"
import { formatCurrency } from "@/lib/utils";

const Picker = ({ title, children }) => (
    <div>
        <p className="font-morabba py-1">{title}:</p>
        <div className="flex gap-x-[6px]" role="radiogroup">
            {children}
        </div>
    </div>
);

export default function Form({ colors, sizes, productId }) {
    const totalPrice = 18_000_000
    const addToCart = createInvoice.bind(null, productId)
    const initialState = { message: null, errors: {} }
    const [formState, formAction, pending] = useActionState(addToCart, initialState)
    const { getQueryParam, changeHandler, isPending } = useUpdateQueryParam();
    console.log("getQueryParam =>", getQueryParam(encodeURIComponent("color")))
    return (
        <form action={formAction} className="space-y-[10px]">
            <Picker title="رنگ">
                {colors?.map((item) => (
                    <Input
                        type="radio"
                        key={item.color}
                        name="color"
                        id={item.color}
                        value={item.color}
                        checked={getQueryParam("color") === item.name}
                        onChange={() => changeHandler("color", item.name)}
                        disabled={!item.inventory}
                        className="min-w-14 min-h-2"
                    >
                        {item.name}
                    </Input>
                ))}
            </Picker>
            <ErrorMessage>{formState.errors?.color}</ErrorMessage>

            <Picker title="سایز">
                {sizes?.map((item) => (
                    <Input
                        type="radio"
                        key={item.size}
                        name="size"
                        id={item.size}
                        value={item.size}
                        checked={getQueryParam("size") === item.name}
                        onChange={() => changeHandler("size", item.name)}
                        disabled={!item.inventory}
                        className="min-w-14 min-h-2"
                    >
                        {item.name}
                    </Input>
                ))}
            </Picker>
            <ErrorMessage>{formState.errors?.size}</ErrorMessage>

            <div className="flex justify-between items-center">
                <Submit title="افزودن به سبد خرید" disabled={pending || isPending} />
                <span className="font-bold">{formatCurrency(totalPrice)}</span>
            </div>
            <ErrorMessage>{formState.message}</ErrorMessage>
        </form>
    );
}
