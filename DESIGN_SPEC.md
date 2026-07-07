# Design Spec: New York HVAC NYC

## Design Read

New York HVAC NYC has thin but usable factual data: HVAC, Manhattan, phone number, website URL, a lead-note address at 5 W 32nd St 3rd floor, and a 3.7 Google rating from 3 reviews. There are no supplied photos, no logo, no email, no service list, no testimonials, and no license, warranty, emergency, same-day, or years-in-business claims.

The site should feel like a premium Manhattan HVAC field guide rather than a generic contractor template. It should help a visitor quickly understand that this is a local HVAC contact path for Manhattan, decide what kind of call they are making, and call or continue to the existing website. Because proof data is limited, the design must earn trust through restraint, clarity, typography, address transparency, and practical buyer guidance.

## Core Art Direction

Concept: `manhattan-mechanical-field-guide`

The page should look like an editorial service dossier for building comfort in Manhattan: measured, practical, urban, and high-trust. The visual system should combine warm editorial paper with technical mechanical linework, slim grid rules, and a steel-blue contrast layer. Avoid stock HVAC photography, fake technicians, and generic service-card stacks.

Primary visual devices:

- Oversized editorial hero with a split technical panel.
- CSS-only Manhattan block/airflow diagram used as the main visual object.
- Thin measurement rules, map-grid linework, and label chips.
- A service architecture selector instead of a plain list of cards.
- Sticky narrative with right-side decision modules.
- High-contrast final call panel with real phone and website paths.

Design dials:

- DESIGN_VARIANCE: 7. Warm enough to feel custom, restrained enough for a trust-first local service.
- MOTION_INTENSITY: 3. Mostly static, with small hover/focus transitions and native disclosure interactions.
- VISUAL_DENSITY: 5. More information-rich than a gallery page, but not a dashboard.

## Page Structure And Section Order

1. `SiteHeader`: premium navigation with anchors and phone CTA.
2. `Hero`: art-directed split hero with Manhattan HVAC headline, deck, call CTA, website CTA, and CSS mechanical map panel.
3. `PositioningStrip`: compact credibility and context band using only factual or safe data.
4. `LocalThesis`: two-column belief/mission section about HVAC decisions in Manhattan buildings.
5. `RequestRouter`: service/program architecture section with tabs for common HVAC request types.
6. `DecisionGuide`: sticky left narrative plus right-side decision cards for what callers should prepare.
7. `ProofContext`: proof/expectations grid using rating/review count, service area, contact paths, and source transparency.
8. `ProcessTimeline`: contact-to-next-step timeline without promising timing or outcomes.
9. `CommitmentsAccordion`: expandable buyer principles and scope clarity, avoiding guarantees.
10. `ContactPanel`: final conversion section with phone, website, and address-from-notes context.
11. `Footer`: brand, anchors, phone, website, and factual caveat that content is based on supplied business data.
12. `MobileStickyCallBar`: persistent bottom call action on small screens when phone exists.

This gives 10 meaningful content sections plus navigation/footer behaviour.

## Section Specs

### 1. SiteHeader

Purpose: Make navigation feel like a finished product page and keep conversion visible.

Content:

- Brand wordmark: `New York HVAC NYC`.
- Microline: `HVAC in Manhattan`.
- Anchors: `Scope`, `Guide`, `Process`, `Contact`.
- Primary CTA: `Call (631) 500-2060`.
- Secondary text link: `Website`.

Implementation notes:

- Sticky or position-fixed only if it does not crowd the hero.
- Use a translucent paper/ink header with `backdrop-filter` where supported.
- Keep anchors real and mapped to section IDs.

### 2. Hero

Purpose: Communicate service, area, and action within five seconds.

Headline direction:

- `Manhattan HVAC calls, routed with clear next steps.`

Deck direction:

- Say that New York HVAC NYC is listed for HVAC work in Manhattan and give visitors a direct call path. Do not claim emergency response, licensing, speed, guarantees, or review volume beyond the supplied data.

Layout:

- Left: location kicker, H1, concise deck, CTA row, phone/website note.
- Right: editorial technical panel with CSS grid/linework showing a Manhattan block, airflow arrows, call panel, and address note from the lead notes.
- Hero max-width should allow the H1 to land in 2 to 3 desktop lines.

CTA:

- Primary `tel:+16315002060`.
- Secondary external link to `http://newyorkhvacnyc.com/`.

### 3. PositioningStrip

Purpose: Replace fake badges with compact factual anchors.

Items:

- `Manhattan service area`.
- `HVAC listed business`.
- `Phone-first contact`.
- `3.7 Google rating, 3 reviews` only if displayed with neutral language such as `Lead data notes`.

Visual:

- Horizontal strip with thin dividers, no badges pretending to be awards.
- On mobile, two-column grid or horizontal scroll with no overflow.

### 4. LocalThesis

