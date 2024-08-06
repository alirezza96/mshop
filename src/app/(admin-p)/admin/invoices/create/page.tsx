import Form from '@/components/templates/admin/invoices/create-form';
import { fetchCustomers } from '@/lib/data';
import Breadcrumb from '@/components/modules/Breadcrumb';
const breadcrumbs = [
    { label: 'داشبورد', href: '/admin' },
    { label: 'سفارشات', href: '/admin/invoices', },
    { label: 'ثبت سفارش', href: '/admin/invoices/create', },
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