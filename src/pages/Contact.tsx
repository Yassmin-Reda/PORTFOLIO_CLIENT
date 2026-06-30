import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export default function Contact() {
  useSEO(
    'Contact | Alex Carter — Front-End Developer',
    'Get in touch with Alex Carter for front-end development projects, freelance work, or full-time opportunities.',
    '/contact'
  )

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="// 01_contact"
          title="Let's build something"
          description="Whether you have a project, a role, or just a question — my inbox is open."
          align="center"
        />
        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
