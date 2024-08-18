'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { generatePagination } from '@/lib/utils';
import { Button } from '@modules/form';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }
  // NOTE: Uncomment this code in Chapter 7

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <ol className=" flex h-10  justify-center items-center flex-row-reverse gap-1   ">
      <li>
        <button
          disabled={currentPage == 1}
          onClick={() => router.replace(createPageURL(currentPage - 1))}
        >
          <ChevronRightIcon className='w-4 rotate-180 inline' />
        </button>
      </li>

      {
        allPages.map(page => (
          <li key={page} className=' min-w-6 text-center '>
            {

              <Link
                className={currentPage === page && "font-bold text-Purple underline"}
                href={createPageURL(page)}>
                {page}
              </Link>
            }
          </li>
        ))
      }
      <li>
        <button
          disabled={currentPage === totalPages}
          onClick={() => router.replace(createPageURL(currentPage + 1))}
        >
          <ChevronRightIcon className='w-4 inline' />
        </button>
      </li>
    </ol>
  );
}

