import Form from '@/app/components/templates/admin/invoices/create-form';
import { fetchCustomers } from '@/app/lib/data';
import Breadcrumb from '@/app/components/modules/Breadcrumb';
const breadcrumbs = [
    { label: 'داشبورد', href: '/admin' },
    { label: 'سفارشات', href: '/dashboard/invoices', },
    { label: 'ثبت سفارش', href: '/dashboard/invoices/create', },
]
export default async function Page() {
    const customers = await fetchCustomers();
    return (
        <main>
            <Breadcrumb
                breadcrumbs={breadcrumbs}
            />
            <Form customers={customers} />
        </main>
    );
}