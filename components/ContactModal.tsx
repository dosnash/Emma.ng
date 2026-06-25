"use client"

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react"
import { X } from "lucide-react"

type ContactModalContextValue = {
  isContactModalOpen: boolean
  openContactModal: () => void
  closeContactModal: () => void
}

type ContactFields = {
  fullName: string
  email: string
  project: string
  budget: string
}

type ContactButtonProps = {
  children: ReactNode
  className?: string
  ariaLabel?: string
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

const initialFields: ContactFields = {
  fullName: "",
  email: "",
  project: "",
  budget: "Under $500"
}

export function useContactModal() {
  const context = useContext(ContactModalContext)

  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider")
  }

  return context
}

const WHATSAPP_URL = "https://wa.me/2349023523644"

const WA_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    style={{ width: "1em", height: "1em", flexShrink: 0 }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function ContactButton({ children, className, ariaLabel }: ContactButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={className}
    >
      {WA_ICON}
      {children}
    </a>
  )
}


export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [fields, setFields] = useState<ContactFields>(initialFields)

  const openContactModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setIsOpen(false)
    setSent(false)
  }, [])

  const updateField = useCallback(
    (field: keyof ContactFields, value: string) => {
      setFields((current) => ({
        ...current,
        [field]: value
      }))
    },
    []
  )

  const handleSubmit = useCallback(() => {
    setSent(true)
    setFields(initialFields)
  }, [])

  const contextValue = useMemo(
    () => ({
      isContactModalOpen: isOpen,
      openContactModal,
      closeContactModal
    }),
    [closeContactModal, isOpen, openContactModal]
  )

  return (
    <ContactModalContext.Provider value={contextValue}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 px-4 py-8">
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-black/10 bg-white p-6 sm:mt-20 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ff5535]">
                  Contact
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#0a0a0a]">
                  Tell me about your project
                </h2>
              </div>
              <button
                type="button"
                onClick={closeContactModal}
                className="grid h-10 w-10 flex-none place-items-center rounded-full border border-black/10 text-[#0a0a0a] transition hover:bg-black/5"
                aria-label="Close contact modal"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-semibold text-[#0a0a0a]">Full Name</span>
                <input
                  type="text"
                  value={fields.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#ffd6ce] bg-[#fff7f5] px-4 py-3 text-[#0a0a0a] outline-none transition focus:border-[#ff5535] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#0a0a0a]">Email Address</span>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#ffd6ce] bg-[#fff7f5] px-4 py-3 text-[#0a0a0a] outline-none transition focus:border-[#ff5535] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#0a0a0a]">
                  Tell me about your project
                </span>
                <textarea
                  rows={4}
                  value={fields.project}
                  onChange={(event) => updateField("project", event.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-[#ffd6ce] bg-[#fff7f5] px-4 py-3 text-[#0a0a0a] outline-none transition focus:border-[#ff5535] focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#0a0a0a]">Budget range</span>
                <select
                  value={fields.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#ffd6ce] bg-[#fff7f5] px-4 py-3 text-[#0a0a0a] outline-none transition focus:border-[#ff5535] focus:bg-white"
                >
                  <option>Under $500</option>
                  <option>$500-$1,000</option>
                  <option>$1,000-$3,000</option>
                  <option>$3,000+</option>
                </select>
              </label>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full rounded-full bg-[#ff5535] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e8482c]"
              >
                Send Message
              </button>

              {sent ? (
                <p className="rounded-xl bg-[#fff1ee] px-4 py-3 text-sm font-semibold text-[#a52f1d]">
                  Message sent! I&apos;ll get back to you within 24 hours.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </ContactModalContext.Provider>
  )
}
