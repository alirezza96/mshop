import Form from "@/app/components/templates/admin/products/create-form"
import { fetchCategories, fetchCustomers } from '@/app/lib/data';
import Breadcrumb from '@/app/components/modules/Breadcrumb';
const breadcrumbs = [
  { label: 'داشبورد', href: '/admin' },
  { label: 'محصولات', href: '.' },
  {
    label: 'معرفی محصول',
    href: '',
    active: true,
  },
]
export default async function page() {
  const categories = await fetchCategories();
  return (
    <main>
      <Breadcrumb breadcrumbs={breadcrumbs}/>
      <Form categories={categories} />
    </main>
  );
}