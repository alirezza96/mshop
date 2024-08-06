import { fetchPreOrders } from "@/lib/data"
import PreOrderDetail from "@/components/templates/(website)/cart/page/order-detail"
import { Suspense } from "react"

export const metadata = {
    title: "اطلاعات سفارش"
}
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
