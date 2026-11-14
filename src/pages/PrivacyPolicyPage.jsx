import React, { useState } from 'react';
import { FiList, FiChevronRight, FiShield } from 'react-icons/fi';
import { themeConfig } from '../config/themeconfig';
import { siteConfig } from '../config/siteConfig';

const privacySections = [
  {
    id: "intro",
    number: "01",
    title: "Introduction & Commitment",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-4">
          Bharath Finserv ("we", "us", or "our"), located at {siteConfig.address.full}, operates as a professional loan advisory and facilitation service. We are committed to protecting the privacy, accuracy, and security of your personal and financial information.
        </p>
        <p className="leading-relaxed text-slate-600">
          This Privacy Policy outlines how we collect, handle, process, and protect your information when you browse our website, request a loan consultation, or submit documentation for business, mortgage, car, or personal loans across our network of 16+ partner banks and NBFCs.
        </p>
      </>
    )
  },
  {
    id: "collect",
    number: "02",
    title: "Information We Collect",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          To assess loan eligibility and facilitate applications with lending institutions, we collect:
        </p>
        <ul className="space-y-2.5 text-slate-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Identity & Contact Details:</strong> Full name, mobile number, email address, and residential/business address in Coimbatore or surrounding regions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Financial & Employment Data:</strong> Monthly income, business turnover, GST details, bank statements, and existing loan liabilities required by partner lenders.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Credit Information:</strong> Credit score (CIBIL/Experian) references shared voluntarily by you to determine lender pre-qualification.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Technical Log Data:</strong> Device browser, IP address, and standard anonymous telemetry to ensure safe browsing.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "usage",
    number: "03",
    title: "How We Use Your Data",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          We use your data strictly for legitimate operational and loan facilitation purposes:
        </p>
        <ul className="space-y-2.5 text-slate-600 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Loan Advisory & Prequalification:</strong> Evaluating your financial profile to match you with the best rates across banks and NBFCs.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Application Dispatch:</strong> Transmitting your loan paperwork directly to authorized bank managers with your explicit authorization.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Status Updates & Communication:</strong> Updating you on documentation checks, sanction letters, and disbursement timelines via phone, email, or WhatsApp.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
            <span><strong className="text-slate-800">Statutory Compliance:</strong> Maintaining accounting, advisory records, and audit logs mandated by Indian regulatory frameworks.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "sharing",
    number: "04",
    title: "Information Sharing & Lending Partners",
    content: (
      <>
        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-sm text-blue-950 mb-4 flex items-start gap-3">
          <FiShield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Zero Data Resale Promise:</strong> Bharath Finserv never rents, trades, or sells your personal or financial records to third-party telemarketers or external lead brokers.
          </p>
        </div>
        <p className="leading-relaxed text-slate-600 text-sm">
          Your information is solely disclosed to:
        </p>
        <ul className="space-y-2 text-slate-600 text-sm pt-2">
          <li>• <strong className="text-slate-800">Authorized Lending Partners:</strong> The specific commercial banks and NBFCs (such as HDFC, Axis, ICICI, Kotak, Tata Capital, Bajaj, etc.) where your loan application is actively placed with your approval.</li>
          <li>• <strong className="text-slate-800">Law Enforcement Authorities:</strong> Solely if legally required pursuant to valid court summons or regulatory directives under Indian law.</li>
        </ul>
      </>
    )
  },
  {
    id: "security",
    number: "05",
    title: "Data Security & Storage",
    content: (
      <>
        <p className="leading-relaxed text-slate-600 mb-3">
          We implement rigorous administrative, physical, and digital safeguards:
        </p>
        <ul className="space-y-2 text-slate-600 text-sm">
          <li>• Secure Socket Layer (SSL/TLS) encryption for all website communications.</li>
          <li>• Role-based restricted access so only dedicated loan officers handling your file can review sensitive documentation.</li>
          <li>• Confidential digital records storage following banking standard protocols.</li>
        </ul>
      </>
    )
  },
  {
    id: "cookies",
    number: "06",
    title: "Cookies & Anonymous Analytics",
    content: (
      <p className="leading-relaxed text-slate-600 text-sm">
        Our website uses minimal, non-invasive cookies to optimize navigation flow and remember form inputs during your active session. We do not deploy invasive third-party cross-site trackers. You may configure your browser to reject cookies if desired.
      </p>
    )
  },
  {
    id: "rights",
    number: "07",
    title: "Your Privacy Rights (DPDP Act)",
    content: (
      <p className="leading-relaxed text-slate-600 text-sm">
        In compliance with India's Digital Personal Data Protection (DPDP) Act, you have the right to request access to the personal data we maintain about you, request corrections to inaccurate entries, or revoke consent for loan processing at any stage prior to final lender submission.
      </p>
    )
  },
  {
    id: "contact",
    number: "08",
    title: "Grievance & Contact Information",
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <p>If you have any questions or wish to exercise your data privacy rights, please reach out to our dedicated nodal office:</p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5 font-medium text-slate-800">
          <p><strong>Nodal Officer:</strong> Privacy & Grievance Desk</p>
          <p><strong>Entity:</strong> Bharath Finserv</p>
          <p><strong>Address:</strong> {siteConfig.address.full}</p>
          <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline">{siteConfig.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${siteConfig.phoneRaw}`} className="text-blue-600 hover:underline">{siteConfig.phoneDisplay}</a></p>
        </div>
      </div>
    )
  }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: themeConfig.typography.fontFamily }}
    >
      {/* Header Banner */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.8 8.2C14.3 9.7 15.5 10.9 17 11.4L23.2 13.2L17 15C15.5 15.5 14.3 16.7 13.8 18.2L12 24.4L10.2 18.2C9.7 16.7 8.5 15.5 7 15L0.8 13.2L7 11.4C8.5 10.9 9.7 9.7 10.2 8.2L12 2Z" fill="currentColor" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 uppercase">
              Legal & Transparency
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222E48] mb-4"
            style={{ color: themeConfig.typography.sectionHeading.color }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Learn how Bharath Finserv safeguards your personal, loan, and financial information under Indian regulatory standards.
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
                  {privacySections.map((sec) => (
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
              {privacySections.map((sec, idx) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className={`scroll-mt-28 ${idx !== privacySections.length - 1 ? 'pb-10 border-b border-slate-100' : ''}`}
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
