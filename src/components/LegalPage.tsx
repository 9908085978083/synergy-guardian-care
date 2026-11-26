import {ArrowLeft, FileCheck2, Lock, Mail, PhoneCall, Scale, ShieldCheck} from 'lucide-react';
import {
  BRAND_LOGO_URL,
  PRIMARY_EMAIL,
  PRIMARY_PHONE_DISPLAY,
  PRIMARY_PHONE_TEL,
} from '../data/careData';

export type LegalDocumentType = 'privacy' | 'popia' | 'terms';

interface LegalPageProps {
  documentType: LegalDocumentType;
  onNavigateHome: () => void;
  onSwitchLegal: (type: LegalDocumentType) => void;
}

interface LegalSectionBlock {
  heading: string;
  body: string[];
}

const LEGAL_DOCUMENTS: Record<
  LegalDocumentType,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    effectiveDate: string;
    sections: LegalSectionBlock[];
  }
> = {
  privacy: {
    eyebrow: 'PRIVACY & CONFIDENTIALITY',
    title: 'Privacy Policy',
    subtitle:
      'How Synergy Guardian Care collects, safeguards, and uses personal family and applicant information in South Africa.',
    effectiveDate: 'Effective Date: 1 January 2026',
    sections: [
      {
        heading: '1. Responsible Party & Legal Entity',
        body: [
          'Synergy Guardian Care is a trading division of INTEGRATED SYNERGY SOLUTIONS (PTY) LTD (Registration No: 2026/007094/07), operating in Johannesburg, Gauteng, South Africa.',
          'We are committed to protecting the privacy, dignity, and confidentiality of every family, care recipient, nanny, caregiver, and website visitor.',
        ],
      },
      {
        heading: '2. Personal Information We Collect',
        body: [
          'When you book a consultation, request staff, or apply for employment, we collect only the personal details necessary to coordinate safe care or verify candidate suitability—such as full name, telephone and WhatsApp numbers, email address, residential suburb, care requirements, and candidate qualifications or references.',
          'Health, mobility, or care-specific context shared by families is treated as strictly confidential special personal information.',
        ],
      },
      {
        heading: '3. Purpose & Strict Confidentiality',
        body: [
          'Information is used solely to conduct family assessments, perform multi-stage caregiver vetting, match qualified care practitioners, and provide ongoing care coordination.',
          'We never sell, rent, or distribute client or candidate personal information to third-party marketing lists.',
        ],
      },
      {
        heading: '4. Security Safeguards & Retention',
        body: [
          'All family care briefs and candidate screening records are stored securely with restricted access limited to authorised Care Coordinators and bound practitioners.',
          'Records are retained only for as long as necessary to fulfil active care placements or comply with South African statutory obligations.',
        ],
      },
      {
        heading: '5. Your Rights & Contact',
        body: [
          `You may request access to, correction of, or deletion of your personal information at any time by contacting info@synergyguardiancare.co.za or calling ${PRIMARY_PHONE_DISPLAY}.`,
        ],
      },
    ],
  },
  popia: {
    eyebrow: 'SOUTH AFRICAN STATUTORY COMPLIANCE',
    title: 'POPIA Compliance Statement',
    subtitle:
      'Alignment with the Protection of Personal Information Act (Act 4 of 2013) for households, care recipients, and candidates.',
    effectiveDate: 'Statutory Framework: POPIA Act 4 of 2013',
    sections: [
      {
        heading: '1. Commitment to Lawful Processing',
        body: [
          'Synergy Guardian Care (a trading division of INTEGRATED SYNERGY SOLUTIONS (PTY) LTD, Registration No: 2026/007094/07) upholds the eight conditions for the lawful processing of personal information established under the Protection of Personal Information Act, 2013 (POPIA).',
        ],
      },
      {
        heading: '2. Accountability, Purpose Specification & Minimality',
        body: [
          'We collect personal and special personal information strictly with consent or for legitimate care coordination and recruitment vetting.',
          'Candidate background screenings, South African ID / work-permit checks, criminal clearances, and reference verifications are conducted only after obtaining explicit applicant consent.',
        ],
      },
      {
        heading: '3. Family & Caregiver Data Safeguards',
        body: [
          'Household addresses, emergency contacts, senior medical notes, and childcare routines are treated as sensitive data and shared only on a strict need-to-know basis with the confirmed placement practitioner.',
        ],
      },
      {
        heading: '4. Data Subject Participation Rights',
        body: [
          'In terms of Sections 23 and 24 of POPIA, you have the right to confirm whether we hold your personal information, request a record or description of that information, request correction or deletion of inaccurate data, and withdraw consent for future communications.',
        ],
      },
      {
        heading: '5. Information Officer Queries',
        body: [
          `All POPIA access, correction, or privacy inquiries may be directed to our Information Officer at ${PRIMARY_EMAIL} or by telephone on ${PRIMARY_PHONE_DISPLAY}.`,
        ],
      },
    ],
  },
  terms: {
    eyebrow: 'SERVICE & WEBSITE GOVERNANCE',
    title: 'Terms and Conditions',
    subtitle:
      'Governing family consultations, caregiver and nanny placements, and use of the Synergy Guardian Care website.',
    effectiveDate: 'Last Updated: November 2026',
    sections: [
      {
        heading: '1. Scope of Services',
        body: [
          'Synergy Guardian Care, a trading division of INTEGRATED SYNERGY SOLUTIONS (PTY) LTD (Registration No: 2026/007094/07), coordinates private home-based care, elderly support, childcare, stay-in nanny placement, babysitting, disability support, post-hospital care, and companion care across Johannesburg and Gauteng.',
        ],
      },
      {
        heading: '2. Consultations & Service Quotations',
        body: [
          'Any indicative pricing guidelines displayed on our website are for informational planning only. Final service terms, placement fees, working hours, and care duties are confirmed in writing following a family assessment and mutual service agreement.',
        ],
      },
      {
        heading: '3. Vetting & Caregiver Placement Standards',
        body: [
          'All candidates undergo our structured six-stage verification process (criminal background screening, identity verification, telephonic reference checks, qualification checks, competency interview, and onboarding supervision) prior to placement.',
          'Where clinical nursing or specialised medical intervention is required, care scope is coordinated strictly within the practitioner’s verified credentials.',
        ],
      },
      {
        heading: '4. Intellectual Property & Website Use',
        body: [
          'All branding, shield crests, copy, and structured materials on synergyguardiancare.co.za remain the property of INTEGRATED SYNERGY SOLUTIONS (PTY) LTD and may not be reproduced or redistributed without prior written consent.',
        ],
      },
      {
        heading: '5. Governing Law',
        body: [
          'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of South Africa.',
        ],
      },
    ],
  },
};

