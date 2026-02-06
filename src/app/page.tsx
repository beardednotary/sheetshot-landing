import RevealObserver from "./reveal-observer";

export default function Page() {
  return (
    <>
      <RevealObserver />

      <nav>
        <div className="logo">SHEETSHOT</div>
        <a
          href="#download"
          className="btn btnSmall"
        >
          Get App
        </a>
      </nav>

      <main>
        <section className="hero reveal">
          <h1>Screenshots to Spreadsheets.</h1>
          <p>
            Take a screenshot of numbers, share it to SheetShot, and instantly
            get totals, averages, or a CSV export.
          </p>

          {/* If you don’t have an App Store link yet, change this to Join Waitlist */}
          <a id="download" href="#" className="btn">
            Download for iOS
          </a>
        </section>

        <section id="how-it-works">
          <div className="grid">
            <div className="card reveal">
              <span className="featureTag">Step 01</span>
              <h3>Snap &amp; Share</h3>
              <p>
                Don&apos;t open an app. Just take a screenshot and tap
                &quot;Share&quot; directly from the iOS preview. Select
                SheetShot.
              </p>
            </div>

            <div className="card reveal">
              <span className="featureTag">Step 02</span>
              <h3>Extract &amp; Compute</h3>
              <p>
                On-device OCR identifies numbers instantly. Get the sum, count,
                and average without typing a single digit.
              </p>
            </div>

            <div className="card reveal">
              <span className="featureTag">Step 03</span>
              <h3>Export Anywhere</h3>
              <p>
                Send your data directly to Google Sheets or export a clean CSV.
                Perfect for expenses, paychecks, and totals.
              </p>
            </div>
          </div>
        </section>

        <section className="highlight reveal">
          <span className="featureTag">Special Feature</span>
          <h2>The &quot;Sticky&quot; Variable</h2>
          <p className="highlightText">
            Frequently add a recurring number like an{" "}
            <span className="stickyHighlight">hourly rate</span> or{" "}
            <span className="stickyHighlight">fixed fee</span>? Save it once and
            apply it to any scan with one tap.
          </p>
        </section>
      </main>

      <footer>&copy; {new Date().getFullYear()} SheetShot. Built for speed. No tracking.</footer>
    </>
  );
}
