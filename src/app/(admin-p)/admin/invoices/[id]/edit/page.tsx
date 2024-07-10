import Form from '@/app/components/templates/admin/invoices/edit-form';
import Breadcrumb from '@/app/components/modules/Breadcrumb';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
export const metadata: Metadata = {
    title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);
    console.log("invoice =>", invoice)
    if (!invoice) {
        notFound();
      }
    const breadcrumbs = [
        { label: 'داشبورد', href: '/admin' },
        { label: 'سفارشات', href: '/admin/invoices' },
        {
            label: 'ویرایش سفارش',
            href: `/admin/invoices/${id}/edit`,
            active: true,
        },
    ]

    //   if (!invoice) {
    //     notFound();
    //   }

    return (
        <main>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}
