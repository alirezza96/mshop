import { fetchPreOrders } from "@/app/lib/data"
import PreOrderDetail from "@/app/components/templates/(website)/cart/page/order-detail"
import { Suspense } from "react"
export default async function page() {
    const { preOrders } = await fetchPreOrders()


    return (
        <>
            <Suspense fallback="loading...">
                <PreOrderDetail preOrders={preOrders} />
            </Suspense>
        </>
    )
}
