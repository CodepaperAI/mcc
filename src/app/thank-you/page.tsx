import type { Metadata } from "next";
import ThankYouEvent from "@/components/thank-you-event";

export const metadata: Metadata = {
  title: "Thank You | Mississauga Convention Centre",
  description:
    "Thank you for contacting Mississauga Convention Centre about your wedding inquiry.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <>
      <ThankYouEvent />
      <main className="thank-you-page">
        <section className="thank-you-hero">
          <div className="container thank-you-shell">
            <div className="thank-you-card">
              <img
                className="thank-you-logo"
                src="https://mississaugaconvention.com/wp-content/uploads/2024/03/MCC-new.png"
                alt="Mississauga Convention Centre logo"
              />
              <span className="kicker">Inquiry Received</span>
              <h1>Thank you for reaching out.</h1>
              <p className="thank-you-copy">
                Your wedding inquiry is on its way to the MCC team. Someone will
                review your details and follow up with your tailored quote as
                quickly as possible.
              </p>

              <div className="thank-you-actions">
                <a className="btn btn-solid" href="tel:9055641920">
                  Call (905) 564-1920
                </a>
                <a
                  className="btn btn-light"
                  href="https://mississaugaconvention.com/virtual-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Take the Virtual Tour
                </a>
              </div>

              <div className="thank-you-notes">
                <article>
                  <h2>What happens next</h2>
                  <p>
                    Expect a follow-up from MCC with quote details, package
                    guidance, and next steps for booking a venue tour.
                  </p>
                </article>
                <article>
                  <h2>Need a faster answer?</h2>
                  <p>
                    Call the venue directly Monday to Saturday, 9 AM to 6 PM,
                    and the team can help with availability, guest counts, and
                    package direction right away.
                  </p>
                </article>
              </div>

              <a className="text-link thank-you-link" href="/">
                Back to the wedding landing page
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
