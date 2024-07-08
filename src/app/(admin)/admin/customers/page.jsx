import Breadcrumb from "@/app/components/modules/Breadcrumb"
import CustomersTable from "@/app/components/templates/admin/customers/CustomersTable"
import { fetchCustomers } from "@/app/lib/data"
const breadcrumbs = [
    { label: "داشبورد", href: "/admin" },
    { label: "مشتریان", href: "/admin/customers", active: true },
]
const page = async () => {
    const customers = await fetchCustomers()
    return (
        <main>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <CustomersTable customers={customers} />
        </main>
    )
}

export default page