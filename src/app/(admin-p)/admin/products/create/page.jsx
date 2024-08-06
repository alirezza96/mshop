import Form from "@templates/admin/products/create-form"
import { fetchCategories, fetchCustomers } from '@/lib/data';
import Breadcrumb from '@modules/Breadcrumb';
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