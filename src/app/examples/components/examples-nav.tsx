"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const examples = [
  {
    name: "Mail",
    href: "/examples/mail",
  },
  {
    name: "Dashboard",
    href: "/examples/dashboard",
  },
  {
    name: "Tasks",
    href: "/examples/tasks",
  },
  {
    name: "Playground",
    href: "/examples/playground",
  },
  {
    name: "Forms",
    href: "/examples/forms",
  },
  {
    name: "Music",
    href: "/examples/music",
  },
  {
    name: "Authentication",
    href: "/examples/authentication",
  },
  {
    name: "Admin",
    href: "/admin/dashboard",
  },
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("flex items-center", className)} {...props}>
          <ExampleLink
            example={{ name: "Examples", href: "/examples" }}
            isActive={pathname === "/examples"}
          />
          {examples.map((example) => (
            <ExampleLink
              key={example.href}
              example={example}
              isActive={pathname?.startsWith(example.href) ?? false}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  )
}

function ExampleLink({
  example,
  isActive,
}: {
  example: (typeof examples)[number]
  isActive: boolean
}) {
  return (
    <Link
      href={example.href}
      key={example.href}
      className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[active=true]:bg-muted data-[active=true]:text-primary"
      data-active={isActive}
    >
      {example.name}
    </Link>
  )
}
