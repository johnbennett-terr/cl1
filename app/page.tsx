import HeroGeometric from "@/components/kokonutui/hero-geometric"
import FeaturesSection from "@/components/features-section"
import BookDemoSection from "@/components/book-demo-section"
import FAQSection from "@/components/faq-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroGeometric />
      <FeaturesSection />
      <BookDemoSection />
      <FAQSection />
    </main>
  )
}
