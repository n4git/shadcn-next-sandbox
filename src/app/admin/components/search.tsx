'use client'

import { cn } from '@/lib/utils'
import { DialogProps } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { useSearch } from '../context/search-context'

export function Search({ ...props }: DialogProps) {
  const { setOpen } = useSearch()
  
  return (
    <Button
      variant="outline"
      className={cn(
        "relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
      )}
      onClick={() => setOpen(true)}
      {...props}
    >
      <span className="hidden lg:inline-flex">Search documentation...</span>
      <span className="inline-flex lg:hidden">Search...</span>
      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  )
}
