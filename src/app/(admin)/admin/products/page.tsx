import FormN from '@/app/ui/invoices/FormN';
import BreadcrumbsN from '@/app/ui/invoices/BreadcrumbsN';
import { fetchCategories } from '@/app/lib/data';
export default async function Page() {
  const categories = await fetchCategories();


  return (
    <main>
      <BreadcrumbsN
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <FormN categories={categories} />
    </main>
  );
}