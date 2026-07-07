import business from '../data/business.json';
import RequestRouter from './request-router';

const listingNotes = business.rawLead?.notes || business.description || '';
const listingAddress =
  listingNotes.match(/\d+\s+W\s+32nd\s+St.*?USA/i)?.[0].trim() ||
  '5 W 32nd St 3rd floor, New York, NY 10001, USA';
const ratingNote = '3.7 Google rating, 3 Google reviews';

function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, '');
}

function phoneHref(phone: string) {
  const normalized = normalizePhone(phone);
  return normalized.length === 10 ? `tel:+1${normalized}` : `tel:${normalized}`;
}

function externalHref(url: string) {
  if (!url) return '#contact';
  return url.startsWith('http') ? url : `https://${url}`;
}

const phoneLink = phoneHref(business.phone);
const websiteLink = externalHref(business.website);
const websiteLabel = business.website.replace(/^https?:\/\//, '').replace(/\/$/, '');

const navItems = [
  { href: '#scope', label: 'Scope' },
  { href: '#guide', label: 'Guide' },
  { href: '#proof', label: 'Facts' },
  { href: '#contact', label: 'Contact' },
];

const requestTypes = [
  {
    id: 'cooling',
    label: 'Cooling call',
    summary: 'A focused call path for warm rooms, thermostat behavior, equipment noise, or uneven comfort.',
    useful: ['Room or zone affected', 'Thermostat behavior', 'Equipment or roof access details'],
    careful: 'The supplied data does not promise diagnosis, pricing, emergency response, or same-day arrival.',
  },
  {
    id: 'heating',
    label: 'Heating call',
    summary: 'Use this path for heat, cycling, control, or system questions in a Manhattan building.',
    useful: ['When the issue started', 'Apartment, office, or retail context', 'Any recent service history you know'],
    careful: 'Confirm exact scope by phone before assuming repair, maintenance, replacement, or project work.',
  },
  {
    id: 'airflow',
    label: 'Airflow and ventilation',
    summary: 'For rooms that feel uneven, noisy, stale, drafty, or hard to control.',
    useful: ['Affected rooms or floors', 'Noise, odor, or airflow symptoms', 'Filter, vent, or mechanical-room access'],
    careful: 'The call should separate symptoms from assumptions, especially when building access is involved.',
  },
  {
    id: 'coordination',
    label: 'Contractor coordination',
    summary: 'A practical route when HVAC questions connect to building rules, access, or other trades.',
    useful: ['Property type and listing address context', 'Access window or building requirements', 'Best contact person'],
    careful: 'Lead data lists the business as a general contractor; confirm the HVAC scope directly.',
  },
];

const decisionItems = [
  {
    title: 'Place the issue',
    body: 'Name the Manhattan address context, floor, unit, room, or mechanical area before describing the equipment.',
  },
  {
    title: 'Describe the signal',
    body: 'Say what changed: temperature, airflow, cycling, noise, thermostat response, odor, or visible equipment condition.',
  },
  {
    title: 'Surface access limits',
    body: 'Building rules, roof access, service rooms, doorman instructions, and contact windows can shape the next step.',
  },
  {
    title: 'Choose the channel',
    body: 'Use the phone for direct intake, or visit the existing site if you prefer to continue through the business website.',
  },
];

const proofItems = [
  { label: 'Area', value: 'Manhattan', note: 'City and service area are both supplied as Manhattan.' },
  { label: 'Category', value: 'HVAC listing', note: 'Business type is supplied as General Contractor.' },
  { label: 'Public note', value: ratingNote, note: 'Shown as lead-data context, not as an award or endorsement.' },
  { label: 'Contact', value: business.phone, note: 'The reliable direct path in the supplied data is phone.' },
];

const processSteps = [
  {
    title: 'Start with the call',
    body: 'Give the issue, building context, and preferred contact path.',
  },
  {
    title: 'Add access details',
    body: 'Mention floor, unit, equipment location, building rules, and who can provide entry.',
  },
  {
    title: 'Clarify scope',
    body: 'Confirm whether the next step is intake, scheduling, site review, or website follow-up.',
  },
  {
    title: 'Continue if needed',
    body: 'Use the business website when you want another path outside the phone call.',
  },
];

const commitmentItems = [
  {
    title: 'Known facts stay separate from useful guidance.',
    body: 'The page uses supplied listing data for identity, area, phone, website, address note, and rating note. Preparation guidance is written as caller help, not as a company promise.',
  },
  {
    title: 'No warranty, license, response-time, or emergency claim is added.',
    body: 'Those details were not supplied. The design keeps the call path visible without inventing proof that should be confirmed directly.',
  },
  {
    title: 'Manhattan access is treated as part of the HVAC conversation.',
    body: 'The first call can be clearer when the caller has building access, floor, room, and equipment-location details ready.',
  },
  {
    title: 'Phone and website are the conversion paths.',
    body: 'No email was supplied, so the page does not create a fake form or unsupported email workflow.',
  },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="New York HVAC NYC home">
        <span className="brand__mark">NY</span>
        <span className="brand__copy">
          <strong>{business.name}</strong>
          <small>HVAC in Manhattan</small>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-link" href={websiteLink} target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <a className="button button--dark" href={phoneLink}>
          <span className="call-label--full">Call {business.phone}</span>
          <span className="call-label--short" aria-hidden="true">
            Call
          </span>
        </a>
      </div>
    </header>
  );
}

