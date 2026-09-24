const CALENDLY_URL = "https://calendly.com/YOUR-CALENDLY-HANDLE/hireframing-intro"; // TODO: replace with your real Calendly link
const LINKEDIN_URL = "https://www.linkedin.com/in/jacobmerkley/";

export default function Home() {
  return (
    <>
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
        <section className="hero band-dark">
          <div className="hero-inner">
            <h1>
              A working hiring system, built <em>with you</em> — not handed to
              you as a template.
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
            <div className="section-head">
              <div className="section-kicker">The math</div>
              <h2>A bad hire costs more than this ever will.</h2>
            </div>
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
        <section className="system band-tint">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-kicker">What you keep</div>
              <h2>You&apos;ll use this on hire #2, hire #10, and every one after.</h2>
              <p className="section-lead">
                A scorecard built once gets reused every time that role opens
                again. An ATS pipeline configured once runs in the background
                for years. None of it gets rebuilt from scratch next time
                someone quits.
              </p>
            </div>
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
                  compare finalists — built once, used every time.
                </div>
              </div>
              <div className="system-item">
                <div className="system-item-title">Messaging you never draft twice</div>
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
        <section className="how band-alt">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-kicker">How it works</div>
              <h2>Three steps. No playbook you have to follow on your own.</h2>
            </div>
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
            <div className="section-head">
              <div className="section-kicker">The engagement</div>
              <h2>Pick the one that matches where you&apos;re stuck.</h2>
            </div>

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
                  <li>Interview panel structure and rejection/offer messaging</li>
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
              <div className="addons-title">Add-ons</div>
              <div className="addon-item">
                AI-powered hiring workflows (auto-drafted outreach, resume flagging, rejection emails) — $750–$1,500
              </div>
              <div className="addon-item">
                Additional advisory hours — $250/hr, or a 5-hr block for $1,100
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WHO IT'S FOR ---------- */}
        <section className="fit band-alt">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-kicker">Fit check</div>
              <h2>Built for the businesses agencies turn away.</h2>
            </div>
            <div className="fit-inner">
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
                  <li>Not a binder that collects dust after week one</li>
                  <li>Not an ongoing retainer you have to keep paying for</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section className="about" id="about">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-kicker">About</div>
              <h2>Built by someone who&apos;s done 500+ of these.</h2>
            </div>
            <div className="about-inner">
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
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="final-cta band-dark">
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
    </>
  );
}
