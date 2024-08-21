import { Submit } from "@/components/modules/form"
import { fetchProductById } from "@/lib/data"
import { Id, EnglishName, Name, Colors, Sizes, Inventory } from "@templates/(admin-p)/products/Form"
import { updateProduct } from "@/lib/actions"
export default async function page({ params }) {
    const { id: productId } = params
    const product = await fetchProductById(productId)
    console.log("product =>", product)
    return (
        <form action={updateProduct} className="min-w-96">
            <Id defaultValue={product.id} readOnly />
            <Name defaultValue={product.name} />
            <EnglishName defaultValue={product.english_name} />
            <Colors
                defaultValueId={product.color_id}
                defaultValueName={product.color_name}
            />
            <Sizes
                defaultValueId={product.size_id}
                defaultValueName={product.size_name}
            />
            <Inventory defaultValue={product.inventory} />
            <Submit />
        </form >
    )
}