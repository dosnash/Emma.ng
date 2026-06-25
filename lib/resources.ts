export type Resource = {
  slug: string
  label: string
  title: string
  description: string
  readTime: string
  audience: string
  highlights: string[]
  sections: Array<{
    title: string
    body: string
    bullets: string[]
  }>
}

export const resources: Resource[] = [
  {
    slug: "saas-landing-page-blueprint",
    label: "SaaS Playbook",
    title: "SaaS Landing Page Blueprint",
    description:
      "A high-converting framework for SaaS landing pages. Perfect for founders launching a new tool or looking to boost sign-ups.",
    readTime: "7 min read",
    audience: "SaaS founders and developers who want more signups",
    highlights: [
      "High-converting SaaS Hero sections",
      "Structuring social proof for trust",
      "Clear call-to-actions (CTAs)"
    ],
    sections: [
      {
        title: "The High-Converting Hero",
        body:
          "Your hero section is the single most important part of your SaaS page. It needs to convey what your tool does, who it's for, and the ultimate value it delivers in under 3 seconds.",
        bullets: [
          "Use a direct, benefit-focused headline instead of creative vagueness",
          "Show a high-quality product screenshot or interface mockup immediately",
          "Provide a single, low-friction primary call to action (e.g. 'Start Free Trial')"
        ]
      },
      {
        title: "Strategic Social Proof",
        body:
          "Founders often put logos at the bottom of the page, but serious buyers need to see credibility early. Display client logos or testimonials directly beneath the hero section.",
        bullets: [
          "Use recognizable brand logos or customer face avatars for trust",
          "Feature concrete testimonials that call out specific metrics (e.g. 'reduced load time by 40%')",
          "Include a rating badge (e.g. 5 stars on G2 or Product Hunt)"
        ]
      },
      {
        title: "Features vs. Outcomes",
        body:
          "Features describe what your SaaS does. Outcomes describe how it helps the customer. Always structure your layout around outcomes, and map your features as details.",
        bullets: [
          "Headline the direct benefit first, then explain the technology behind it",
          "Use interactive demos or short video loops instead of static bullet points",
          "Address common customer objections directly in the copy"
        ]
      }
    ]
  },
  {
    slug: "nextjs-core-web-vitals-guide",
    label: "Next.js Guide",
    title: "Next.js Core Web Vitals Optimization Guide",
    description:
      "The ultimate checklist for optimizing Next.js websites for speed, Core Web Vitals, and search engine optimization.",
    readTime: "9 min read",
    audience: "Next.js developers building SEO-sensitive marketing sites",
    highlights: [
      "Image and Font optimization pipelines",
      "Dynamic imports & code splitting",
      "Streaming and loading states"
    ],
    sections: [
      {
        title: "Optimize Assets and Media",
        body:
          "Large assets are the number one cause of high Largest Contentful Paint (LCP). Use the built-in Next.js optimization modules to automatically compress and crop files.",
        bullets: [
          "Always use next/image for automatic WebP formatting and layout stability",
          "Use next/font to host Google Fonts locally and prevent layout shifts (CLS)",
          "Load critical hero images with priority tags to trigger instant download"
        ]
      },
      {
        title: "Split Code and Delay Non-Critical JS",
        body:
          "High Total Blocking Time (TBT) hurts search rankings. Split large modules into client components that only load when needed or defer script loading.",
        bullets: [
          "Load heavy third-party widgets using next/script with lazyOnload strategy",
          "Use next/dynamic to dynamically import components below the fold",
          "Reduce client-side bundle size by using server components for layout rendering"
        ]
      },
      {
        title: "Incorporate Streaming & Pre-rendering",
        body:
          "A fast initial load keeps visitors on your page. Choose the right page rendering models (ISR, SSR, SSG) and stream slow data sources.",
        bullets: [
          "Utilize static generation (SSG) or incremental static regeneration (ISR) for pages",
          "Stream slow data using React Suspense boundaries and beautiful loading skeletons",
          "Ensure metadata is fully populated statically to optimize SEO crawlers"
        ]
      }
    ]
  }
]
