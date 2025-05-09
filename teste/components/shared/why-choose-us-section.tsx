import { SectionHeader } from "@/components/ui/section-header"

interface WhyChooseUsItem {
  title: string
  description: string
  icon: React.ReactNode
}

interface SharedWhyChooseUsSectionProps {
  badge: string
  title: React.ReactNode
  description: string
  items: WhyChooseUsItem[]
}

export function SharedWhyChooseUsSection({ badge, title, description, items }: SharedWhyChooseUsSectionProps) {
  return (
    <section id="porque-nos" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-4 rounded-lg border p-6"
            >
              {item.icon}
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 