Purpose: Establish a business-specific point of view without inventing credentials.

Copy angle:

- Manhattan HVAC work often starts with context: building access, equipment location, symptoms, and preferred contact path.
- The page should frame the call as a practical intake conversation.

Layout:

- Two-column editorial block.
- Left: large serif statement.
- Right: short paragraphs and a small `What this page does not claim` note for trust.

### 5. RequestRouter

Purpose: Turn the empty services array into a useful HVAC request architecture based on the business type, not fake service claims.

Interaction:

- Native tab/segmented control or button group managed in React state.

Tabs:

- `Cooling call`
- `Heating call`
- `Airflow or ventilation`
- `Contractor coordination`

For each tab, show:

- `Useful to mention`: symptoms, location, equipment access, building constraints.
- `Do not promise`: no same-day, emergency, license, warranty, or price claims.
- Primary action: call.

Visual:

- Not a card stack. Use a left selector rail and right editorial panel with a diagram strip.

### 6. DecisionGuide

Purpose: Help a comparison shopper decide what to do before calling.

Layout:

- Sticky left column with heading and short thesis.
- Right column with scrolling modules:
  - `Know the location`: apartment, office, floor, roof/mechanical room access.
  - `Name the symptom`: temperature issue, noise, airflow, thermostat, equipment condition.
  - `Clarify constraints`: building rules, access window, contact person.
  - `Confirm next step`: phone call, website visit, or follow-up path.

Use practical copy only. Do not imply the company performs every category until confirmed.

### 7. ProofContext

Purpose: Present available proof honestly.

Content:

- Rating: `3.7 rating noted in lead data`.
- Reviews: `3 Google reviews noted in lead data`.
- Area: `Manhattan`.
- Address note: `5 W 32nd St 3rd floor, New York, NY 10001, USA` from `rawLead.notes`.
- Website: existing URL.

Visual:

- Asymmetric bento with no empty holes.
- One larger `Contact facts` panel, one `Public listing snapshot` panel, and one `Service-area clarity` panel.
- Avoid star graphics that overstate sentiment.

### 8. ProcessTimeline

Purpose: Give visitors a realistic call flow without guarantees.

Steps:

1. `Call with the issue and location`.
2. `Share access and equipment context`.
3. `Confirm the appropriate next step`.
4. `Use the website if you prefer to continue there`.

Do not specify arrival windows, quote guarantees, emergency response, or completion claims.

### 9. CommitmentsAccordion

Purpose: Add useful interaction and buyer guidance.

Disclosure items:

- `Clear scope before assumptions`.
- `No invented promises on this page`.
- `Manhattan context matters`.
- `Direct contact beats vague forms`.

Use `<details>` or controlled accordion. It should be keyboard accessible, have clear focus states, and work without animation dependency.

### 10. ContactPanel

Purpose: Convert without clutter.

Content:

- Strong headline: `Start with a direct call.`
- Phone CTA.
- Website CTA.
- Address from lead notes, labelled as listing/location information.
- No email path because `email` is empty.

Visual:

- High-contrast panel using ink and deep steel rather than another beige card.
- Include small CSS linework/airflow motif.

### 11. Footer

Purpose: Finish the site with clear navigation and factual data.

Content:

- Brand.
- `HVAC in Manhattan`.
- Phone.
- Website.
- Anchor links.
- Small note: `Built from supplied business listing data.`

## Component Plan

Create component-level functions in `app/page.tsx` unless the build pass benefits from moving reusable pieces into `components/`.

Suggested order:

- `normalizePhone(phone)`
- `phoneHref(phone)`
- `externalHref(url)`
- `businessFacts`
- `requestTypes`
- `decisionItems`
- `processSteps`
- `commitmentItems`
- `SiteHeader`
- `Hero`
- `MechanicalMapPanel`
- `PositioningStrip`
- `LocalThesis`
- `RequestRouter`
- `DecisionGuide`
- `ProofContext`
- `ProcessTimeline`
- `CommitmentsAccordion`
- `ContactPanel`
- `SiteFooter`
- `MobileStickyCallBar`
- default `Page`

## CTA Map

- Header primary: `tel:+16315002060`, label `Call (631) 500-2060`.
- Hero primary: `tel:+16315002060`, label `Call now`.
- Hero secondary: `http://newyorkhvacnyc.com/`, label `Visit website`.
- Request router tab panels: `tel:+16315002060`, label changes by context, for example `Call about cooling`.
- Decision guide: phone CTA at the end of the sticky column.
- Contact panel: phone primary and website secondary.
- Footer: phone and website links.
- Mobile sticky bar: phone primary, website secondary if space allows.

No email CTA because no email is supplied.

## Colour Scheme

Use the provided warm local-service tokens as a base, but avoid a one-note beige/brown page by adding steel and utility tones.

CSS variables:

