"use client"
import { createProduct } from '@/lib/actions';
import { Button, Input, Select } from '@/components/modules/form';
import { useActionState } from 'react';
import { CategoryField } from '@/lib/definitions';

export default function Form({ categories }: { categories: CategoryField[] }) {
  const initialState = { message: null, errors: {} };
  console.log("categories =>>>", categories)
  const [state, action] = useActionState(createProduct, initialState)
  return (
    <form action={action} >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <Input
          type="text"
          name="fa"
          label="نام"
          placeholder="نام محصول را وارد نمایید"
        />
        <Input
          type="text"
          name="en"
          label="نام انگلیسی"
          placeholder="نام انگلیسی محصول را وارد نمایید"
        />
        <Input
          type="file"
          accept="image/png, image/jpg, image/webp"
          name="thumbnailUrl"
          label="عکس پروفایل"
          placeholder="ایمیل مشتری را وارد نمایید"
        />
        <Select
          label="دسته بندی"
          name="categoryId"
          className="w-full"

        >
          <option disabled >دسته بندی محصول را مشخص کنید</option>
          {
            categories?.map(category => (
              <option
                key={category.id}
                value={category.name}
              >
                {category.name}
              </option>
            ))
          }
        </Select>

        <div className='flex'>
          <Button
            href="./products"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            انصراف
          </Button>
          <Input type="submit" value="ایجاد" />
        </div>
      </div>
    </form>
  );
}