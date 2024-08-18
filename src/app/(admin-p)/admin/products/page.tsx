import Breadcrumb from '@modules/Breadcrumb';
import TableHeader from '@templates/admin/TableHeader';
import Table from "@templates/admin/products/Table"
import { Metadata } from 'next';
import { Suspense } from 'react';
import Pagination from '@modules/pagination';
import { fetchProductsPages } from '@/lib/data';

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
  const { page: currentPage = 1, q = "" } = searchParams
  const totalPages = await fetchProductsPages(q)
  return (
    <main>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <TableHeader href="./products/create" title="محصول" />
      <Suspense fallback="loading....">
        <Table query={q} currentPage={+currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  );
}