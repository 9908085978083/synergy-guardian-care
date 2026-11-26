import {useState, type FormEvent} from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldAlert,
} from 'lucide-react';
import {
  CARE_SOLUTIONS,
  PRIMARY_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
  PRIMARY_WHATSAPP_URL,
  SERVICE_AREAS,
} from '../data/careData';
import {BrandMark} from './BrandMark';

interface CtaAndFooterProps {
  onBookConsultation: (preselectedLabel?: string) => void;
  onSpeakToAdvisor: () => void;
  onOpenAbout: () => void;
  onOpenCareers: () => void;
  onOpenLegal: (doc: 'privacy' | 'popia' | 'terms') => void;
  onOpenPackages: () => void;
  onNavigateSection: (sectionId: string) => void;
}

const PRE_FOOTER_TRUST_ITEMS = [
  'Background Checked Candidates',
  'Reference Verified',
  'Professional Placements',
  'Ongoing Support',
];

const FOOTER_SERVICES = [
  {label: 'Child Care', serviceQuery: 'Child Care'},
  {label: 'Stay-In Nannies', serviceQuery: 'Stay-In Nannies'},
  {label: 'Stay-Out Nannies', serviceQuery: 'Stay-Out Nannies'},
  {label: 'Elderly Care', serviceQuery: 'Elderly Care'},
  {label: 'Caregivers', serviceQuery: 'Post-Hospital Care'},
  {label: 'Domestic Workers', serviceQuery: 'Domestic Workers'},
];