export function LegalPage({
  documentType,
  onNavigateHome,
  onSwitchLegal,
}: LegalPageProps) {
  const doc = LEGAL_DOCUMENTS[documentType];

  const renderIcon = () => {
    if (documentType === 'popia') {
      return <ShieldCheck className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />;
    }
    if (documentType === 'terms') {
      return <Scale className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />;
    }
    return <Lock className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />;
  };

  return (
    <div>
      {/* Navy Legal Header */}
      <section className="relative overflow-hidden bg-[#081B3A] py-14 text-[#F8F7F2] sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <img
            src={BRAND_LOGO_URL}
            alt=""
            referrerPolicy="no-referrer"
            className="absolute top-1/2 left-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-12 blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#081B3A]/92 via-[#081B3A]/84 to-[#040E21]/96" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex min-h-10 cursor-pointer items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] transition-colors hover:text-[#F0D576]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </button>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[#D4AF37]/40 bg-[#0D244B]">
              {renderIcon()}
            </div>
            <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
              {doc.eyebrow}
            </p>
          </div>

          <h1
            className="mt-4 font-display font-semibold tracking-tight text-[#F8F7F2]"
            style={{fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', lineHeight: 1.15}}
          >
            {doc.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#F8F7F2]/85">
            {doc.subtitle}
          </p>
          <p className="mt-3 text-xs font-medium tracking-wide text-[#D4AF37]">
            {doc.effectiveDate}
          </p>

          {/* Switch Between Legal Documents */}
          <div className="mt-8 flex flex-wrap gap-2.5 border-t border-[#D4AF37]/20 pt-6">
            {(
              [
                {id: 'privacy', label: 'Privacy Policy'},
                {id: 'popia', label: 'POPIA Compliance'},
                {id: 'terms', label: 'Terms & Conditions'},
              ] as {id: LegalDocumentType; label: string}[]
            ).map((tab) => {
              const isActive = tab.id === documentType;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSwitchLegal(tab.id)}
                  className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-md border px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'border-[#D4AF37] bg-[#D4AF37] text-[#081B3A]'
                      : 'border-[#D4AF37]/30 bg-[#0D244B] text-[#F8F7F2] hover:border-[#D4AF37]'
                  }`}
                >
                  <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soft Cream Legal Body */}
      <section className="bg-gradient-to-b from-[#F8F7F2] to-[#EFECE1] py-14 text-[#081B3A] sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-lg border border-[#081B3A]/15 bg-[#FBF9F4] p-7 shadow-sm sm:p-10">
            {doc.sections.map((section) => (
              <article
                key={section.heading}
                className="border-b border-[#081B3A]/10 pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="font-display text-xl font-semibold text-[#081B3A]">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#081B3A]/85 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}

            <div className="mt-6 flex flex-col justify-between gap-4 rounded-md border border-[#081B3A]/15 bg-[#F8F7F2] p-5 sm:flex-row sm:items-center">
              <div className="text-xs leading-relaxed text-[#081B3A]/80">
                <p className="font-semibold text-[#081B3A]">
                  INTEGRATED SYNERGY SOLUTIONS (PTY) LTD
                </p>
                <p>Registration No: 2026/007094/07 · Johannesburg, Gauteng</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#081B3A]">
                <a
                  href={`mailto:${PRIMARY_EMAIL}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#1E8F5A]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
                  <span>{PRIMARY_EMAIL}</span>
                </a>
                <a
                  href={PRIMARY_PHONE_TEL}
                  className="inline-flex items-center gap-1.5 hover:text-[#1E8F5A]"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
                  <span className="tabular-nums">{PRIMARY_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
