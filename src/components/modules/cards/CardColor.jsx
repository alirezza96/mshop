import { Input } from "@modules/form"
import { fetchProductColorsById } from "@/lib/data"

export default async function Colors({ productId }) {
    const colors = await fetchProductColorsById(productId)

    return (
        <div className="flex gap-x-1">
            {
                colors?.map(item => (
                    <Input
                        type="radio"
                        key={item.color}
                        name="c"
                        color={`#${item.color}`}
                        className="w-3 h-3"
                    />
                ))
            }
        </div>
    )
}