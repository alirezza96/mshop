import { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import Table from '@/app/components/templates/admin/invoices/table';
import Breadcrumb from '@/app/components/modules/Breadcrumb';
import { PlusIcon } from '@heroicons/react/24/outline';
import Pagination from '@/app/components/modules/pagination';
import { TableRowSkeleton } from '@/app/components/modules/skeletons';
import TableHeader from "@/app/components/templates/admin/TableHeader"
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
