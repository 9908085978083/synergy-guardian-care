import {useState} from 'react';
import {Menu, PhoneCall, X} from 'lucide-react';
import {PRIMARY_PHONE_DISPLAY, PRIMARY_PHONE_TEL} from '../data/careData';
import type {AppRoute} from '../utils/seo';
import {BrandMark} from './BrandMark';

export type ActivePage = AppRoute;

interface NavbarProps {
  activePage: ActivePage;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export function Navbar({
  activePage,
  onNavigatePage,
  onOpenConsultation,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleHomeSection = (sectionId: string) => {
    setMobileOpen(false);
    onNavigatePage('home', sectionId);
  };

  const handleAboutClick = () => {
    setMobileOpen(false);
    onNavigatePage('about');
  };

  const handlePackagesClick = () => {
    setMobileOpen(false);
    onNavigatePage('packages');
  };

  const handleCareersClick = () => {
    setMobileOpen(false);
    onNavigatePage('careers');
  };

  return (
    <header className="relative z-40 border-b border-[#D4AF37]/30 bg-[#081B3A] lg:sticky lg:top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:gap-8 lg:px-8 lg:py-3">
        {/* Zone 1: Enlarged Official Shield Crest + Brand Lockup */}
        <button
          type="button"
          onClick={() => handleHomeSection('top')}
          className="cursor-pointer text-left whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
        >
          <BrandMark variant="light" showTagline size="header" />
        </button>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 text-sm font-medium text-[#F8F7F2]/85 xl:gap-7 lg:flex"
        >
          <button
            type="button"
            onClick={handleAboutClick}
            aria-current={activePage === 'about' ? 'page' : undefined}
            className={`cursor-pointer border-b-2 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${
              activePage === 'about'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleHomeSection('services')}
            className="cursor-pointer border-b-2 border-transparent py-1 transition-colors duration-150 hover:border-[#D4AF37] hover:text-[#D4AF37] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
          >
            Services
          </button>
          <button
            type="button"
            onClick={handlePackagesClick}
            aria-current={activePage === 'packages' ? 'page' : undefined}
            className={`cursor-pointer border-b-2 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${
              activePage === 'packages'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            Care Packages
          </button>
          <button
            type="button"
            onClick={handleCareersClick}
            aria-current={activePage === 'careers' ? 'page' : undefined}
            className={`cursor-pointer border-b-2 py-1 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37] ${
              activePage === 'careers'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent hover:border-[#D4AF37] hover:text-[#D4AF37]'
            }`}
          >
            Careers
          </button>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="border-b-2 border-transparent py-1 transition-colors duration-150 hover:border-[#D4AF37] hover:text-[#D4AF37] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary Header Contact Button + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={PRIMARY_PHONE_TEL}
            className="hidden min-h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#E2C15A] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#081B3A] shadow-sm transition-transform duration-150 hover:-translate-y-0.5 hover:from-[#C7A22E] hover:to-[#D4AF37] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F2] sm:inline-flex"
          >
            <PhoneCall className="h-3.5 w-3.5 text-[#081B3A]" aria-hidden="true" />
            <span className="tabular-nums">Call {PRIMARY_PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-[#D4AF37]/40 text-[#F8F7F2] transition-colors hover:bg-[#F8F7F2]/10 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#D4AF37]/25 bg-[#081B3A] px-4 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <button
              type="button"
              onClick={handleAboutClick}
              className={`flex min-h-11 cursor-pointer items-center rounded-md px-3 text-left text-sm font-medium transition-colors hover:bg-[#F8F7F2]/10 ${
                activePage === 'about' ? 'text-[#D4AF37]' : 'text-[#F8F7F2]'
              }`}
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => handleHomeSection('services')}
              className="flex min-h-11 cursor-pointer items-center rounded-md px-3 text-left text-sm font-medium text-[#F8F7F2] transition-colors hover:bg-[#F8F7F2]/10 hover:text-[#D4AF37]"
            >
              Services
            </button>
            <button
              type="button"
              onClick={handlePackagesClick}
              className={`flex min-h-11 cursor-pointer items-center rounded-md px-3 text-left text-sm font-medium transition-colors hover:bg-[#F8F7F2]/10 ${
                activePage === 'packages' ? 'text-[#D4AF37]' : 'text-[#F8F7F2]'
              }`}
            >
              Care Packages &amp; Service Options
            </button>
            <button
              type="button"
              onClick={() => handleHomeSection('process')}
              className="flex min-h-11 cursor-pointer items-center rounded-md px-3 text-left text-sm font-medium text-[#F8F7F2] transition-colors hover:bg-[#F8F7F2]/10 hover:text-[#D4AF37]"
            >
              Care Process
            </button>
            <button
              type="button"
              onClick={handleCareersClick}
              className={`flex min-h-11 cursor-pointer items-center rounded-md px-3 text-left text-sm font-medium transition-colors hover:bg-[#F8F7F2]/10 ${
                activePage === 'careers' ? 'text-[#D4AF37]' : 'text-[#F8F7F2]'
              }`}
            >
              Careers
            </button>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-[#F8F7F2] transition-colors hover:bg-[#F8F7F2]/10 hover:text-[#D4AF37]"
            >
              Contact
            </a>
            <div className="mt-3 grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsultation();
                }}
                className="flex min-h-11 w-full cursor-pointer items-center justify-center rounded-md bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#081B3A] transition-colors hover:bg-[#C39E2B]"
              >
                Book a Consultation
              </button>
              <a
                href={PRIMARY_PHONE_TEL}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-[#D4AF37]/50 bg-[#0D244B] px-5 py-2.5 text-sm font-semibold text-[#F8F7F2] transition-colors hover:border-[#D4AF37]"
              >
                <PhoneCall className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
                <span className="tabular-nums">Call {PRIMARY_PHONE_DISPLAY}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
