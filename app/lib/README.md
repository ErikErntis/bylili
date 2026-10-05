# Portfolio

- `settings.ts`: set `siteSettings.portfolio.enabled` to `true` to show the portfolio.
- `portfolio.ts`: edit project data; `published: false` hides an individual project.
- `homepageLimit` controls the homepage count; `/work` shows all published projects.
- Disabled or empty portfolio: section, header Work link and hero View work link are hidden; `/work` returns 404.
- Fareglitch is a real collaboration credited as UI/UX Design Assistance. The other three projects are fictional concepts; keep their `isConcept: true` until replacing them with real work.
- For an individual local image, import it from `app/_assets`, set `image` to the import and remove `imagePanel`. String paths can reference your project's public directory.
- Restart dev or rebuild/redeploy after changing settings.

Generated concept artwork: built-in image generation; three adjacent photographic panels depicting a warm Indonesian cafe, a skincare editorial portrait and a Bali villa pool, without text or UI. Asset: `app/_assets/portfolio-concepts.png`. Website thumbnail lettering is rendered in CSS/HTML.

# Testimonials

Edit `testimonials.ts` for content and genuine feedback. Each item supports quote, name, role, company, optional avatar and optional rating (1–5). Use `published` to control individual items.

In `settings.ts`, set `testimonials.enabled: true` and `testimonials.preview: true` to inspect the layout with explicitly labelled placeholder cards. For real feedback set `preview: false` and populate the testimonials array. An empty array renders no section. Never copy fictional feedback from a design reference as a genuine review.

# Contact and footer

Edit `contact.ts` for banner text, footer text and real contact URLs. Fill in `whatsapp` (international digits) or `email` to activate consultation links; WhatsApp takes priority. Until configured, consultation actions open the existing preview dialog. Social icons and privacy/terms links appear only for configured values. Portfolio links follow the portfolio visibility setting.

## Motion

`components/site-motion.tsx` adds one-time viewport entrance animations using the native Web Animations API and IntersectionObserver. No extra dependencies. Route changes restart observation; unmount and reduced-motion changes cancel animations. Content remains visible if JavaScript is unavailable. Hover effects apply to mouse/trackpad devices only. Reduced motion disables entrance, dialog, menu and hover motion. Timing and selectors live in `site-motion.tsx`; interaction styles live at the end of `globals.css`.

## Website service page

`/services/website-design-development` is the first service page. Content and the homepage service catalogue live in `lib/services.ts`. Its decorative desktop/mobile website is a fictional concept rendered in HTML/CSS/SVG, not a portfolio claim. FAQ uses native details/summary. The other three services retain their introductory dialogs until their pages are built.

## E-commerce service

`/services/ecommerce-design-development` uses content from `lib/ecommerce.ts`. Includes a plain-language headless explanation, platform selection, payments, delivery, product setup, integrations and ongoing administration. The store visual is a fictional concept. Technical background: https://shopify.dev/docs/storefronts/headless/getting-started

## SEO Basics

`/services/seo-basics` uses `lib/seo.ts`. This is scoped work for existing sites; the basic setup remains included with new builds. The review visual is illustrative and shows no invented results. Reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
