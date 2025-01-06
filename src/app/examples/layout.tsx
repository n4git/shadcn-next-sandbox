import { Metadata } from "next"
import Link from "next/link"

import { ExamplesNav } from "@/components/examples-nav"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="border-grid border-b">
        <div className="container-wrapper">
          <div className="container py-4">
            <ExamplesNav />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container p-8">
          <section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
            {children}
          </section>
        </div>
      </div>
    </>
  )
}
