import React, { useState } from 'react';
import { FiList, FiChevronRight, FiAlertCircle } from 'react-icons/fi';
import SEO from '../components/common/SEO';
import { getSEOData } from '../data/seoData';
import { themeConfig } from '../config/themeconfig';
import { siteConfig } from '../config/siteConfig';

const termsSections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance & Service Scope",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          By accessing or using the Bharath Finserv website, consultation services, or submitting loan inquiry details, you agree to comply with and be bound by these Terms and Conditions.
        </p>
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-sm text-amber-950 flex items-start gap-3">
          <FiAlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Advisory Entity Classification:</strong> Bharath Finserv is an independent loan facilitation, advisory, and documentation liaison service. We are <strong>not</strong> a bank, direct money lender, or Non-Banking Financial Company (NBFC).
          </p>
        </div>
      </>
    )
  },
  {
    id: "eligibility",
    number: "02",
    title: "Borrower Eligibility & Accuracy",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          To apply for loan advisory services through Bharath Finserv, you confirm that:
        </p>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• You are an Indian citizen or registered entity aged 21 years or older.</li>
          <li>• All documents, salary slips, GST filings, and KYC submitted are genuine, verifiable, and free of misrepresentation.</li>
          <li>• You acknowledge that submitting fabricated papers constitutes bank fraud under Indian law.</li>
        </ul>
      </>
    )
  },
  {
    id: "lender-discretion",
    number: "03",
    title: "Lender Discretion & No Approval Guarantee",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          Bharath Finserv facilitates application submission and loan negotiation; however:
        </p>
        <ul className="space-y-2.5 text-slate-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Sole Lender Authority:</strong> Loan sanctions, interest rate margins, processing fees, eligible tenure, and disbursals are determined exclusively by the respective partner bank or NBFC.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">No Guarantees:</strong> While we optimize your paperwork to maximize approval probability, we do not guarantee loan approval or specific turnaround speeds.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "zero-fees",
    number: "04",
    title: "Zero Upfront Fees Guarantee",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          In line with honest financial advisory practices:
        </p>
        <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-sm text-emerald-950 mb-3">
          <strong>No Advance Charges:</strong> Bharath Finserv never asks for upfront consulting fees, security deposits, or file approval charges from borrowers before loan processing.
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Standard bank processing fees (if any) are deducted directly by the sanctioning bank during loan disbursal according to formal bank sanction letters.
        </p>
      </>
    )
  },
  {
    id: "communication",
    number: "05",
    title: "Communication & Verification Consent",
    content: (
      <p className="leading-relaxed text-slate-600 text-sm">
        By submitting your contact number or enquiry form, you expressly authorize Bharath Finserv and its authorized lending associates to contact you via telephone call, SMS, WhatsApp, or email regarding your loan eligibility, documentation pickup, and status updates, overriding any National Do Not Call (NDNC) registry status for transactional advisory purposes.
      </p>
    )
  },
  {
    id: "liability",
    number: "06",
    title: "Limitation of Liability",
    content: (
      <p className="leading-relaxed text-slate-600 text-sm">
        Bharath Finserv shall not be held liable for any direct, indirect, or consequential damages resulting from a partner lender's rejection of an application, changes in interest rate benchmarks announced by the Reserve Bank of India (RBI), or third-party bank server downtimes.
      </p>
    )
  },
  {
    id: "jurisdiction",
    number: "07",
    title: "Governing Law & Legal Jurisdiction",
    content: (
      <p className="leading-relaxed text-slate-600 text-sm">
        These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of India. Any legal disputes or claims arising out of our advisory services shall fall under the exclusive jurisdiction of the competent courts in <strong>Coimbatore, Tamil Nadu, India</strong>.
      </p>
    )
  },
  {
    id: "contact-terms",
    number: "08",
    title: "Questions Regarding Terms",
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <p>For any legal or advisory clarifications concerning our service terms, please contact:</p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5 font-medium text-slate-800">
          <p><strong>Office:</strong> Bharath Finserv Legal & Compliance</p>
          <p><strong>Address:</strong> {siteConfig.address.full}</p>
          <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${siteConfig.phoneRaw}`} className="text-blue-600 hover:underline">{siteConfig.phoneDisplay}</a> / <a href={`tel:${siteConfig.phone2Raw}`} className="text-blue-600 hover:underline">{siteConfig.phone2Display}</a></p>
        </div>
      </div>
    )
  }
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* Page SEO Meta Tags, Canonical & Open Graph */}
      <SEO {...getSEOData('/terms-and-conditions')} />

      {/* Header Banner */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.8 8.2C14.3 9.7 15.5 10.9 17 11.4L23.2 13.2L17 15C15.5 15.5 14.3 16.7 13.8 18.2L12 24.4L10.2 18.2C9.7 16.7 8.5 15.5 7 15L0.8 13.2L7 11.4C8.5 10.9 9.7 9.7 10.2 8.2L12 2Z" fill="currentColor" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 uppercase">
              Legal Agreement
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222E48] mb-4"
            style={{ color: themeConfig.typography.sectionHeading.color }}
          >
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Please review the advisory terms and borrower guidelines governing Bharath Finserv services.
          </p>
        </div>
      </section>

      {/* Main Content: Sticky Table of Contents (Left) & Direct Content (Right) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left Column: Sticky Table of Contents */}
            <aside className="w-full lg:w-80 lg:shrink-0 lg:sticky lg:top-24">
              <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-5 shadow-xs">
                <div className="flex items-center gap-2 pb-4 mb-3 border-b border-slate-200/60 text-[#222E48] font-bold text-base">
                  <FiList className="w-5 h-5 text-blue-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1">
                  {termsSections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${activeSection === sec.id
                          ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                        }`}
                    >
                      <span className="truncate pr-2">{sec.number}. {sec.title}</span>
                      <FiChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeSection === sec.id ? 'translate-x-0.5 text-blue-600' : 'opacity-40'}`} />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Column: Detailed Content Sections (Direct on page, elegant dividers) */}
            <main className="flex-1 w-full space-y-10 lg:pl-4">
              {termsSections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className={`scroll-mt-28 ${idx !== termsSections.length - 1 ? 'pb-10 border-b border-slate-100' : ''}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100/80">
                      {sec.number}
                    </span>
                    <h2
                      className="text-xl sm:text-2xl font-bold tracking-tight text-[#222E48]"
                      style={{ color: themeConfig.typography.sectionHeading.color }}
                    >
                      {sec.title}
                    </h2>
                  </div>
                  <div>
                    {sec.content}
                  </div>
                </div>
              ))}
            </main>

          </div>
        </div>
      </section>
    </div>
  );
}
