"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition, useMemo } from "react";
export function useUpdateQueryParam() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const [isPending, startTransition] = useTransition()
  const params = useMemo(() => new URLSearchParams(searchParams), [searchParams])
  const updateQueryParam = (name, value) => {
    if (name) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    startTransition(
      () => {
        push(`${pathname}?${params.toString()}`);
      }
    )
  };

  const getQueryParam = (name) => {
    return searchParams.get(name);
  };

  const changeHandler = (name, value) => {
    updateQueryParam(name, value);
  };

  return { updateQueryParam, getQueryParam, changeHandler, isPending };
}
