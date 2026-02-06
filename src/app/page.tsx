import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="logo">SHEETSHOT</div>

        <a href="#waitlist" className="btnSmall">
          Get Early Access
        </a>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero">
          <h1>Turn screenshots into spreadsheets.</h1>

          <p className="heroSub">
            Take a screenshot of numbers, share it to SheetShot, and instantly
            get totals, averages, or export to CSV or Google Sheets. No typing required.
          </p>

          <div className="ctaRow">
            <a id="waitlist" className="btnPrimary">
              Join Early Access
            </a>

            <span className="launchNote">
              Launching first on iOS
            </span>
          </div>

          {/* HERO IMAGE */}
          <div className="heroImageWrap">
            <Image
              src="/hero.jpg"
              alt="SheetShot app preview showing screenshot to spreadsheet conversion"
              width={1228}
              height={768}
              priority
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="features">
          <div className="grid">
            <div className="card">
              <span className="featureTag">Step 01</span>
              <h3>Snap & Share</h3>
              <p>
                Don’t open an app. Just take a screenshot and tap Share directly
                from the iOS preview.
              </p>
            </div>

            <div className="card">
              <span className="featureTag">Step 02</span>
              <h3>Extract & Compute</h3>
              <p>
                On-device OCR identifies numbers instantly. Get totals without
                typing a single digit.
              </p>
            </div>

            <div className="card">
              <span className="featureTag">Step 03</span>
              <h3>Export Anywhere</h3>
              <p>
                Send your data directly to Google Sheets or export a clean CSV in
                seconds.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} SheetShot. Built for speed. No tracking.
      </footer>
    </>
  );
}
