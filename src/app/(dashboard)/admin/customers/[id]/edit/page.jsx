import Breadcrumb from "@modules/Breadcrumb"
import { fetchUsers, fetchInvoiceById } from "@/lib/data"

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
            , fetchUsers
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