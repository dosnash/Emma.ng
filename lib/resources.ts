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
    slug: "website-launch-checklist",
    label: "Launch Guide",
    title: "Website Launch Checklist",
    description:
      "A practical checklist for launching a polished website without missing SEO, speed, trust, or conversion basics.",
    readTime: "8 min read",
    audience: "Founders, service businesses, and teams preparing to go live",
    highlights: [
      "Pre-launch page and content checks",
      "SEO, analytics, and metadata essentials",
      "Mobile, performance, and handoff review"
    ],
    sections: [
      {
        title: "Content and page readiness",
        body:
          "Before launch, every page should have a clear job. The homepage should explain the offer fast, service pages should answer buyer questions, and contact paths should be easy to find from every important screen.",
        bullets: [
          "Confirm page titles, headings, buttons, and contact details are final",
          "Check every internal link, external link, form, and CTA",
          "Remove placeholder text, unused sections, draft pages, and test media"
        ]
      },
      {
        title: "SEO and tracking basics",
        body:
          "A clean launch gives search engines and analytics tools the right signals from day one. Keep metadata specific, avoid duplicate titles, and make sure performance and indexing are not blocked.",
        bullets: [
          "Set titles, meta descriptions, open graph images, sitemap, and robots rules",
          "Connect analytics, search console, form tracking, and conversion events",
          "Review image alt text, schema opportunities, and canonical URLs"
        ]
      },
      {
        title: "Trust and conversion review",
        body:
          "A beautiful website still needs trust signals. The final pass should check proof, clarity, friction, and whether a real visitor can confidently take the next step.",
        bullets: [
          "Add testimonials, client logos, guarantees, process notes, or project examples",
          "Test contact forms, booking links, payment flows, and thank-you states",
          "Review mobile spacing, button visibility, font sizes, and page load speed"
        ]
      }
    ]
  },
  {
    slug: "homepage-conversion-playbook",
    label: "Conversion Playbook",
    title: "Homepage Conversion Playbook",
    description:
      "A simple framework for shaping a homepage that quickly explains what you do, why it matters, and how visitors should act.",
    readTime: "10 min read",
    audience: "Businesses that need more qualified leads from their website",
    highlights: [
      "Hero message structure",
      "Proof and offer hierarchy",
      "CTA placement for serious buyers"
    ],
    sections: [
      {
        title: "Make the hero obvious",
        body:
          "Your hero should answer three questions without making visitors think too hard: what you offer, who it is for, and what result they can expect. Keep the headline specific and put supporting detail in the paragraph.",
        bullets: [
          "Use a direct headline that names the offer or outcome",
          "Add one short paragraph that explains the customer and result",
          "Place one primary CTA and one proof signal above the fold"
        ]
      },
      {
        title: "Build trust before the pitch gets long",
        body:
          "Visitors need reasons to believe you before they read every detail. Show proof early and make it concrete, especially if the business sells services, consulting, or high-trust products.",
        bullets: [
          "Use project screenshots, client names, testimonials, numbers, or process proof",
          "Show service categories in a way that makes comparison easy",
          "Avoid generic claims that do not connect to a visible example"
        ]
      },
      {
        title: "Guide the next action",
        body:
          "A homepage should not end with uncertainty. Repeat the main CTA after important proof sections and make sure the action matches the buying stage, whether that is booking, requesting a quote, or viewing work.",
        bullets: [
          "Repeat CTAs after the hero, work examples, services, and final section",
          "Use clear action text like Start your project or Request a quote",
          "Keep forms short and ask only for details needed to start the conversation"
        ]
      }
    ]
  }
]
