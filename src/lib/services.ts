
import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  ClipboardCheck,
  Globe,
  Calculator,
  Receipt,
  Share2,
  Scissors,
  ShieldCheck,
  Briefcase,
  FileText,
  ShoppingCart,
  Bot,
  Target,
  Building2,
} from "lucide-react";

type ServiceDetailSection = {
  title: string;
  items: string[];
};

type DetailedDescription = {
  intro: string;
  sections: ServiceDetailSection[];
};

export type Service = {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
  detailedDescription: string | DetailedDescription;
  imageUrl: string;
  aiHint: string;
};

export const services: Service[] = [
  {
    name: "Audit",
    slug: "audit",
    icon: ClipboardCheck,
    description:
      "Comprehensive auditing services to ensure regulatory compliance and financial accuracy.",
    detailedDescription: {
      intro: "Our audit and assurance service provides a robust and independent opinion on our clients' financial statements. We go beyond compliance, offering insights to help improve financial reporting processes and internal controls. We handle statutory audits, internal audits, and special investigation audits with utmost professionalism.",
      sections: [
        {
          title: "Broadly, Audit involves the following:",
          items: [
            "Indepth study of existing systems, procedures and controls for proper understanding. Suggestions for improvement and strengthening.",
            "Ensuring compliance with policies, procedures and statutes.",
            "Comprehensive review to ensure that the accounts are prepared in accordance with Generally Accepted Accounting Policies and applicable Accounting Standards/IFRS.",
            "Checking the genuineness of the expenses booked in accounts.",
            "Reporting inefficiencies at any operational level.",
            "Detection and prevention of leakages of income and suggesting corrective measures to prevent recurrence.",
            "Certification of the books of account being in agreement with the Balance Sheet and Profit and Loss Account.",
            "Issue of Audit Reports under various laws.",
          ]
        },
        {
          title: "Types of Audits conducted",
          items: [
            "Statutory Audit of Companies",
            "Tax Audit under Section 44AB of the Income Tax Act, 1961.",
            "Audit under other sections of the Income Tax Act, 1961 such as 80HHC, 80-IA, etc.",
            "Concurrent Audits.",
            "Revenue Audit of Banks.",
            "Branch Audits of Banks.",
            "Audit of PF Trusts, Charitable Trusts, Schools, etc.",
            "Audit of Co-operative Socities.",
            "Information System Audit",
            "Internal Audits.",
          ]
        }
      ]
    },
    imageUrl: "/v1.jpg",
    aiHint: "auditing finance",
  },
  {
    name: "Corporate Finance",
    slug: "corporate-finance",
    icon: Landmark,
    description:
      "Expert advice on mergers, acquisitions, and capital raising to drive business growth.",
    detailedDescription: {
        intro: "PBalaji&Co provides strategic advice on corporate finance matters including mergers and acquisitions (M&A), private equity transactions, debt financing, and business valuations. Our team helps clients navigate complex transactions to maximize value and achieve their strategic objectives.",
        sections: [
            {
                title: "Our Corporate Finance services include:",
                items: [
                    "Preparations of Project Reports",
                    "Preparation of CMA data for bank loans",
                    "Private placement of shares, Inter-Corporate Deposit, Terms loans, working capital limits, etc",
                    "External Credit Borrowings (ECBs)",
                ]
            }
        ]
    },
    imageUrl: "/v2.jpg",
    aiHint: "corporate finance",
  },
  {
    name: "Services for Non-Residents",
    slug: "services-for-non-residents",
    icon: Globe,
    description:
      "Specialized financial and tax services for non-resident individuals and corporations.",
    detailedDescription: {
      intro: "We offer a full suite of services for non-residents, including tax planning, compliance with FEMA/RBI regulations, and investment advisory. Our experts help navigate the complexities of cross-border transactions and ensure full compliance with Indian laws.",
      sections: [
        {
          title: "Our services for non-residents include:",
          items: [
            "Allotment of Permanent Account number (PAN)",
            "Tax planning.",
            "Obtaining Advance Rulings on debatable issues.",
            "Consultancy/ advice on FEMA/RBI matters.",
            "Filing Income Tax/ Wealth Tax Returns",
            "Advice on making investments",
            "Issuing certificate for repatriation of income / assets from India.",
            "Making application to RBI for various matters including sale and purchase of residential and commercial properties.",
          ]
        }
      ]
    },
    imageUrl: "/v3.jpg",
    aiHint: "international business",
  },
  {
    name: "Accounting Services",
    slug: "accounting-services",
    icon: Calculator,
    description:
      "Reliable accounting and bookkeeping to maintain accurate and timely financial records.",
    detailedDescription: {
      intro:
        "Our accounting services are designed to provide businesses with accurate and timely financial information. We handle everything from bookkeeping and payroll processing to the preparation of financial statements and management reports, allowing you to focus on your core business.",
      sections: [
        {
          title: "Our Accounting services include:",
          items: [
            "Accounting System Design & Implementation",
            "Financial Accounting",
            "Budgeting",
            "Financial Reporting",
            "MIS Reports",
            "Financial Analysis",
            "Asset Accounting Management",
            "Depreciation and Amortization Schedules",
          ],
        },
      ],
    },
    imageUrl: "/ban1.png",
    aiHint: "accounting paperwork",
  },
  {
    name: "Income Tax",
    slug: "income-tax",
    icon: Receipt,
    description:
      "Strategic tax planning and compliance to optimize your income tax position.",
    detailedDescription: {
      intro:
        "We provide comprehensive income tax services, including tax planning, return filing for individuals and corporations, and representation before tax authorities. Our goal is to minimize tax liabilities while ensuring full compliance with the law.",
      sections: [
        {
          title: "Our Income Tax services include:",
          items: [
            "Consultancy on various intricate matters pertaining to Income tax.",
            "Effective Tax Management and Advisory Services.",
            "Tax Planning for Corporates and others.",
            "Designing / restructuring salary structure to minimise tax burden.",
            "Obtaining Advance tax Rulings.",
            "Obtaining No Objection Certificates from Income Tax department.",
            "Obtaining PAN for assessees, employees etc.",
            "Advance tax estimation and deposit.",
            "Assessing the liability towards deferred taxes.",
            "Providing regular updates on amendments, circulars, notifications & judgments.",
            "Filing Income Tax and Wealth Tax returns for all kinds of assessees.",
            "Filing Income tax returns for employees of corporate clients.",
            "Liaison with Income tax department for rectification, assessment, obtaining refunds etc.",
            "Expertise in complicated direct tax assessments.",
            "Filing and pleading appeals under various provisions of IT Act.",
            "Special expertise in search, seizure and prosecution litigation.",
            "Advice on future tax implications in respect of the potential acquisition.",
            "Opinions on the various Double Tax Avoidance Agreement related issues.",
            "Settlement of various issues raised under FEMA.",
          ],
        },
      ],
    },
    imageUrl: "/parallax.png",
    aiHint: "tax documents",
  },
  {
    name: "Benefits of Outsourcing",
    slug: "benefits-of-outsourcing",
    icon: Share2,
    description:
      "Discover cost savings and efficiency gains by outsourcing your financial functions to us.",
    detailedDescription: {
      intro: "Outsourcing your accounting, tax, and compliance functions to PBalaji&Co can lead to significant cost savings, improved efficiency, and access to specialized expertise. We customize our outsourcing solutions to meet the unique needs of your business.",
      sections: [
        {
          title: "Key benefits include:",
          items: [
            "Enables business to concentrate on core business activities.",
            "Use of manpower for more important functions",
            "Investment in fixed assets reduced/minimized.",
            "Substantial Savings in Cost.",
            "Services of experts made available.",
            "Improved Internal Controls",
            "Enhanced reporting capabilities to provide more timely and accurate financial data",
            "Off-site Backup of Data.",
          ],
        },
      ],
    },
    imageUrl: "/ban3.png",
    aiHint: "business outsourcing",
  },
  {
    name: "TDS",
    slug: "tds",
    icon: Scissors,
    description:
      "End-to-end management of Tax Deducted at Source (TDS) compliance.",
    detailedDescription: {
      intro: "We manage all aspects of TDS compliance, from calculating and deducting tax to filing quarterly returns and issuing TDS certificates. Our proactive approach helps clients avoid interest and penalties associated with non-compliance.",
      sections: [
        {
          title: "Our TDS services include:",
          items: [
            "Advice on all matters related to compliance of TDS/TCS provisions.",
            "Obtaining Tax Deduction Account Number (TAN).",
            "Periodic review of TDS/ Withholding Tax compliance.",
            "Computation of monthly TDS.",
            "Monthly reconciliation of TDS due and deposited.",
            "Monthly deposit of TDS electronically/manually.",
            "Issue of monthly/annual TDS certificates.",
            "Filing of quarterly E-TDS/Manual Returns.",
            "Filing of Correction Statements.",
            "TDS assessment."
          ]
        }
      ]
    },
    imageUrl: "/image-2.jpg",
    aiHint: "tax deduction",
  },
  {
    name: "Corporate Governance",
    slug: "corporate-governance",
    icon: ShieldCheck,
    description:
      "Implementing best practices in corporate governance for transparency and accountability.",
    detailedDescription: {
      intro: "Our corporate governance services help organizations establish robust frameworks for ethical conduct, transparency, and accountability. We advise on board composition, committee structures, and compliance with corporate laws and listing regulations.",
      sections: [
        {
          title: "Our Corporate Governance services include:",
          items: [
            "Corporate Governance Advisory",
            "Regulatory Compliance Management",
            "Internal Audit & Risk Assessment",
            "Board Evaluation & Training",
            "Business Process & Contract Governance",
          ]
        }
      ]
    },
    imageUrl: "/b1.png",
    aiHint: "corporate governance",
  },
  {
    name: "Corporate Services",
    slug: "corporate-services",
    icon: Building2,
    description:
      "Assistance with company formation, secretarial compliance, and corporate law matters.",
    detailedDescription: {
      intro: "We provide a wide range of corporate services including company incorporation, ongoing secretarial compliance, maintenance of statutory records, and advisory on corporate law matters. We ensure your business remains compliant at every stage.",
      sections: [
        {
          title: "Our Corporate Services include:",
          items: [
            "Incorporation of company",
            "Consultancy on Company Law matters.",
            "Planning for Mergers, Acquisitions, De-mergers, and Corporate re-organizations.",
            "Filing of annual returns and various forms, documents.",
            "Clause 49 review for compliance with fiscal, corporate and tax laws",
            "Secretarial Matters including share transfers",
            "Maintenance of Statutory records",
            "Consultancy on Public/Rights/Bonus Issue of shares.",
            "Change of Name, Objects, Registered Office, etc.",
          ]
        }
      ]
    },
    imageUrl: "/b3.png",
    aiHint: "corporate meeting",
  },
  {
    name: "Service Tax",
    slug: "service-tax",
    icon: FileText,
    description:
      "Guidance on legacy service tax matters and litigation support.",
    detailedDescription: {
      intro: "While Service Tax has been subsumed by GST, we continue to provide expert advisory and litigation support for legacy matters. Our team has deep experience in handling assessments, audits, and appeals related to the erstwhile Service Tax regime.",
      sections: [
        {
          title: "Our Service Tax services include:",
          items: [
            "Registration under Service tax.",
            "Consultancy for maintenance of proper records.",
            "Consultancy for proper accounting for Service tax.",
            "Consultancy on various issues relating to Service Tax.",
            "Compilation of data of Cenvat credit.",
            "Assistance in availment of notified Abatements.",
            "Utilization and availment of service tax credit in accordance with the Service Tax Credit Rules, 2002.",
            "Computation of Service tax payable.",
            "Preparation and filing Returns.",
            "Getting assessments done",
          ]
        }
      ]
    },
    imageUrl: "/b2.png",
    aiHint: "tax forms",
  },
  {
    name: "GST",
    slug: "gst",
    icon: ShoppingCart,
    description:
      "Comprehensive GST advisory, registration, and return filing services.",
    detailedDescription: {
      intro: "We offer end-to-end GST solutions, from registration and compliance to advisory and representation. Our experts help businesses navigate the complexities of the GST regime, optimize input tax credits, and ensure seamless compliance with all regulations.",
      sections: [
        {
          title: "Our GST services include:",
          items: [
            "GST Migrations and Registrations",
            "Filing of GST Returns (Regular Dealer, Composition Dealer, ISD, Non-Resident, E-Commerce, etc)",
            "GST Consultancy/Advisory on various issues of GST",
            "Impact Analysis on Business Segments",
            "GST Audits as per GST Act, 2017",
            "GST Implementation",
            "Compilation of Data of Input Tax Credit",
            "GST Assessments",
            "Transition from Pre-GST to GST Regime",
            "Maintenance of Records for Compliance",
            "Strategic Business Planning under GST Regime",
            "Supplier/Buyer Management",
            "GSTN Number Verification Services",
            "HSN Code Finder",
          ],
        },
      ],
    },
    imageUrl: "/tax.png",
    aiHint: "goods services",
  },
  {
    name: "AI & Business Automation",
    slug: "ai-business-automation",
    icon: Bot,
    description:
      "Leverage AI to automate processes, gain insights, and drive business efficiency.",
    detailedDescription: {
      intro:
        "In the age of digital transformation, we help businesses harness the power of Artificial Intelligence and automation to streamline operations, reduce costs, and unlock new growth opportunities. From automating routine accounting tasks to implementing advanced AI-driven financial analysis, we provide tailored solutions.",
      sections: [
        {
          title: "Our AI & Automation services include:",
          items: [
            "Process analysis and automation strategy development.",
            "Implementation of Robotic Process Automation (RPA) for financial tasks.",
            "AI-powered data analysis and predictive modeling for forecasting.",
            "Integration of AI tools for enhanced compliance and fraud detection.",
            "Custom AI solutions to address unique business challenges.",
          ],
        },
      ],
    },
    imageUrl: "/AI.png",
    aiHint: "artificial intelligence",
  },
  {
    name: "Tax Planning & Optimization",
    slug: "tax-planning-optimization",
    icon: Target,
    description:
      "Proactive tax planning to minimize liabilities and maximize financial efficiency.",
    detailedDescription: {
      intro:
        "Our tax experts provide strategic tax planning and optimization services to ensure you are not paying more tax than legally necessary. We analyze your financial situation to identify tax-saving opportunities and develop a comprehensive strategy that aligns with your long-term goals.",
      sections: [
        {
          title: "Our Tax Planning services include:",
          items: [
            "Comprehensive review of your financial and tax situation.",
            "Identification of tax-saving opportunities and strategies.",
            "Advice on tax-efficient investments and business structures.",
            "Long-term tax planning to achieve financial goals.",
            "Assistance with tax-related aspects of business decisions.",
          ],
        },
      ],
    },
    imageUrl: "/tax_planning.png",
    aiHint: "tax planning",
  },
];
