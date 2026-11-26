/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {MotionConfig} from 'motion/react';
import {AboutPage} from './components/AboutPage';
import {AboutSection} from './components/AboutSection';
import {CareersPage} from './components/CareersPage';
import {CarePackagesPage} from './components/CarePackagesPage';
import {CareProcessSection} from './components/CareProcessSection';
import {CtaAndFooter} from './components/CtaAndFooter';
import {FaqSection} from './components/FaqSection';
import {FloatingActions} from './components/FloatingActions';
import {HeroSection} from './components/HeroSection';
import {InteractionModal, type ModalMode} from './components/InteractionModal';
import {LegalPage, type LegalDocumentType} from './components/LegalPage';
import {Navbar, type ActivePage} from './components/Navbar';
import {PillarsSection} from './components/PillarsSection';
import {ServicesSection} from './components/ServicesSection';
import {TestimonialsAndAreasSection} from './components/TestimonialsAndAreasSection';
import {VettingSection} from './components/VettingSection';
import {CARE_SOLUTIONS, type CareService} from './data/careData';
import {
  ROUTE_SEO_MAP,
  applyRouteSeoMetadata,
  resolveRouteFromPathname,
} from './utils/seo';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>(() =>
    resolveRouteFromPathname(window.location.pathname),
  );
  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [selectedService, setSelectedService] = useState<CareService | null>(
    CARE_SOLUTIONS[0],
  );
  const [preselectedCity, setPreselectedCity] = useState('Johannesburg');

  // Sync per-page SEO title, meta description, OpenGraph, and canonical URL
  useEffect(() => {
    applyRouteSeoMetadata(activePage);
  }, [activePage]);

  // Support browser back/forward navigation across clean SEO URLs
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(resolveRouteFromPathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigatePage = (page: ActivePage, sectionId?: string) => {
    setActivePage(page);

    const targetPath = ROUTE_SEO_MAP[page].path;
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }

    if (page !== 'home') {
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    if (sectionId) {
      requestAnimationFrame(() => {
        if (sectionId === 'top') {
          window.scrollTo({top: 0, behavior: 'smooth'});
          return;
        }
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
      });
    } else {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  };

  const openConsultation = (preselectedLabel?: string) => {
    if (preselectedLabel) {
      const matched = CARE_SOLUTIONS.find(
        (s) => s.title.toLowerCase() === preselectedLabel.toLowerCase(),
      );
      if (matched) setSelectedService(matched);
    }
    setModalMode('consultation');
  };

  const openAdvisor = () => {
    setModalMode('advisor');
  };

  const handleSelectService = (service: CareService) => {
    setSelectedService(service);
    setModalMode('service');
  };

  const handleRequestAssessment = (preselectedTitle?: string) => {
    if (preselectedTitle) {
      const matched = CARE_SOLUTIONS.find((s) =>
        s.title.toLowerCase().includes(preselectedTitle.toLowerCase().split(' ')[0]),
      );
      if (matched) setSelectedService(matched);
    }
    setModalMode('consultation');
  };

  const handleBookInArea = (city: string) => {
    setPreselectedCity(city);
    setModalMode('consultation');
  };

  const handleSwitchToConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      const matched = CARE_SOLUTIONS.find((s) => s.title === serviceTitle);
      if (matched) setSelectedService(matched);
    }
    setModalMode('consultation');
  };

  const isLegalPage =
    activePage === 'privacy' ||
    activePage === 'popia' ||
    activePage === 'terms';

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-[#081B3A] text-[#081B3A]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-[#D4AF37] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#081B3A] focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar
          activePage={activePage}
          onNavigatePage={handleNavigatePage}
          onOpenConsultation={() => openConsultation()}
        />

        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {activePage === 'packages' ? (
            <CarePackagesPage onRequestAssessment={handleRequestAssessment} />
          ) : activePage === 'careers' ? (
            <CareersPage />
          ) : activePage === 'about' ? (
            <AboutPage
              onBookConsultation={openConsultation}
              onOpenPackages={() => handleNavigatePage('packages')}
            />
          ) : isLegalPage ? (
            <LegalPage
              documentType={activePage as LegalDocumentType}
              onNavigateHome={() => handleNavigatePage('home')}
              onSwitchLegal={(doc) => handleNavigatePage(doc)}
            />
          ) : (
            <>
              <HeroSection onBookConsultation={() => openConsultation()} />

              <AboutSection onRequestConsultation={() => openConsultation()} />

              <PillarsSection onSpeakToCoordinator={openAdvisor} />

              <ServicesSection
                onSelectService={handleSelectService}
                onBookService={(serviceTitle) => openConsultation(serviceTitle)}
                onOpenPackages={() => handleNavigatePage('packages')}
              />

              <VettingSection onSpeakToCoordinator={openAdvisor} />

              <CareProcessSection onRequestConsultation={() => openConsultation()} />

              <TestimonialsAndAreasSection onBookInArea={handleBookInArea} />

              <FaqSection onSpeakToCoordinator={openAdvisor} />
            </>
          )}
        </main>

        <CtaAndFooter
          onBookConsultation={openConsultation}
          onSpeakToAdvisor={openAdvisor}
          onOpenAbout={() => handleNavigatePage('about')}
          onOpenCareers={() => handleNavigatePage('careers')}
          onOpenLegal={(doc) => handleNavigatePage(doc)}
          onOpenPackages={() => handleNavigatePage('packages')}
          onNavigateSection={(sectionId) => handleNavigatePage('home', sectionId)}
        />

        <FloatingActions />

        <InteractionModal
          mode={modalMode}
          selectedService={selectedService}
          preselectedCity={preselectedCity}
          onClose={() => setModalMode(null)}
          onSwitchToConsultation={handleSwitchToConsultation}
        />
      </div>
    </MotionConfig>
  );
}
