import Head from 'next/head';

const CALENDLY_URL = "https://calendly.com/YOUR-CALENDLY-HANDLE/hireframing-intro"; // TODO: replace with real Calendly link
const LINKEDIN_URL = "https://www.linkedin.com/in/jacobmerkley/";
const LINKEDIN_MESSAGE_URL = "https://www.linkedin.com/in/jacobmerkley/"; // LinkedIn doesn't support pre-filled DMs via URL; this just opens the profile

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiring Handoff — A hiring system built with you</title>
        <meta
          name="description"
          content="A working hiring system, installed once, run forever. Built by a recruiter who has run 500+ searches and knows exactly what breaks."
        />
      </Head>

      {/* ---------- NAV ---------- */}
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            Hiring<span>Handoff</span>
          </div>
          <a className="nav-cta" href={CALENDLY_URL} target="_blank" rel="noreferrer">
            Book a call
          </a>
        </div>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="hero-inner">
            <h1>
              A working hiring system, built <em>with you</em> — not handed to you
              as a template.
            </h1>
            <p className="hero-sub">
              Most small businesses don&apos;t hire badly because they lack
              information. A search engine can produce a job description or an
              interview question in seconds. They hire badly because no one has
              sat down, looked at their last three hires, and built a system
              around what actually went wrong. That&apos;s the part that doesn&apos;t
              come free — and it&apos;s the part I install.
            </p>
            <div className="hero-ctas">
              <a className="btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a 20-min call
              </a>
              <a className="btn-secondary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                Message me on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ---------- THE MATH / ROI ---------- */}
        <section className="math">
          <div className="section-inner">
            <div className="section-kicker">The math</div>
            <h2>You&apos;re not paying for documents. You&apos;re paying to stop bleeding money on bad hires.</h2>
            <div className="math-grid">
              <div className="math-card">
                <div className="math-figure">$15–25K+</div>
                <div className="math-label">what a contingency agency charges for one hire</div>
                <div className="math-body">
                  Most agencies won&apos;t even take on a search below that
                  minimum — which means the businesses that need help the most
                  get turned away.
                </div>
              </div>
              <div className="math-card">
                <div className="math-figure">6–12 months</div>
                <div className="math-label">of drag from a single bad hire</div>
                <div className="math-body">
                  Lost productivity, a manager&apos;s time, team morale, and
                  eventually another search to fix the first one. A bad hire is
                  rarely just one bad hire.
                </div>
              </div>
              <div className="math-card math-card-accent">
                <div className="math-figure">$3,000–$9,000</div>
                <div className="math-label">to install a system you keep for every hire after</div>
                <div className="math-body">
                  One engagement. Not a retainer, not a subscription. You run
                  hire #2 and hire #10 on the same system, with no one in the
                  room but you.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WHAT'S ACTUALLY REPEATABLE ---------- */}
        <section className="system">
          <div className="section-inner">
            <div className="section-kicker">What you keep</div>
            <h2>The documents are the byproduct. The system is what runs on repeat.</h2>
            <p className="section-lead">
              A scorecard built once gets reused every time that role opens
              again. An ATS pipeline configured once runs in the background for
              years. This isn&apos;t a folder of templates you&apos;ll open once and
              forget — it&apos;s the machine your next ten hires run through.
            </p>
            <div className="system-grid">
              <div className="system-item">
                <div className="system-item-title">Scorecards, reused every hire</div>
                <div className="system-item-body">
                  Built once per role. Pulled out every time that role opens
                  again — six months from now or three years from now.
                </div>
              </div>
              <div className="system-item">
                <div className="system-item-title">An ATS that runs itself</div>
                <div className="system-item-body">
                  Stages, automated emails, and a careers page connection
                  configured once. No rebuilding required for hire #2 or #20.
                </div>
              </div>
              <div className="system-item">
                <div className="system-item-title">A repeatable interview process</div>
                <div className="system-item-body">
                  Who&apos;s in the room, what each person evaluates, how you
                  compare finalists. A process, not a one-time document.
                </div>
              </div>
              <div className="system-item">
                <div className="system-item-title">Templates that never get rewritten</div>
                <div className="system-item-body">
                  Rejection emails, offer letters, a sourcing guide for
                  whoever runs hiring day-to-day. Reused forever, not drafted
                  fresh every time.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="how">
          <div className="section-inner">
            <div className="section-kicker">How it works</div>
            <h2>Three steps. No playbook you have to follow on your own.</h2>
            <div className="how-steps">
              <div className="how-step">
                <div className="how-num">1</div>
                <div>
                  <div className="how-title">A real conversation about your last few hires</div>
                  <div className="how-body">
                    Not a questionnaire. A diagnosis of what actually broke —
                    where candidates dropped off, who really decided, what the
                    offer looked like versus the market.
                  </div>
                </div>
              </div>
              <div className="how-step">
                <div className="how-num">2</div>
                <div>
                  <div className="how-title">The system gets built alongside you</div>
                  <div className="how-body">
                    Scorecards, interview structure, job posts — specific to
                    your roles, not pulled from a generic library.
                  </div>
                </div>
              </div>
              <div className="how-step">
                <div className="how-num">3</div>
                <div>
                  <div className="how-title">You run your next search with it in hand</div>
                  <div className="how-body">
                    And I&apos;m there to answer what comes up — not gone the
                    moment the invoice clears.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ENGAGEMENT TIERS ---------- */}
        <section className="tiers" id="pricing">
          <div className="section-inner">
            <div className="section-kicker">The engagement</div>
            <h2>Three ways in, depending on where your hiring actually is.</h2>

            <div className="tier-grid">
              <div className="tier-card">
                <div className="tier-name">Foundation</div>
                <div className="tier-for">First real hiring process for a growing team</div>
                <div className="tier-price">$3,000</div>
                <ul>
                  <li>90-min diagnostic on your last 3 hires — what worked, what didn&apos;t</li>
                  <li>Scorecards built live for your top 2–3 roles</li>
                  <li>Rewritten job descriptions that convert</li>
                  <li>Structured behavioral questions per role</li>
                  <li>One walkthrough call to hand it off</li>
                </ul>
              </div>

              <div className="tier-card tier-card-featured">
                <div className="tier-badge">Most common</div>
                <div className="tier-name">Engine</div>
                <div className="tier-for">Regular hiring, no repeatable process yet</div>
                <div className="tier-price">$6,000</div>
                <ul>
                  <li>Everything in Foundation</li>
                  <li>Lightweight ATS configured and connected</li>
                  <li>Scorecards for every recurring role type</li>
                  <li>Interview panel structure and rejection/offer templates</li>
                  <li>Live 60–90 min manager training, recorded for reuse</li>
                  <li>2 weeks of support through your first live search</li>
                </ul>
              </div>

              <div className="tier-card">
                <div className="tier-name">Embedded</div>
                <div className="tier-for">Ready to hire now, want it proven live</div>
                <div className="tier-price">$9,000</div>
                <ul>
                  <li>Everything in Engine</li>
                  <li>Advisory support through your next live search (up to 6 hrs: kickoff, applicant review, 1–2 debriefs, offer review)</li>
                  <li>System stress-tested and refined on a real hire</li>
                  <li>Quality-of-hire check tied to that hire&apos;s 30- and 90-day mark</li>
                  <li>One optimization pass before your next opening</li>
                </ul>
              </div>
            </div>

            <div className="addons">
              <span className="addons-label">Add-ons</span>
              <span className="addon-item">
                AI-powered hiring workflows (auto-drafted outreach, resume flagging, rejection emails) — $750–$1,500
              </span>
              <span className="addon-item">
                Additional advisory hours — $250/hr, or a 5-hr block for $1,100
              </span>
            </div>
          </div>
        </section>

        {/* ---------- WHO IT'S FOR ---------- */}
        <section className="fit">
          <div className="section-inner fit-inner">
            <div className="fit-col">
              <div className="section-kicker">Who this is for</div>
              <ul className="fit-list">
                <li>10–75 employees, hiring a handful of roles a year</li>
                <li>Owner or office manager currently doing all the hiring</li>
                <li>Tired of gut-feel hires that don&apos;t work out</li>
                <li>Not ready for — or priced out of — a retained search firm</li>
              </ul>
            </div>
            <div className="fit-col">
              <div className="section-kicker">What this isn&apos;t</div>
              <ul className="fit-list fit-list-not">
                <li>Not candidate placement — you keep the keys when it ends</li>
                <li>Not a document library you&apos;ll open once and forget</li>
                <li>Not an ongoing retainer you have to keep paying for</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section className="about" id="about">
          <div className="section-inner about-inner">
            <img src="/jacob.jpg" alt="Jacob Merkley" className="about-photo" />
            <div>
              <div className="about-name">Jacob Merkley</div>
              <p className="about-bio">
                Jacob has spent 7+ years as an agency recruiter running 500+
                searches for companies ranging from mom-and-pop shops to
                publicly traded Fortune 500s — 140+ placements, $3.2M in
                career billings. He&apos;s seen exactly what breaks when a
                small business tries to hire without a real process, and
                exactly what fixes it. Bachelor&apos;s in Accounting, MBA.
              </p>
              <a className="about-linkedin" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="final-cta">
          <div className="section-inner final-cta-inner">
            <h2>Your next hire can run through a system, not a hunch.</h2>
            <div className="hero-ctas">
              <a className="btn-primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
                Book a 20-min call
              </a>
              <a className="btn-secondary" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                Message me on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-inner">
          <div>Inboxx Digital LLC dba Hiring Handoff.</div>
          <div>(480) 500-6642</div>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --cream: #f6f4ee;
          --ink: #23291f;
          --ink-soft: #4b4e45;
          --ink-faint: #7a7d71;
          --line: #d8d3c4;
          --amber: #8a6d3b;
          --amber-light: #f0e6d2;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: var(--cream);
          color: var(--ink);
          font-family: 'Helvetica Neue', Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1,
        h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 400;
          color: var(--ink);
          margin: 0;
        }

        p {
          margin: 0;
        }

        a {
          text-decoration: none;
        }

        .section-inner {
          max-width: 980px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-kicker {
          font-size: 12px;
          letter-spacing: 0.3px;
          color: var(--amber);
          font-weight: 700;
          margin-bottom: 14px;
        }

        /* ---------- NAV ---------- */
        .nav {
          border-bottom: 2px solid var(--ink);
          background: var(--cream);
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .nav-inner {
          max-width: 980px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--ink);
        }
        .brand span {
          color: var(--amber);
        }
        .nav-cta {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          border: 1.5px solid var(--ink);
          padding: 9px 18px;
          border-radius: 3px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .nav-cta:hover {
          background: var(--ink);
          color: var(--cream);
        }

        /* ---------- HERO ---------- */
        .hero {
          padding: 84px 0 64px;
        }
        .hero-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .hero h1 {
          font-size: 40px;
          line-height: 1.28;
          max-width: 680px;
        }
        .hero h1 em {
          font-style: normal;
          color: var(--amber);
        }
        .hero-sub {
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 620px;
          margin-top: 24px;
        }
        .hero-ctas {
          display: flex;
          gap: 14px;
          margin-top: 34px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--ink);
          color: var(--cream);
          font-size: 15px;
          font-weight: 600;
          padding: 14px 26px;
          border-radius: 3px;
          transition: opacity 0.15s ease;
        }
        .btn-primary:hover {
          opacity: 0.85;
        }
        .btn-secondary {
          border: 1.5px solid var(--ink);
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
          padding: 14px 26px;
          border-radius: 3px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .btn-secondary:hover {
          background: var(--ink);
          color: var(--cream);
        }

        /* ---------- MATH / ROI ---------- */
        .math {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .math h2 {
          font-size: 28px;
          line-height: 1.35;
          max-width: 680px;
          margin-bottom: 40px;
        }
        .math-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .math-card {
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 26px 22px;
        }
        .math-card-accent {
          border-color: var(--amber);
          background: var(--amber-light);
        }
        .math-figure {
          font-family: Georgia, serif;
          font-size: 27px;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .math-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--ink-soft);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .math-body {
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--ink-soft);
        }

        /* ---------- SYSTEM ---------- */
        .system {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .system h2 {
          font-size: 28px;
          line-height: 1.35;
          max-width: 680px;
        }
        .section-lead {
          font-size: 15.5px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 640px;
          margin-top: 16px;
          margin-bottom: 40px;
        }
        .system-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 40px;
        }
        .system-item-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .system-item-body {
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--ink-soft);
        }

        /* ---------- HOW IT WORKS ---------- */
        .how {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .how h2 {
          font-size: 28px;
          line-height: 1.35;
          max-width: 680px;
          margin-bottom: 40px;
        }
        .how-steps {
          display: flex;
          flex-direction: column;
          gap: 28px;
          max-width: 700px;
        }
        .how-step {
          display: flex;
          gap: 20px;
        }
        .how-num {
          font-family: Georgia, serif;
          font-size: 20px;
          color: var(--amber);
          width: 32px;
          flex-shrink: 0;
        }
        .how-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .how-body {
          font-size: 14px;
          line-height: 1.55;
          color: var(--ink-soft);
        }

        /* ---------- TIERS ---------- */
        .tiers {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .tiers h2 {
          font-size: 28px;
          line-height: 1.35;
          max-width: 680px;
          margin-bottom: 40px;
        }
        .tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .tier-card {
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 26px 22px 28px;
          position: relative;
        }
        .tier-card-featured {
          border-color: var(--ink);
          border-width: 2px;
        }
        .tier-badge {
          position: absolute;
          top: -12px;
          left: 22px;
          background: var(--ink);
          color: var(--cream);
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 3px;
        }
        .tier-name {
          font-size: 17px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .tier-for {
          font-size: 13px;
          color: var(--ink-faint);
          line-height: 1.4;
          min-height: 36px;
          margin-bottom: 10px;
        }
        .tier-price {
          font-family: Georgia, serif;
          font-size: 30px;
          color: var(--ink);
          margin-bottom: 18px;
        }
        .tier-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .tier-card li {
          font-size: 13.5px;
          line-height: 1.5;
          color: var(--ink-soft);
          padding-left: 16px;
          position: relative;
          margin-bottom: 9px;
        }
        .tier-card li:before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--amber);
        }

        .addons {
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
          display: flex;
          flex-wrap: wrap;
          gap: 6px 24px;
          align-items: baseline;
        }
        .addons-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: var(--amber);
        }
        .addon-item {
          font-size: 13.5px;
          color: var(--ink-soft);
        }

        /* ---------- FIT ---------- */
        .fit {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .fit-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .fit-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .fit-list li {
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--ink-soft);
          padding-left: 16px;
          position: relative;
          margin-bottom: 10px;
        }
        .fit-list li:before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--amber);
        }

        /* ---------- ABOUT ---------- */
        .about {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .about-inner {
          display: flex;
          gap: 36px;
          align-items: flex-start;
        }
        .about-photo {
          width: 132px;
          height: 132px;
          object-fit: cover;
          border-radius: 4px;
          flex-shrink: 0;
          background: var(--amber-light);
        }
        .about-name {
          font-family: Georgia, serif;
          font-size: 22px;
          color: var(--ink);
          margin-bottom: 12px;
        }
        .about-bio {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 560px;
          margin-bottom: 16px;
        }
        .about-linkedin {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          border-bottom: 1.5px solid var(--amber);
          padding-bottom: 2px;
        }

        /* ---------- FINAL CTA ---------- */
        .final-cta {
          padding: 72px 0 80px;
          border-top: 1px solid var(--line);
        }
        .final-cta-inner {
          text-align: center;
        }
        .final-cta h2 {
          font-size: 30px;
          line-height: 1.3;
          margin: 0 auto 30px;
          max-width: 560px;
        }
        .final-cta .hero-ctas {
          justify-content: center;
        }

        /* ---------- FOOTER ---------- */
        .footer {
          border-top: 2px solid var(--ink);
          padding: 22px 0;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          font-size: 12.5px;
          color: var(--ink-faint);
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 760px) {
          .hero h1 {
            font-size: 30px;
          }
          .math-grid,
          .tier-grid {
            grid-template-columns: 1fr;
          }
          .system-grid {
            grid-template-columns: 1fr;
          }
          .fit-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-inner {
            flex-direction: column;
          }
          .footer-inner {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </>
  );
}