export function CtaAndFooter({
  onBookConsultation,
  onSpeakToAdvisor,
  onOpenAbout,
  onOpenCareers,
  onOpenLegal,
  onOpenPackages,
  onNavigateSection,
}: CtaAndFooterProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState(SERVICE_AREAS[0].city);
  const [service, setService] = useState(CARE_SOLUTIONS[0].title);
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleContactSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFormError('');

    if (name.trim().length < 2) {
      setFormError('Please enter your full name.');
      return;
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 9) {
      setFormError('Please enter a valid contact number (e.g. 076 647 5746).');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    const refCode = `SGC-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  return (
    <>
      {/* Pre-Contact Trust & Placement CTA Band on Midnight Navy */}
      <section className="border-t border-[#D4AF37]/25 bg-gradient-to-r from-[#081B3A] via-[#0E2346] to-[#081B3A] py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
                FIND THE RIGHT CAREGIVER FOR YOUR LOVED ONE
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
                Looking for Trusted Care?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                Let us help you find the perfect nanny, caregiver, or domestic
                professional in Johannesburg and across Gauteng.
              </p>

              {/* Four Unboxed Trust Elements */}
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {PRE_FOOTER_TRUST_ITEMS.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-[#14B8A6]"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 shrink-0 sm:flex-row lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={() => onBookConsultation()}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E5C55C] px-7 py-3 text-sm font-semibold text-[#081B3A] shadow-lg transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Arrange A Family Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={PRIMARY_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#14B8A6] bg-[#14B8A6]/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#14B8A6] hover:text-[#0F172A] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14B8A6]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Family Consultation Form & Direct Advisory Section on Soft Cream/Ivory */}
      <section
        id="contact"
        className="border-t border-[#081B3A]/10 bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-16 text-[#081B3A] sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Emergency Consultation Call-to-Action Card (Navy-to-Gold Depth) */}
          <div className="mb-16 flex flex-col justify-between gap-6 rounded-lg border border-[#D4AF37]/50 bg-gradient-to-r from-[#081B3A] via-[#0E2854] to-[#173668] p-7 text-[#F8F7F2] shadow-xl sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-[#D4AF37]">
                <ShieldAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>URGENT &amp; POST-HOSPITAL DISCHARGE SUPPORT</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-semibold text-[#F8F7F2] sm:text-3xl">
                Need Immediate Family Care or Emergency Consultation?
              </h2>
              <p className="mt-2 text-sm leading-relaxed tracking-[0.01em] text-[#F8F7F2]/85">
                When a loved one is discharging from hospital or requires
                same-day respite coverage in Johannesburg or Pretoria, our
                Care Advisory Desk prioritizes rapid assessment and caregiver
                deployment.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={PRIMARY_PHONE_TEL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-6 py-3 text-sm font-semibold text-[#081B3A] shadow-md transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2]"
              >
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                <span className="tabular-nums">Call {PRIMARY_PHONE_DISPLAY}</span>
              </a>
              <button
                type="button"
                onClick={onSpeakToAdvisor}
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md border border-[#D4AF37]/55 px-5 py-3 text-sm font-semibold text-[#F8F7F2] transition-colors hover:border-[#D4AF37] hover:bg-[#F8F7F2]/10 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <span>Speak With A Care Coordinator</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Branded CTA & Direct Care Channels */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <BrandMark variant="dark" showTagline size="md" />

              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[#081B3A] [text-wrap:balance] sm:text-4xl">
                Find The Right Caregiver For Your Loved One
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#081B3A]/85">
                Schedule a family consultation today and discover how Synergy
                Guardian Care can support your household with vetted nannies,
                dignified elderly care, and structured oversight.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => onBookConsultation()}
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E3C25A] px-6 py-3 text-sm font-semibold text-[#081B3A] shadow-md transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#081B3A]"
                >
                  <span>Arrange A Family Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <a
                  href={PRIMARY_PHONE_TEL}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#081B3A] px-6 py-3 text-sm font-semibold text-[#F8F7F2] transition-colors duration-150 hover:bg-[#0E2A57] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                >
                  <PhoneCall className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                  <span className="tabular-nums">Call {PRIMARY_PHONE_DISPLAY}</span>
                </a>
              </div>

              <div className="mt-10 space-y-4 border-t border-[#081B3A]/15 pt-6 text-sm text-[#081B3A]/85">
                <a
                  href={PRIMARY_PHONE_TEL}
                  className="flex items-center gap-3 font-medium transition-colors hover:text-[#1E8F5A]"
                >
                  <PhoneCall className="h-4 w-4 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                  <span className="tabular-nums">Direct Care Line: {PRIMARY_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={PRIMARY_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-medium transition-colors hover:text-[#1E8F5A]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#1E8F5A]" aria-hidden="true" />
                  <span className="tabular-nums">WhatsApp Advisory: {PRIMARY_PHONE_DISPLAY}</span>
                </a>
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="flex items-center gap-3 font-medium transition-colors hover:text-[#1E8F5A]"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#081B3A]" aria-hidden="true" />
                  <span>{PRIMARY_EMAIL}</span>
                </a>
              </div>
            </div>

            {/* Right: In-Page Family Contact & Inquiry Form on Warm Ivory Surface */}
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-6 shadow-md sm:p-9">
                {submittedRef ? (
                  <div className="py-10 text-center">
                    <CheckCircle2
                      className="mx-auto h-12 w-12 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#1E8F5A] tabular-nums">
                      INQUIRY REFERENCE: {submittedRef}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#081B3A]">
                      Thank You, {name}
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#081B3A]/80">
                      Our Care Coordinator for {area} has received your request
                      for {service} and will reach out on {phone} shortly. For
                      immediate assistance, call{' '}
                      <a
                        href={PRIMARY_PHONE_TEL}
                        className="font-semibold text-[#081B3A] underline decoration-[#D4AF37]"
                      >
                        {PRIMARY_PHONE_DISPLAY}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="mt-6 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-[#081B3A]/20 px-5 py-2 text-xs font-semibold text-[#081B3A] hover:bg-[#081B3A]/5"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                      FAMILY CONSULTATION FORM
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#081B3A]">
                      Speak With A Care Coordinator
                    </h3>
                    <p className="mt-2 text-sm text-[#081B3A]/75">
                      Complete the form below to arrange an in-home assessment or
                      ask about caregiver availability in your suburb.
                    </p>

                    <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="contact-name"
                            className="block text-xs font-semibold text-[#081B3A]"
                          >
                            Full Name
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Sipho Khumalo"
                            className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-phone"
                            className="block text-xs font-semibold text-[#081B3A]"
                          >
                            Phone / WhatsApp Number
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. 076 647 5746"
                            className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div>
                          <label
                            htmlFor="contact-email"
                            className="block text-xs font-semibold text-[#081B3A]"
                          >
                            Email Address
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.co.za"
                            className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="contact-area"
                            className="block text-xs font-semibold text-[#081B3A]"
                          >
                            Service Area
                          </label>
                          <select
                            id="contact-area"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                          >
                            {SERVICE_AREAS.map((item) => (
                              <option key={item.id} value={item.city}>
                                {item.city}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="contact-service"
                            className="block text-xs font-semibold text-[#081B3A]"
                          >
                            Care Service
                          </label>
                          <select
                            id="contact-service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                            className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                          >
                            {CARE_SOLUTIONS.map((svc) => (
                              <option key={svc.id} value={svc.title}>
                                {svc.title}
                              </option>
                            ))}
                            <option value="Stay-Out Nannies">Stay-Out Nannies</option>
                            <option value="Domestic Workers">Domestic Workers</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          How Can We Support Your Family?
                        </label>
                        <textarea
                          id="contact-message"
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your loved one’s care needs, schedule preferences, or when you would like us to call..."
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#F8F7F2] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                        />
                      </div>

                      {formError && (
                        <p
                          role="alert"
                          className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-800"
                        >
                          {formError}
                        </p>
                      )}

                      <button
                        type="submit"
                        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#081B3A] px-6 py-3 text-sm font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57] sm:w-auto"
                      >
                        <span>Submit Care Inquiry</span>
                        <ArrowRight className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Sticky Footer on Dark Navy (#0F172A) with Teal (#14B8A6) Accents */}
      <footer className="mt-auto w-full border-t border-[#14B8A6]/40 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Left Section: Brand Identity & Social Links */}
            <div className="md:col-span-4">
              <BrandMark variant="light" size="md" showWordmark={false} />
              <h3 className="mt-4 font-display text-xl font-bold tracking-wide text-white">
                Synergy Guardian Care
              </h3>
              <p className="mt-2 text-sm font-medium text-[#14B8A6]">
                Connecting Families with Trusted Care
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-300">
                Vetted stay-in &amp; stay-out nannies, caregivers, elderly
                support, disability care, and domestic staffing across Gauteng.
              </p>

              {/* Social & WhatsApp Icon Row */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={PRIMARY_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Synergy Guardian Care on 076 647 5746"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/80 text-[#14B8A6] transition-colors duration-150 hover:border-[#14B8A6] hover:bg-[#14B8A6] hover:text-[#0F172A] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  aria-label="Synergy Guardian Care on Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/80 text-white transition-colors duration-150 hover:border-[#14B8A6] hover:bg-[#14B8A6] hover:text-[#0F172A] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.7V14h2.7v8h3.1z" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  aria-label="Synergy Guardian Care on Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/80 text-white transition-colors duration-150 hover:border-[#14B8A6] hover:bg-[#14B8A6] hover:text-[#0F172A] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  aria-label="Synergy Guardian Care on LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-800/80 text-white transition-colors duration-150 hover:border-[#14B8A6] hover:bg-[#14B8A6] hover:text-[#0F172A] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle Section: Quick Links + Services */}
            <div className="grid grid-cols-2 gap-8 md:col-span-5">
              <div>
                <h3 className="font-display text-sm font-semibold tracking-wider text-[#14B8A6]">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateSection('top')}
                      className="cursor-pointer transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={onOpenAbout}
                      className="cursor-pointer transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateSection('services')}
                      className="cursor-pointer transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={onOpenPackages}
                      className="cursor-pointer transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={onOpenCareers}
                      className="cursor-pointer transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                    >
                      Careers
                    </button>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold tracking-wider text-[#14B8A6]">
                  Services
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-200">
                  {FOOTER_SERVICES.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => onBookConsultation(item.serviceQuery)}
                        className="cursor-pointer text-left transition-colors duration-150 hover:text-[#14B8A6] focus-visible:outline-2 focus-visible:outline-[#14B8A6]"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section: Contact Details */}
            <div className="md:col-span-3">
              <h3 className="font-display text-sm font-semibold tracking-wider text-[#14B8A6]">
                Contact Details
              </h3>
              <ul className="mt-4 space-y-3.5 text-sm text-slate-200">
                <li>
                  <a
                    href={PRIMARY_PHONE_TEL}
                    className="inline-flex items-center gap-3 transition-colors duration-150 hover:text-[#14B8A6]"
                  >
                    <PhoneCall
                      className="h-4 w-4 shrink-0 text-[#14B8A6]"
                      aria-hidden="true"
                    />
                    <span className="font-semibold tabular-nums">
                      {PRIMARY_PHONE_DISPLAY}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={PRIMARY_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 transition-colors duration-150 hover:text-[#14B8A6]"
                  >
                    <MessageCircle
                      className="h-4 w-4 shrink-0 text-[#14B8A6]"
                      aria-hidden="true"
                    />
                    <span className="tabular-nums">
                      WhatsApp: {PRIMARY_PHONE_DISPLAY}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${PRIMARY_EMAIL}`}
                    className="inline-flex items-center gap-3 transition-colors duration-150 hover:text-[#14B8A6]"
                  >
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#14B8A6]"
                      aria-hidden="true"
                    />
                    <span className="break-all">{PRIMARY_EMAIL}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-[#14B8A6]"
                    aria-hidden="true"
                  />
                  <span>Johannesburg, Gauteng, South Africa</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Official Legal Notice */}
          <div className="mt-12 border-t border-slate-800 pt-8">
            <div className="flex flex-col justify-between gap-4 text-xs text-slate-300 lg:flex-row lg:items-center">
              <div className="space-y-1.5">
                <p className="font-semibold text-white">
                  &copy; 2026 Synergy Guardian Care. All Rights Reserved.
                </p>
                <p className="text-slate-400">
                  Synergy Guardian Care is a trading division of INTEGRATED
                  SYNERGY SOLUTIONS (PTY) LTD | Registration No: 2026/007094/07.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 shrink-0">
                <button
                  type="button"
                  onClick={onOpenCareers}
                  className="cursor-pointer transition-colors hover:text-[#14B8A6]"
                >
                  Careers
                </button>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="cursor-pointer transition-colors hover:text-[#14B8A6]"
                >
                  Privacy Policy
                </button>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('popia')}
                  className="cursor-pointer transition-colors hover:text-[#14B8A6]"
                >
                  POPIA Compliance
                </button>
                <span aria-hidden="true" className="text-slate-600">
                  ·
                </span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="cursor-pointer transition-colors hover:text-[#14B8A6]"
                >
                  Terms &amp; Conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