- `--paper: #f5f1eb`
- `--paper-warm: #ebe2d6`
- `--ink: #15110d`
- `--muted: #6f655b`
- `--surface: rgba(255,255,255,0.78)`
- `--surface-strong: #ffffff`
- `--copper: #9b5f2b`
- `--copper-dark: #5b3318`
- `--steel: #244653`
- `--steel-dark: #102a33`
- `--utility: #d9e4df`
- `--rule: rgba(21,17,13,0.16)`
- `--inverse: #f8f4ee`

Usage:

- Paper background for editorial sections.
- Steel-dark and ink for high-contrast CTA/footer.
- Copper as accent only for focus lines, small labels, and CTA fill.
- Utility green-grey for technical panels and hover fields.

## Typography

Use `next/font/google`.

Font pairing:

- Display: `Fraunces` for editorial H1, large section statements, and CTA headline.
- Body/UI: `Instrument_Sans` for navigation, body, labels, buttons, and dense panels.

Type rules:

- H1: `clamp(3.2rem, 7vw, 7.6rem)`, line-height around `0.92`, wide max-width.
- Section headings: `clamp(2.2rem, 4.5vw, 5rem)`.
- Body: 16 to 18px, line-height 1.55.
- Labels: uppercase only when short and useful, never `SECTION 01` or generic meta labels.
- Letter spacing: 0 for most text; tiny positive spacing only for short nav/label text if needed.

## Asset And Branding Plan

No photos or logo are supplied and stock assets are not allowed. The build should not fetch unrelated images.

Use:

- Text wordmark.
- CSS mechanical map panel.
- CSS linework, dividers, airflow arrows, grid overlays, and callout chips.
- Optional simple inline geometric marks built in CSS, not decorative SVG illustration.

Do not use:

- Stock technician photos.
- Fake logos.
- Fake rating badges.
- Fake certifications, awards, years, warranties, guarantees, emergency availability, or same-day copy.

## Interactions

Required:

- Request router tabs.
- Commitments accordion with keyboard/focus support.
- Sticky mobile call bar.
- Smooth anchor navigation if reduced motion is not requested.

Optional if simple:

- Header background strengthens after scroll only if implemented without fragility.

Motion:

- Hover transitions under 180ms.
- No dramatic scroll animation.
- Respect `prefers-reduced-motion`.

## Responsive Behaviour

Desktop:

- Max page width around 1180 to 1280px for content.
- Hero uses a 7/5 or 6/5 split grid.
- H1 lands in 2 to 3 lines.
- Decision guide uses sticky left column and right modules.
- Proof bento uses asymmetric grid with no empty cells.

Tablet:

- Hero becomes stacked with visual panel below copy.
- Header nav can keep anchors if space permits; otherwise hide secondary anchors and keep phone CTA.
- Request router selector becomes horizontal scroll-safe segmented control.

Mobile:

- Design specifically for one-column reading, not squeezed desktop.
- Header simplified to brand plus compact call link.
- Hero H1 uses `clamp()` and avoids overflow.
- Mechanical panel has fixed aspect ratio and simplified labels.
- Positioning strip becomes 2x2 grid.
- Sticky narrative stops being sticky.
- Mobile sticky call bar appears, with bottom padding added to main content.
- No horizontal overflow; all grids collapse cleanly.

## Baseline Deletion Plan

During implementation, replace the starter `app/page.tsx` and `app/globals.css` completely. Do not preserve starter layout, default body font, placeholder sections, generic three-card service grids, or any baseline heading that could fit another business unchanged.

## Stage Plan

1. Foundation: import JSON, add font setup in `app/layout.tsx` or page-level class usage, define helpers and design tokens.
2. Composition: build the full section architecture in one pass from blank canvas.
3. Interactions: add tabs, accordion, anchor focus states, and mobile sticky CTA.
4. Responsive pass: test desktop, tablet, and mobile layout assumptions in CSS.
5. Visual-director pass: reject any section that reads like a generic local-business template.
6. Build/QA: run Next build if dependencies are available, then inspect for overflow, contrast, and factual claims.

## QA Risks

- Thin data could tempt fake proof. Keep all proof tied to the supplied JSON or lead notes.
- Rating display can look like an endorsement. Present it neutrally as lead-data context.
- HVAC service labels are inferred from the vertical. Phrase them as request types, not guaranteed offerings.
- Warm palette can become beige/brown monotone. Use steel, utility green-grey, ink, and white to break it up.
- CSS art panel can become decorative noise. It must support the Manhattan/mechanical concept and not crowd CTAs.
- Mobile sticky bar can cover footer/contact content. Add bottom spacing and test small viewport heights.
- External website is HTTP. Use the supplied URL as-is, with `rel="noopener noreferrer"` and external target if appropriate.
- Empty email, logo, photos, services, reviews, and FAQs must not render as blanks or placeholders.
