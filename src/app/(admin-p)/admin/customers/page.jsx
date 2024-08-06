import Breadcrumb from "@/components/modules/Breadcrumb"
import Pagination from "@/components/modules/pagination"
import Table from "@/components/templates/admin/customers/Table"
import TableHeader from "@/components/templates/admin/TableHeader"
import { fetchCustomers, fetchCustomersPage, fetchFilteredCustomers } from "@/lib/data"
import { Suspense } from "react"
const breadcrumbs = [
    { label: "داشبورد", href: "/admin" },
    { label: "مشتریان", href: "/admin/customers", active: true },
]
const page = async ({ searchParams }) => {
    const { q: query = "", page: currentPage = 1 } = searchParams
    const customers = await fetchFilteredCustomers(query)
    const totalPages = await fetchCustomersPage(query)
    // const customers = await fetchCustomers()
    return (
        <main>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <TableHeader href="./customers/create" title="مشتری" />
            <Suspense fallback="loading...">
                <Table customers={customers} />
            </Suspense>
            <Pagination totalPages={totalPages} />
        </main>
    )
}

export default page