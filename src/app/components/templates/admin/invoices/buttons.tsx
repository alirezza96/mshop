import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { Button } from '@/app/components/modules/form';

export function CreateInvoice() {
  return (
    <Link
      href="/admin/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button
      href={`/admin/invoices/${id}/edit`}
      className="p-2"
    >
      <PencilIcon className="w-5" />
    </Button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button type="submit" className="p-2">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </Button>
    </form>
  );
}