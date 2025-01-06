import { CardsDemo } from "@/components/cards"

export default function IndexPage() {
  return (
    <div className="container-wrapper">
      <div className="container p-6">
        <section className="block [&>div]:p-0">
          <CardsDemo />
        </section>
      </div>
    </div>
  )
}
