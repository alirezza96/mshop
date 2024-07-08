import Link from 'next/link';
import { createCustomer } from '@/app/lib/action';
import { Button, Input } from '@/app/components/modules/form';

export default function Form() {
  return (
    <form action={createCustomer}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <Input
          type="text"
          name="name"
          label="نام و نام خانوادگی "
          placeholder="نام و نام خانوادگی مشتری را وارد نمایید"
        />
        <Input
          type="email"
          accept="image/png, image/jpg, image/webp"
          name="email"
          label="ایمیل"
          placeholder="ایمیل مشتری را وارد نمایید"
        />
        <Input
          type="file"
          label="عکس پروفایل"
          name="imageUrl"
        />
        <div className='flex'>
          <Link
            href="/admin/customers"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            انصراف
          </Link>
          <Button type="submit">ایجاد</Button>
        </div>
      </div>
    </form>
  );
}