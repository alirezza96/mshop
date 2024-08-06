import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { fetchCardData } from '@/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="فروش" value={totalPaidInvoices} type="collected" />
      <Card title="در حال پرداخت" value={totalPendingInvoices} type="pending" />
      <Card title="تعداد سفارشات" value={numberOfInvoices} type="invoices" />
      <Card
        title="تعداد مشتریان"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className=" rounded-xl box p-2 space-y-2 min-w-32">
      <div className="flex items-center  gap-2">
        {Icon ? <Icon className="h-5 w-5" /> : null}
        <h3 className='font-morabba text-sm'>{title}</h3>
      </div>
      <p
        className={`
             rounded-xl  p-2 text-center  bg-Fuchsia/10`}
      >
        {value}
      </p>
    </div>
  );
}