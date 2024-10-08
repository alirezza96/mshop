import Breadcrumbs from '@modules/Breadcrumb';
import { fetchCategories, fetchUsers } from '@/lib/data';
import Form from "@templates/admin/customers/create-form"
export default async function Page() {
    const categories = await fetchCategories();
    const customers = await fetchUsers()
    const breadcrumbs = [
        { label: "داشبورد", href: "/admin" },
        { label: "مشتریان", href: "admin/customers" },
        { label: "ایجاد مشتری", href: "admin/customers/create", active:true },

    ]
    return (
        <main>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Form/>
        </main>
    );
}