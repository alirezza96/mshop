import Breadcrumb from '@/app/components/modules/Breadcrumb';
import DashboardHeader from '@/app/components/templates/admin/DashboardHeader';
import Table from "@/app/components/templates/admin/products/Table"
import { Metadata } from 'next';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';
import Pagination from '@/app/components/modules/pagination';
import { fetchProductsPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: "محصولات"
}
const breadcrumbs = [
  { label: 'داشبورد', href: '.' },
  { label: 'محصولات', href: '', active: true },

]
export default async function Page({ searchParams }: {
  searchParams?: {
    page?: string,
    q?: string
  }
}) {
  const { page: currentPage = 1 , q = "" } = searchParams
  const totalPages = await fetchProductsPages(q)
  return (
    <main>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <DashboardHeader href="./products/create" placeholder="جستجو محصول">
        معرفی محصول
        <PlusIcon className='w-4 h-4 inline' />
      </DashboardHeader>
      <Suspense fallback="loading....">
        <Table query={q} currentPage={+currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  );
}