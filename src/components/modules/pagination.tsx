'use client';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { formatNumber, generatePagination } from '@/lib/utils';
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
    <>
      <div className="flex justify-center leading-10">
        <ol className=" inline-flex justify-center items-center flex-row-reverse gap-1   ">
          <li>
            <Button className="min-w-8"
              disabled={currentPage == 1}
              onClick={() => router.replace(createPageURL(currentPage - 1))}
            >
              <ChevronRightIcon className='w-6 h-6 rotate-180 inline' />
            </Button>
          </li>

          {
            allPages.map(page => (
              <li key={page} className=' min-w-8 text-center '>
                {
                  isNaN(page) ?
                    <span>
                      {page}
                    </span>
                    :
                    <Link
                      className={`${currentPage === page ? "font-bold bg-Purple/20 text-Purple " : ""}  px-1 rounded-md hover:bg-Purple/10 hover:text-Purple block`}
                      href={createPageURL(page)}>
                      {formatNumber(page)}
                    </Link>
                }
              </li>
            ))
          }
          <li>
            <Button className="min-w-8"
              disabled={currentPage === totalPages}
              onClick={() => router.replace(createPageURL(currentPage + 1))}
            >
              <ChevronRightIcon className='w-6 h-6 inline' />
            </Button>
          </li>


        </ol>
      </div >
    </>
  );
}

