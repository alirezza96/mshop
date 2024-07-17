'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { updateInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';
import { Button, Input, InputRadio, Select } from '@/app/components/modules/form';
import { updateInvoice, State } from '@/app/lib/actions';

export default function EditInvoiceForm({
    invoice,
    customers,
}: {
    invoice: InvoiceForm;
    customers: CustomerField[];
}) {
    const updateInvoiceWithId = updateInvoice.bind(null, invoice.id)
    const initialState = { errors: {}, message: null }
    const [state, action] = useActionState(updateInvoiceWithId, initialState)
    console.log("err =>", state)

    return (
        <form action={action}>
            {/* Customer Name */}
            <div className="mb-4">
                <Select
                    className="w-full"
                    id="customer"
                    name="customerId"
                    aria-describedby="customer-error"
                    defaultValue={invoice.customer_id}

                    label="مشتری"
                >
                    <option value="" disabled>
                        انتخاب مشتری
                    </option>
                    {customers.map((customer) => (
                        <option key={customer.id} value={customer.id}>
                            {customer.name}
                        </option>
                    ))}
                </Select>

                <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.customerId &&
                            state.errors.customerId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500 bg-pink" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
            </div>

            {/* Invoice Amount */}
            <div className="mb-4">
                <Input
                    id="amount"
                    name="amount"
                    type="number"
                    defaultValue={invoice.amount}
                    step="0.01"
                    placeholder="Enter USD amount"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="amount-error"
                    label="تعداد"
                >
                    <CurrencyDollarIcon className='h-6' />
                </Input>
                {/* 
                    <div id="amount-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.amount &&
                            state.errors.amount.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
            </div>

            {/* Invoice Status */}
            <fieldset>
                <legend className="mb-2 block text-sm font-medium">
                    Set the invoice status
                </legend>
                <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                    <div className="flex gap-4">
                        <div className="flex items-center">
                            <input
                                id="pending"
                                name="status"
                                type="radio"
                                value="pending"
                                defaultChecked={invoice.status === 'pending'}
                                className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                                htmlFor="pending"
                                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                            >
                                Pending <ClockIcon className="h-4 w-4" />
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="paid"
                                name="status"
                                type="radio"
                                value="paid"
                                defaultChecked={invoice.status === 'paid'}
                                className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                            />
                            <label
                                htmlFor="paid"
                                className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                            >
                                Paid <CheckIcon className="h-4 w-4" />
                            </label>
                        </div>
                    </div>
                </div>
                {/* <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.status &&
                            state.errors.status.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div> */}
            </fieldset>

            {/* <div aria-live="polite" aria-atomic="true">
                    {state.message ? (
                        <p className="my-2 text-sm text-red-500">{state.message}</p>
                    ) : null}
                </div> */}
            <div className="flex gap-2">
                <Button
                    href="/dashboard/invoices"
                    className="px-2"
                >
                    انصراف
                </Button>
                <Input type="submit" value="ثبت" />
            </div>
        </form>
    );
}