function MechanicalMapPanel() {
  return (
    <aside className="mechanical-panel" aria-label="Manhattan HVAC intake diagram">
      <div className="panel-ledger">
        <span>Field intake</span>
        <strong>Manhattan</strong>
      </div>
      <div className="shaft-grid" aria-hidden="true">
        <span className="shaft shaft--main" />
        <span className="shaft shaft--side" />
        <span className="building building--one" />
        <span className="building building--two" />
        <span className="building building--three" />
        <span className="building building--four" />
        <span className="flow flow--one">symptom</span>
        <span className="flow flow--two">access</span>
        <span className="flow flow--three">call</span>
      </div>
      <div className="panel-contact">
        <span>Direct line</span>
        <a href={phoneLink}>{business.phone}</a>
      </div>
      <div className="panel-address">
        <span>Listing note</span>
        <strong>{listingAddress}</strong>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">Manhattan HVAC field guide</p>
        <h1>HVAC calls in Manhattan need context before promises.</h1>
        <p className="hero__deck">
          New York HVAC NYC is listed for HVAC work in Manhattan. This page gives a direct call
          path and a practical intake guide without adding unsupported claims.
        </p>
        <div className="cta-row" aria-label="Primary contact actions">
          <a className="button button--primary" href={phoneLink}>
            Call now
          </a>
          <a className="button button--secondary" href={websiteLink} target="_blank" rel="noopener noreferrer">
            Visit website
          </a>
        </div>
      </div>
      <MechanicalMapPanel />
      <div className="hero__rail" aria-label="Business listing context">
        <span>Area: Manhattan</span>
        <span>Phone-first contact</span>
        <span>{ratingNote} noted in lead data</span>
      </div>
    </section>
  );
}

