import Breadcrumb from "@/components/modules/Breadcrumb"
import { fetchCustomers, fetchInvoiceById } from "@/lib/data"

const page = async ({ params }) => {
    const id = params.id
    const breadcrumbs = [
        { label: "داشبورد", href: "/admin" },
        { label: "مشتریان", href: "/admin/customers" },
        { label: "ویرایش", href: `/admin/customers/${id}/edit`, active: true },
    ]
    const [invoice , customers] = await Promise.all(
        [
            fetchInvoiceById(id)
            , fetchCustomers
        ]
    )
    return (
        <main>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            customer id
        </main>
    )
}

export default page