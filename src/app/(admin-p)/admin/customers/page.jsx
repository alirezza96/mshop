import Breadcrumb from "@modules/Breadcrumb"
import Pagination from "@modules/pagination"
import Table from "@templates/admin/customers/Table"
import TableHeader from "@templates/admin/TableHeader"
import { fetchCustomers, fetchCustomersPage, fetchFilteredCustomers } from "@/lib/data"
import { Suspense } from "react"
const breadcrumbs = [
    { label: "داشبورد", href: "/admin" },
    { label: "مشتریان", href: "/admin/customers", active: true },
]
const page = async ({ searchParams }) => {
    const { q: query = "", page: currentPage = 1 } = searchParams
    const customers = await fetchFilteredCustomers(query)
    // const totalPages = await fetchCustomersPage(query)
    return 1
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