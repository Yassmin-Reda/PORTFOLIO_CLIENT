import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import EditorFrame from '@/components/layout/EditorFrame'
import Button from '@/components/ui/Button'

type Status = 'idle' | 'sending' | 'success' | 'error'

/**
 * Sends messages via EmailJS. Replace the SERVICE_ID, TEMPLATE_ID and
 * PUBLIC_KEY constants below with your own EmailJS project credentials:
 * https://www.emailjs.com/docs/sdk/installation/
 */
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: HTMLFormElement) {
    const data = new FormData(form)
    const next: Record<string, string> = {}
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email.'
    if (message.length < 10) next.message = 'Message should be at least 10 characters.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!validate(form)) return

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Reveal delay={0.1}>
      <EditorFrame filename="send-message.tsx">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-ink-muted mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-xl bg-surface2 border border-edge px-4 py-3 text-sm focus:border-accent-blue outline-none transition-colors"
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-accent-pink mt-1.5">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-mono text-xs text-ink-muted mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-xl bg-surface2 border border-edge px-4 py-3 text-sm focus:border-accent-blue outline-none transition-colors"
              placeholder="jane@example.com"
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-accent-pink mt-1.5">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block font-mono text-xs text-ink-muted mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full rounded-xl bg-surface2 border border-edge px-4 py-3 text-sm focus:border-accent-blue outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-accent-pink mt-1.5">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === 'sending'}>
            <FiSend /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </Button>

          <div role="status" aria-live="polite">
            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-accent-cyan mt-2">
                <FiCheckCircle /> Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm text-accent-pink mt-2">
                <FiAlertCircle /> Something went wrong. Please email me directly instead.
              </p>
            )}
          </div>
        </form>
      </EditorFrame>
    </Reveal>
  )
}
