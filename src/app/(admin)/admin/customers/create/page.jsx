import FormN from '@/app/ui/invoices/FormN';
import BreadcrumbsN from '@/app/ui/invoices/BreadcrumbsN';
import Breadcrumbs from '@/app/components/modules/Breadcrumb';
import { fetchCategories, fetchCustomers } from '@/app/lib/data';
export default async function Page() {
    const categories = await fetchCategories();
    const customers = await fetchCustomers()
    const breadcrumbs = [
        { label: "داشبورد", href: "/admin" },
        { label: "مشتریان", href: "admin/customers" },
        { label: "ایجاد مشتری", href: "admin/customers#createAccount", active:true },

    ]
    return (
        <main>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <FormN categories={categories} />
        </main>
    );
}