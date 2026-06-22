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

export function ContactButton({ children, className, ariaLabel }: ContactButtonProps) {
  const { openContactModal } = useContactModal()

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={openContactModal}
      className={className}
    >
      {children}
    </button>
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
