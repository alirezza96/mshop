import { Input } from "@modules/form"
import { fetchProductSizesById } from "@/lib/data"

export default async function Sizes({ productId }) {
    const sizes = await fetchProductSizesById(productId)
    return (

        <div className=" flex gap-x-1 ">
            {
                sizes?.map(item => (
                    <Input
                        key={item.size}
                        type="radio"
                        name="s"
                        className="min-w-8"
                    >
                        {item.size}
                    </Input>
                ))
            }
        </div>
    )
}