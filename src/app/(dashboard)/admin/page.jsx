import CardWrapper from '@templates/(admin-p)/admin/cards';
import RevenueChart from '@templates/(admin-p)/admin/revenue-chart';
// import LatestInvoices from '@templates/(admin-p)/admin/latest-invoices';
import { Suspense } from 'react';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@modules/skeletons';
import { banUser } from '@/lib/auth/action';

export default async function Page() {
  const isBan = await banUser()
  return (
    <main>
      <div className="flex gap-2">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
      </div>
    </main>
  );
}