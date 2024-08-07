import { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/lib/data';
import Table from '@templates/admin/invoices/table';
import Breadcrumb from '@modules/Breadcrumb';
import { PlusIcon } from '@heroicons/react/24/outline';
import Pagination from '@modules/pagination';
import { TableRowSkeleton } from '@modules/skeletons';
import TableHeader from "@templates/admin/TableHeader"
export const metadata: Metadata = {
    title: 'سفارشات',
};

const breadcrumbs = [
    { label: "داشبورد", href: "/admin" },
    { label: "سفارشات", href: "/admin/invoices", active: true },
]
export default async function Page({
    searchParams,
}: {
    searchParams?: {
        q?: string;
        page?: string;
    };
}) {
    const query = searchParams?.q || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);
    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <TableHeader href="./invoices/create" title="سفارش" />
            <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <Pagination totalPages={totalPages} />
        </>
    );
}
