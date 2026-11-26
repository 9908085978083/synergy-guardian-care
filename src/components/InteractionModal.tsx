import {useEffect, useState, type FormEvent} from 'react';
import {CheckCircle2, PhoneCall, MessageCircle, X} from 'lucide-react';
import {
  CARE_SOLUTIONS,
  PRIMARY_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
  PRIMARY_WHATSAPP_URL,
  SERVICE_AREAS,
  type CareService,
} from '../data/careData';
import {BrandMark} from './BrandMark';

export type ModalMode =
  | 'consultation'
  | 'advisor'
  | 'service'
  | 'careers'
  | 'privacy'
  | null;

interface InteractionModalProps {
  mode: ModalMode;
  selectedService: CareService | null;
  preselectedCity: string;
  onClose: () => void;
  onSwitchToConsultation: (serviceTitle?: string) => void;
}

export function InteractionModal({
  mode,
  selectedService,
  preselectedCity,
  onClose,
  onSwitchToConsultation,
}: InteractionModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceChoice, setServiceChoice] = useState(CARE_SOLUTIONS[0].title);
  const [areaChoice, setAreaChoice] = useState(SERVICE_AREAS[1].city);
  const [notes, setNotes] = useState('');
  const [roleChoice, setRoleChoice] = useState('Stay-In Nanny / Childcare Specialist');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      setServiceChoice(selectedService.title);
    }
  }, [selectedService]);

  useEffect(() => {
    if (preselectedCity) {
      setAreaChoice(preselectedCity);
    }
  }, [preselectedCity]);

  useEffect(() => {
    setErrorMessage('');
    setSubmittedRef(null);
  }, [mode]);

  useEffect(() => {
    if (!mode) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, onClose]);

  if (!mode) return null;

  const validateAndSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage('');

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (trimmedName.length < 2) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (mode !== 'advisor') {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
      if (!emailValid) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (digitsOnly.length < 9) {
      setErrorMessage('Please enter a valid telephone or WhatsApp number.');
      return;
    }

    const refCode = `SGC-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-heading"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#081B3A]/70 p-4 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-lg border border-[#081B3A]/15 bg-[#F8F7F2] p-6 text-[#081B3A] shadow-xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-[#081B3A]/70 transition-colors hover:bg-[#081B3A]/8 hover:text-[#081B3A] focus-visible:outline-2 focus-visible:outline-[#D4AF37]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4">
          <BrandMark variant="dark" size="sm" />
        </div>

        {/* Mode 1: Service Scope Detail */}
        {mode === 'service' && selectedService && (
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              {selectedService.index} CARE DISCIPLINE
            </p>
            <h2
              id="modal-heading"
              className="mt-2 pr-8 font-display text-2xl font-semibold text-[#081B3A]"
            >
              {selectedService.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#081B3A]/85">
              {selectedService.detailOverview}
            </p>

            <div className="mt-6 border-t border-[#081B3A]/12 pt-5">
              <h3 className="text-xs font-semibold tracking-wider text-[#081B3A]">
                WHAT IS INCLUDED
              </h3>
              <ul className="mt-3 space-y-2.5">
                {selectedService.inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#081B3A]/85"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8F5A]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-md border border-[#081B3A]/12 bg-[#FBF9F4] p-4">
              <p className="text-xs font-semibold text-[#081B3A]/65">
                Ideal For
              </p>
              <p className="mt-1 text-sm font-medium text-[#081B3A]">
                {selectedService.idealFor}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onSwitchToConsultation(selectedService.title)}
                className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#081B3A] transition-colors hover:bg-[#C39E2B]"
              >
                Book Consultation for {selectedService.title}
              </button>
            </div>
          </div>
        )}

        {/* Mode 2: Privacy Policy */}
        {mode === 'privacy' && (
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
              POPIA &amp; CONFIDENTIALITY GOVERNANCE
            </p>
            <h2
              id="modal-heading"
              className="mt-2 pr-8 font-display text-2xl font-semibold text-[#081B3A]"
            >
              Privacy Policy &amp; Family Data Care
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#081B3A]/85">
              <p>
                Synergy Guardian Care upholds strict confidentiality in full
                alignment with South Africa’s Protection of Personal Information
                Act (POPIA). All medical histories, household details, and
                family contact records shared during consultations are held
                exclusively for clinical care coordination.
              </p>
              <p>
                Client care notes are accessible only to assigned supervisory
                coordinators and vetted caregivers bound by confidentiality
                agreements. We never sell, share, or distribute family records
                to third-party marketers.
              </p>
              <p>
                Families may request access, correction, or removal of personal
                records at any time by emailing{' '}
                <span className="font-semibold text-[#081B3A]">
                  {PRIMARY_EMAIL}
                </span>{' '}
                or calling{' '}
                <a
                  href={PRIMARY_PHONE_TEL}
                  className="font-semibold text-[#081B3A] underline decoration-[#D4AF37]"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#081B3A] px-6 py-2.5 text-sm font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57]"
            >
              Close Policy
            </button>
          </div>
        )}

        {/* Mode 3, 4, 5: Consultation / Care Advisor / Careers Forms */}
        {(mode === 'consultation' || mode === 'advisor' || mode === 'careers') && (
          <div>
            {submittedRef ? (
              <div className="py-4 text-center">
                <CheckCircle2
                  className="mx-auto h-12 w-12 text-[#1E8F5A]"
                  aria-hidden="true"
                />
                <p className="mt-4 text-xs font-semibold tracking-[0.14em] text-[#1E8F5A] tabular-nums">
                  REFERENCE: {submittedRef}
                </p>
                <h2
                  id="modal-heading"
                  className="mt-2 font-display text-2xl font-semibold text-[#081B3A]"
                >
                  {mode === 'careers'
                    ? 'Application Received'
                    : mode === 'advisor'
                      ? 'Care Advisor Callback Confirmed'
                      : 'Consultation Request Confirmed'}
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#081B3A]/80">
                  {mode === 'careers'
                    ? `Thank you, ${fullName}. Our clinical recruitment coordinator will review your details for the ${roleChoice} position and contact you shortly.`
                    : `Thank you, ${fullName}. A dedicated Synergy Guardian Care Coordinator for ${areaChoice} will contact you on ${phone} within two business hours.`}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-7 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#081B3A] px-6 py-2.5 text-sm font-semibold text-[#F8F7F2] transition-colors hover:bg-[#0E2A57]"
                >
                  Return to Page
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold tracking-[0.14em] text-[#1E8F5A]">
                  {mode === 'careers'
                    ? 'JOIN OUR CARE PRACTITIONER TEAM'
                    : mode === 'advisor'
                      ? 'DIRECT FAMILY ADVISORY DESK'
                      : 'PRIVATE CARE CONSULTATION'}
                </p>
                <h2
                  id="modal-heading"
                  className="mt-2 pr-8 font-display text-2xl font-semibold text-[#081B3A]"
                >
                  {mode === 'careers'
                    ? 'Caregiver & Nursing Careers'
                    : mode === 'advisor'
                      ? 'Urgent Care Advisor Callback'
                      : 'Book a Family Consultation'}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#081B3A]/75">
                  {mode === 'careers'
                    ? 'We welcome compassionate, credentialed caregivers and enrolled nurses committed to dignity-first care.'
                    : mode === 'advisor'
                      ? 'Request an immediate call from our Care Advisory Desk or connect directly via telephone or WhatsApp.'
                      : 'Share a few details below so our senior care coordinator can prepare tailored recommendations for your family.'}
                </p>

                {mode === 'advisor' && (
                  <div className="mt-5 grid grid-cols-1 gap-3 rounded-md border border-[#081B3A]/12 bg-[#FBF9F4] p-4 sm:grid-cols-2">
                    <a
                      href={PRIMARY_PHONE_TEL}
                      className="flex items-center gap-2.5 text-xs font-semibold text-[#081B3A] hover:text-[#1E8F5A]"
                    >
                      <PhoneCall
                        className="h-4 w-4 text-[#D4AF37]"
                        aria-hidden="true"
                      />
                      <span className="tabular-nums">Call: {PRIMARY_PHONE_DISPLAY}</span>
                    </a>
                    <a
                      href={PRIMARY_WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-xs font-semibold text-[#081B3A] hover:text-[#1E8F5A]"
                    >
                      <MessageCircle
                        className="h-4 w-4 text-[#1E8F5A]"
                        aria-hidden="true"
                      />
                      <span>WhatsApp Care Desk</span>
                    </a>
                  </div>
                )}

                <form onSubmit={validateAndSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="sgc-fullname"
                      className="block text-xs font-semibold text-[#081B3A]"
                    >
                      Full Name
                    </label>
                    <input
                      id="sgc-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Nomsa Dlamini"
                      className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="sgc-phone"
                        className="block text-xs font-semibold text-[#081B3A]"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="sgc-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="076 647 5746"
                        className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                      />
                    </div>

                    {mode !== 'advisor' && (
                      <div>
                        <label
                          htmlFor="sgc-email"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Email Address
                        </label>
                        <input
                          id="sgc-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="family@example.co.za"
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                        />
                      </div>
                    )}

                    {mode === 'advisor' && (
                      <div>
                        <label
                          htmlFor="sgc-area-advisor"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Service Area
                        </label>
                        <select
                          id="sgc-area-advisor"
                          value={areaChoice}
                          onChange={(e) => setAreaChoice(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {SERVICE_AREAS.map((area) => (
                            <option key={area.id} value={area.city}>
                              {area.city}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {mode === 'consultation' && (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="sgc-service"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Primary Care Service
                        </label>
                        <select
                          id="sgc-service"
                          value={serviceChoice}
                          onChange={(e) => setServiceChoice(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {CARE_SOLUTIONS.map((svc) => (
                            <option key={svc.id} value={svc.title}>
                              {svc.title}
                            </option>
                          ))}
                          <option value="Stay-Out Nannies">
                            Stay-Out Nannies
                          </option>
                          <option value="Domestic Workers">
                            Domestic Workers
                          </option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="sgc-area"
                          className="block text-xs font-semibold text-[#081B3A]"
                        >
                          Gauteng Region
                        </label>
                        <select
                          id="sgc-area"
                          value={areaChoice}
                          onChange={(e) => setAreaChoice(e.target.value)}
                          className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                        >
                          {SERVICE_AREAS.map((area) => (
                            <option key={area.id} value={area.city}>
                              {area.city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {mode === 'careers' && (
                    <div>
                      <label
                        htmlFor="sgc-role"
                        className="block text-xs font-semibold text-[#081B3A]"
                      >
                        Care Role
                      </label>
                      <select
                        id="sgc-role"
                        value={roleChoice}
                        onChange={(e) => setRoleChoice(e.target.value)}
                        className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] focus:border-[#081B3A] focus:outline-none"
                      >
                        <option value="Stay-In Nanny / Childcare Specialist">
                          Stay-In Nanny / Childcare Specialist
                        </option>
                        <option value="Newborn & Infant Care Specialist">
                          Newborn &amp; Infant Care Specialist
                        </option>
                        <option value="Stay-In Caregiver">
                          Stay-In Caregiver
                        </option>
                        <option value="Enrolled Nurse / Nursing Assistant">
                          Enrolled Nurse / Nursing Assistant
                        </option>
                        <option value="Disability Support Specialist">
                          Disability Support Specialist
                        </option>
                        <option value="Care Coordinator">
                          Care Coordinator
                        </option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="sgc-notes"
                      className="block text-xs font-semibold text-[#081B3A]"
                    >
                      {mode === 'careers'
                        ? 'Certifications & Experience Summary'
                        : 'Care Context & Preferred Contact Time'}
                    </label>
                    <textarea
                      id="sgc-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={
                        mode === 'careers'
                          ? 'Briefly describe your caregiving qualifications and availability...'
                          : 'Share any mobility, recovery, or scheduling preferences...'
                      }
                      className="mt-1.5 w-full rounded-md border border-[#081B3A]/20 bg-[#FBF9F4] px-3.5 py-2.5 text-sm text-[#081B3A] placeholder:text-[#081B3A]/40 focus:border-[#081B3A] focus:outline-none"
                    />
                  </div>

                  {errorMessage && (
                    <p
                      role="alert"
                      className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-800"
                    >
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#081B3A] transition-colors hover:bg-[#C39E2B]"
                    >
                      {mode === 'careers'
                        ? 'Submit Care Application'
                        : mode === 'advisor'
                          ? 'Request Advisor Callback'
                          : 'Confirm Consultation Request'}
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-[#081B3A]/20 px-5 py-2.5 text-sm font-semibold text-[#081B3A] transition-colors hover:bg-[#081B3A]/5"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
