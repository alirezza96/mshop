import Form from '@/app/components/templates/admin/invoices/edit-form';
import Breadcrumb from '@/app/components/modules/Breadcrumb';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';


export const generateMetadata = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return {
        title: `ویرایش سفارش | ${id}`
    }
}



export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);
    if (!invoice) {
        return notFound();
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
    return (
        <main>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Form invoice={invoice} customers={customers} />
        </main>
    );
}
