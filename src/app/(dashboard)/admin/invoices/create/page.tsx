import Form from '@templates/admin/invoices/create-form';
import Breadcrumb from '@modules/Breadcrumb';
const breadcrumbs = [
    { label: 'داشبورد', href: '/admin' },
    { label: 'سفارشات', href: '/admin/invoices', },
    { label: 'ثبت سفارش', href: '/admin/invoices/create', },
]
export default async function Page() {
    return (
        <main>
            <Breadcrumb
                breadcrumbs={breadcrumbs}
            />
            <Form />
        </main>
    );
}