function PositioningStrip() {
  return (
    <section className="positioning" aria-label="Business context">
      {proofItems.map((item) => (
        <div className="positioning__item" key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </section>
  );
}

function LocalThesis() {
  return (
    <section className="section thesis" id="thesis" aria-labelledby="thesis-title">
      <div className="thesis__statement">
        <p className="eyebrow">Local thesis</p>
        <h2 id="thesis-title">A useful HVAC call starts with the building, not a sales script.</h2>
      </div>
      <div className="thesis__copy">
        <p>
          Manhattan HVAC questions can depend on floor, equipment access, building rules, and the
          person who can open the mechanical area. Those details are often more useful than a long
          paragraph of generic service copy.
        </p>
        <p>
          The available facts are simple: New York HVAC NYC, Manhattan, phone, website, listing
          location in the lead notes, and a small public-rating snapshot. The site is built around
          those facts and the next step a caller can take.
        </p>
      </div>
      <div className="thesis__truth">
        <strong>Not shown because it was not supplied</strong>
        <span>Emergency availability, response windows, licensing, warranties, prices, and years in business.</span>
      </div>
    </section>
  );
}

function MechanicalIndex() {
  return (
    <section className="section index-strip" aria-labelledby="index-title">
      <div>
        <p className="eyebrow">Intake index</p>
        <h2 id="index-title">Three signals to sort before calling.</h2>
      </div>
      <div className="index-grid">
        <article>
          <span>01</span>
          <h3>Building</h3>
          <p>Apartment, office, floor, roof, unit, access point, and contact person.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Comfort issue</h3>
          <p>Heat, cooling, ventilation, noise, thermostat, cycling, airflow, or equipment condition.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Next path</h3>
          <p>Phone-first intake through the listed number, or continue through the existing website.</p>
        </article>
      </div>
    </section>
  );
}

function DecisionGuide() {
  return (
    <section className="section decision" id="guide" aria-labelledby="guide-title">
      <div className="decision__sticky">
        <p className="eyebrow">Caller guide</p>
        <h2 id="guide-title">Bring the details that change the conversation.</h2>
        <p>
          The goal is not to diagnose the HVAC issue on this page. It is to make the first contact
          concrete enough for a useful next step.
        </p>
        <a className="button button--primary" href={phoneLink}>
          Call {business.phone}
        </a>
      </div>
      <div className="decision__ledger">
        {decisionItems.map((item, index) => (
          <article className="decision-row" key={item.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProofContext() {
  return (
    <section className="section proof" id="proof" aria-labelledby="proof-title">
      <div className="section__intro proof__intro">
        <p className="eyebrow">Listing facts</p>
        <h2 id="proof-title">Proof is shown as source context, not decoration.</h2>
        <p>
          Thin data should not be inflated. These panels show the facts supplied for the business
          and label the public-rating note plainly.
        </p>
      </div>
      <div className="proof-grid">
        <article className="proof-panel proof-panel--contact">
          <span className="micro-label">Contact facts</span>
          <h3>{business.name}</h3>
          <dl>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={phoneLink}>{business.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                  {websiteLabel}
                </a>
              </dd>
            </div>
          </dl>
        </article>
        <article className="proof-panel proof-panel--rating">
          <span className="micro-label">Public snapshot</span>
          <h3>3.7 rating</h3>
          <p>Lead data notes 3 Google reviews. This is not styled as a badge or guarantee.</p>
        </article>
        <article className="proof-panel proof-panel--area">
          <span className="micro-label">Area clarity</span>
          <h3>Manhattan</h3>
          <p>City and service area are both supplied as Manhattan.</p>
        </article>
        <article className="proof-panel proof-panel--address">
          <span className="micro-label">Listing location</span>
          <h3>{listingAddress}</h3>
          <p>The address appears in raw lead notes and should be confirmed through direct contact.</p>
        </article>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="process__intro">
        <p className="eyebrow">Call flow</p>
        <h2 id="process-title">A practical sequence without timing promises.</h2>
        <p>
          The site avoids invented arrival windows or quote promises. It only frames a better first
          conversation from the contact data available.
        </p>
      </div>
      <ol className="timeline">
        {processSteps.map((step, index) => (
          <li key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CommitmentsAccordion() {
  return (
    <section className="section commitments" id="principles" aria-labelledby="principles-title">
      <div className="section__intro">
        <p className="eyebrow">Buyer principles</p>
        <h2 id="principles-title">Clear about what is known, careful about what is not.</h2>
      </div>
      <div className="accordion">
        {commitmentItems.map((item, index) => (
          <details key={item.title} open={index === 0}>
            <summary>{item.title}</summary>
            <p>{item.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="contact-panel" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel__copy">
        <p className="eyebrow eyebrow--inverse">Direct contact</p>
        <h2 id="contact-title">Start with a direct HVAC call.</h2>
        <p>
          Have the Manhattan location, access details, and HVAC issue ready. No email was supplied,
          so the supported contact paths here are phone and website.
        </p>
      </div>
      <div className="contact-card">
        <a className="button button--light" href={phoneLink}>
          Call {business.phone}
        </a>
        <a className="button button--ghost" href={websiteLink} target="_blank" rel="noopener noreferrer">
          Visit {websiteLabel}
        </a>
        <div>
          <span>Listing location</span>
          <strong>{listingAddress}</strong>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{business.name}</strong>
        <p>HVAC in Manhattan. Built from supplied business listing data.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="footer-contact">
        <a href={phoneLink}>{business.phone}</a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </div>
    </footer>
  );
}

function MobileStickyCallBar() {
  return (
    <nav className="mobile-call-bar" aria-label="Mobile contact actions">
      <a href={phoneLink}>Call now</a>
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PositioningStrip />
        <LocalThesis />
        <MechanicalIndex />
        <RequestRouter phoneHref={phoneLink} phoneLabel={business.phone} requestTypes={requestTypes} />
        <DecisionGuide />
        <ProofContext />
        <ProcessTimeline />
        <CommitmentsAccordion />
        <ContactPanel />
      </main>
      <SiteFooter />
      <MobileStickyCallBar />
    </>
  );
}
