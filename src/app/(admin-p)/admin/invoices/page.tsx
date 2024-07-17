// import Search from '@/app/ui/search';
import Table from '@/app/components/templates/admin/invoices/table';
// import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import Search from '@/app/components/modules/Search';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import Breadcrumb from '@/app/components/modules/Breadcrumb';
import { Button } from '@/app/components/modules/form';
import { PlusIcon } from '@heroicons/react/24/outline';
import Pagination from '@/app/components/modules/pagination';
import { TableRowSkeleton } from '@/app/components/modules/skeletons';
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
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);
    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Button className="p-2" href="invoices/create">
                    ثبت سفارش
                    <PlusIcon className='w-4 h-4 inline' />
                </Button>
                <Search placeholder="Search invoices..." />
            </div>
            <Suspense key={query + currentPage} fallback={<TableRowSkeleton/>}>
                <Table query={query} currentPage={currentPage} />
            </Suspense>
            <Pagination totalPages={totalPages} />
        </>
    );
}
