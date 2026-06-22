export type Project = {
  slug: string
  name: string
  tags: string[]
  description: string
  overview: string
  liveUrl: string
  screenshot: string
  industry: string
  services: string[]
  featured: boolean
}

const liveScreenshot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1440&h=900`

export const projects: Project[] = [
  {
    slug: "deomasem-movers",
    name: "Deomasem Movers",
    tags: ["WordPress", "SEO"],
    description:
      "Professional moving services company with booking-focused pages, clear service positioning, and local search visibility.",
    overview:
      "Deomasem Movers needed a service website that could quickly build trust with customers planning a move. The project emphasizes clear moving service categories, prominent calls to action, local SEO structure, and a polished homepage flow that helps visitors understand coverage, request help, and move toward booking without confusion.",
    liveUrl: "https://deomasmovers.ca",
    screenshot: "/project-screenshots/deomasem-movers.png",
    industry: "Moving Services",
    services: ["Service Website", "Booking Flow", "Local SEO"],
    featured: true
  },
  {
    slug: "bemort",
    name: "Bemort",
    tags: ["WordPress", "SEO"],
    description:
      "Canadian real estate and property management digital platform built for trust, listings, and qualified inquiries.",
    overview:
      "Bemort presents a real estate and property management brand with a practical digital experience for property owners, renters, and prospects. The site direction focuses on credibility, simplified navigation, service clarity, and content structure that supports search discovery and business inquiries.",
    liveUrl: "https://bemort.ca",
    screenshot: liveScreenshot("https://bemort.ca"),
    industry: "Real Estate",
    services: ["WordPress", "Property Platform", "SEO"],
    featured: true
  },
  {
    slug: "shes-happy-hair",
    name: "She's Happy Hair",
    tags: ["WooCommerce", "E-commerce"],
    description:
      "Premium hair care brand with e-commerce shopping experience, product storytelling, and salon booking paths.",
    overview:
      "She's Happy Hair combines brand-led product presentation with e-commerce and booking needs. The experience is shaped around product confidence, visual appeal, simple shopping paths, and clear service access so customers can move from discovery to purchase or appointment with less friction.",
    liveUrl: "https://sheshappyhair.com",
    screenshot: liveScreenshot("https://sheshappyhair.com"),
    industry: "Beauty & Retail",
    services: ["WooCommerce", "E-commerce UX", "Booking"],
    featured: true
  },
  {
    slug: "zephans-and-co",
    name: "Zephans & Co",
    tags: ["WordPress", "SEO"],
    description:
      "Professional consulting firm website with a polished corporate identity and service-led content structure.",
    overview:
      "Zephans & Co needed a refined online presence that feels credible from the first screen. The website prioritizes a professional tone, organized consulting services, trust-building layout decisions, and clean navigation that supports both brand perception and lead generation.",
    liveUrl: "https://zephansandco.com",
    screenshot: liveScreenshot("https://zephansandco.com"),
    industry: "Consulting",
    services: ["Corporate Website", "WordPress", "SEO"],
    featured: true
  },
  {
    slug: "shaatuu",
    name: "Shaatuu",
    tags: ["React", "Next.js"],
    description:
      "Creative digital platform with modern UI, interactive experiences, and a polished frontend presentation.",
    overview:
      "Shaatuu is positioned as a modern creative platform, so the digital experience needed to feel sharp and current. The build direction highlights responsive interface patterns, smooth content flow, and frontend presentation that supports a memorable brand impression.",
    liveUrl: "https://www.shaatuu.com",
    screenshot: liveScreenshot("https://www.shaatuu.com"),
    industry: "Creative Platform",
    services: ["React", "Next.js", "Interactive UI"],
    featured: true
  },
  {
    slug: "eeon",
    name: "EEON",
    tags: ["WordPress", "NGO"],
    description:
      "Community and faith-based organization website with event-friendly structure and mission-led storytelling.",
    overview:
      "EEON needed a website that could communicate purpose, community, and programs with clarity. The site experience focuses on mission presentation, easy-to-scan sections, event-ready content patterns, and approachable calls to action for people who want to connect or participate.",
    liveUrl: "https://eeonfoundation.com/",
    screenshot: liveScreenshot("https://eeonfoundation.com/"),
    industry: "Community Organization",
    services: ["WordPress", "Organization Site", "Events"],
    featured: false
  },
  {
    slug: "zoe-paris-foundation",
    name: "Zoe Paris Foundation",
    tags: ["WordPress", "NGO"],
    description:
      "Non-profit foundation website with donation-ready structure, program listings, and impact-focused presentation.",
    overview:
      "Zoe Paris Foundation needs to make its cause understandable and trustworthy quickly. The digital experience is built around impact messaging, program visibility, donation-friendly flow, and a clean structure that helps visitors understand the mission and take action.",
    liveUrl: "https://zoeparisfoundation.org",
    screenshot: liveScreenshot("https://zoeparisfoundation.org"),
    industry: "Non-profit",
    services: ["WordPress", "Donation Flow", "Program Pages"],
    featured: false
  },
  {
    slug: "becomex-app",
    name: "Becomex App",
    tags: ["Next.js", "React"],
    description:
      "Modern SaaS application landing page with a conversion-focused design and product-led messaging.",
    overview:
      "Becomex App is shaped like a modern product launch page, where messaging, hierarchy, and interface polish matter. The experience focuses on clear value communication, confident product framing, and conversion-oriented sections that help visitors understand the app quickly.",
    liveUrl: "https://becomex.app",
    screenshot: liveScreenshot("https://becomex.app"),
    industry: "SaaS",
    services: ["Next.js", "React", "Landing Page"],
    featured: false
  },
  {
    slug: "klonex",
    name: "Klonex",
    tags: ["WordPress", "SEO"],
    description:
      "UK-based technology company website with sleek corporate positioning and service-driven content.",
    overview:
      "Klonex needed a sharp digital presence that communicates technical capability without overwhelming visitors. The website structure supports service discovery, credibility, and search visibility while keeping the interface clean and business-focused.",
    liveUrl: "https://klonex.co.uk",
    screenshot: liveScreenshot("https://klonex.co.uk"),
    industry: "Technology",
    services: ["WordPress", "Corporate Site", "SEO"],
    featured: false
  },
  {
    slug: "benosho",
    name: "Benosho",
    tags: ["WordPress", "Design"],
    description:
      "Creative brand and digital services agency portfolio with a clean identity and service showcase.",
    overview:
      "Benosho presents creative and digital services through a portfolio-style experience. The site direction prioritizes visual confidence, clear service communication, and a layout that helps prospects understand the brand's capabilities at a glance.",
    liveUrl: "https://benosho.com",
    screenshot: liveScreenshot("https://benosho.com"),
    industry: "Creative Agency",
    services: ["WordPress", "Portfolio", "Brand Design"],
    featured: false
  },
  {
    slug: "push2tek",
    name: "Push2Tek",
    tags: ["Business Site", "SEO"],
    description:
      "Technology solutions website with clean service presentation and conversion-focused business messaging.",
    overview:
      "Push2Tek needed a business website that could explain its technology solutions clearly and encourage qualified conversations. The website focuses on service clarity, structured business messaging, and a simple path from interest to inquiry.",
    liveUrl: "https://push2tek.com/",
    screenshot: liveScreenshot("https://push2tek.com/"),
    industry: "Technology Services",
    services: ["Business Website", "Service Pages", "SEO"],
    featured: false
  },
  {
    slug: "lexondemand",
    name: "LexOnDemand",
    tags: ["WordPress", "SEO"],
    description:
      "On-demand legal services platform connecting clients with solicitors through a credible online presence.",
    overview:
      "LexOnDemand serves a trust-sensitive legal audience, so clarity and credibility are central. The experience is designed around straightforward service explanation, professional presentation, and a conversion path that helps potential clients understand how to get legal support.",
    liveUrl: "http://lexondemand.co.uk",
    screenshot: liveScreenshot("http://lexondemand.co.uk"),
    industry: "Legal Services",
    services: ["WordPress", "Service Platform", "SEO"],
    featured: false
  }
]
