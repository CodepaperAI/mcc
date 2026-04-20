"use client";

import { useEffect, useState } from "react";

type Stat = {
  value: string;
  label: string;
  copy: string;
};

type Feature = {
  title: string;
  copy: string;
};

type GalleryItem = {
  image: string;
  alt: string;
  caption: string;
  className?: string;
};

type PackageTier = {
  key: string;
  tier: string;
  name: string;
  price: string;
  intro: string;
  ideal: string;
  featured?: boolean;
  features: string[];
};

type Review = {
  quote: string;
  name: string;
  role: string;
};

type Faq = {
  question: string;
  answer: string;
};

const stats: Stat[] = [
  {
    value: "56+",
    label: "Years Hosting Weddings",
    copy: "A long-standing legacy of celebrations, service, and hospitality excellence."
  },
  {
    value: "7",
    label: "Elegant Halls",
    copy: "Beautiful spaces sized for intimate ceremonies or grand receptions."
  },
  {
    value: "2,280",
    label: "Guest Capacity",
    copy: "From 50 guests to full-scale wedding events, the venue scales with you."
  },
  {
    value: "700",
    label: "On-Site Parking Spots",
    copy: "Easy arrival for family and guests, just minutes from Pearson Airport."
  }
];

const features: Feature[] = [
  {
    title: "All-inclusive packages",
    copy: "Clearer quoting with venue rental, in-house catering, decor baseline, AV support, and wedding coordination already built into the conversation."
  },
  {
    title: "In-house culinary team",
    copy: "From plated dinners to multi-cuisine buffets, menus are prepared in-house for better quality control and smoother event-day timing."
  },
  {
    title: "Dedicated wedding coordinator",
    copy: "Your coordinator helps manage the booking journey, logistics, timeline, setup, and day-of flow so you can stay present."
  },
  {
    title: "Outdoor patio ceremonies",
    copy: "Open-air ceremony and cocktail-hour options connect naturally with the indoor reception spaces for a full-day experience."
  },
  {
    title: "Cultural menus and traditions",
    copy: "MCC regularly hosts South Asian, Pakistani Halal, Sri Lankan, Middle Eastern, and multicultural weddings with care and familiarity."
  },
  {
    title: "Flexible halls from 50 to 2,280",
    copy: "The venue can feel intimate or grand without losing polish, which is critical when your guest list or event format evolves."
  }
];

const galleryItems: GalleryItem[] = [
  {
    image:
      "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre-JDass-Corp-slide5.jpg",
    alt: "Elegant wedding reception hall with floral head table",
    caption:
      "Reception hall with floral head table and warm uplighting",
    className: "large"
  },
  {
    image:
      "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre-JDass-Corp-ST-Wedding-381.jpg",
    alt: "Wedding celebration with guests dancing",
    caption:
      "First dance energy with a full room celebrating around you",
    className: "tall"
  },
  {
    image:
      "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre-JDass-Corp-slide1-scaled.jpg",
    alt: "Luxury banquet hall interior",
    caption: "Grand arrival spaces with premium finishes"
  },
  {
    image:
      "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre-JDass-Corp-sweets.jpg",
    alt: "Elegant wedding sweets display",
    caption:
      "Styled sweets and dessert tables for memorable finishing touches"
  },
  {
    image:
      "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre_JDass-Corp_slide04.jpg",
    alt: "Outdoor ceremony setup at Mississauga Convention Centre",
    caption:
      "Outdoor patio ceremonies with seamless indoor reception flow",
    className: "wide"
  },
  {
    image:
      "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre-JDass-Corp-slide4.jpg",
    alt: "Wedding reception interior at Mississauga Convention Centre",
    caption: "Reception styling that scales from intimate to grand"
  }
];

const packages: PackageTier[] = [
  {
    key: "classic",
    tier: "Essential",
    name: "The Classic",
    price: "Starting from custom quote",
    intro:
      "For smaller to mid-sized celebrations that want MCC hospitality, a polished room, and the core essentials handled well.",
    ideal: "Ideal for 50 to 200 guests",
    features: [
      "Venue rental for a standard hall",
      "Multi-course plated dinner or buffet",
      "Standard linens and chair covers",
      "Basic AV with microphones and speakers",
      "Dance floor, staging, and dedicated coordinator"
    ]
  },
  {
    key: "celebration",
    tier: "Signature",
    name: "The Celebration",
    price: "Starting from custom quote",
    intro:
      "The strongest fit for most wedding landing-page traffic: elevated decor, richer culinary presentation, and the details couples ask about most often.",
    ideal: "Ideal for 200 to 500 guests",
    featured: true,
    features: [
      "Everything in The Classic",
      "Premium multi-cuisine menu options",
      "Upgraded linens and centerpieces",
      "Uplighting package and bridal suite access",
      "Champagne toast and late-night snack station"
    ]
  },
  {
    key: "grand",
    tier: "Luxe",
    name: "The Grand",
    price: "Starting from custom quote",
    intro:
      "Built for larger receptions and highly personalized celebrations that need more scale, more styling, and more planning support.",
    ideal: "Ideal for 500 to 2,280 guests",
    features: [
      "Everything in The Celebration",
      "Largest hall and premium room placement",
      "Full draping and ceiling decor enhancements",
      "Outdoor patio ceremony integration",
      "Custom floral direction and extended planning support"
    ]
  }
];

const reviews: Review[] = [
  {
    quote:
      "I cannot express enough how incredible our experience was with MCC for our wedding. From start to finish, the team was exceptionally helpful and on the ball. It truly felt like a dream come true.",
    name: "Alexia P.",
    role: "Wedding at MCC"
  },
  {
    quote:
      "We recently held our wedding at Mississauga Convention Centre and it was an absolutely perfect experience from start to finish. The food was delicious and the service was impeccable.",
    name: "Kate C.",
    role: "Wedding at MCC"
  },
  {
    quote:
      "The spacious halls and well-maintained facilities made hosting effortless. The staff were professional and attentive, which turned a large gathering into a smooth and stress-free celebration.",
    name: "Alaleh",
    role: "Celebration at MCC"
  }
];

const faqs: Faq[] = [
  {
    question: "How far in advance should I book my wedding?",
    answer:
      "We recommend booking 12 to 18 months ahead, especially for prime Saturday dates in May through October. If your timeline is shorter, contact MCC anyway because the team often has availability and can support quick-turn planning."
  },
  {
    question: "What is included in the all-inclusive wedding packages?",
    answer:
      "Every package includes venue rental, multi-course in-house catering, decor baseline, AV support, dance floor, staging, and a dedicated wedding coordinator. Higher tiers add enhancements such as uplighting, draping, bridal suite access, patio ceremony options, and more."
  },
  {
    question: "Can you accommodate cultural and religious wedding ceremonies?",
    answer:
      "Yes. MCC regularly hosts South Asian, Pakistani Halal, Sri Lankan, Middle Eastern, and multicultural weddings. The team understands timing, family flow, and menu needs that vary by tradition."
  },
  {
    question: "What guest counts can MCC host?",
    answer:
      "MCC can host weddings from intimate 50-person events to large celebrations of 2,280 guests across 7 halls. Most weddings land somewhere in between, and the layouts are flexible enough to keep the room feeling right-sized."
  },
  {
    question: "Do you offer outdoor ceremonies?",
    answer:
      "Yes. The outdoor patio can be used for ceremonies, cocktail hour, or portraits, then connected smoothly back into the indoor reception for a weather-safer full-day flow."
  },
  {
    question: "Do you provide in-house catering?",
    answer:
      "Yes. All catering is prepared in-house by the culinary team. MCC offers plated service, buffets, stations, and cultural menus across South Asian, Halal, Middle Eastern, Sri Lankan, Caribbean, Continental, and custom fusion options."
  },
  {
    question: "Can I tour the venue before booking?",
    answer:
      "Absolutely. Book a free in-person tour or explore the virtual tour online. It is one of the best ways to confirm the right hall, package direction, and planning fit before locking in the date."
  }
];

const heroSchema = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Mississauga Convention Centre",
  description:
    "Luxury wedding venue in Mississauga with 7 elegant halls, in-house catering, outdoor patio ceremonies, and tailored wedding packages.",
  image:
    "https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre_JDass-Corp_Banner-1_NEW.jpg",
  url: "https://weddings.mississaugaconvention.com/",
  telephone: "+1-905-564-1920",
  priceRange: "$$-$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "75 Derry Rd W",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    postalCode: "L5W 1G3",
    addressCountry: "CA"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function WeddingLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen || lightboxIndex !== null);
    return () => document.body.classList.remove("menu-open");
  }, [lightboxIndex, menuOpen]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Mississauga Convention Centre wedding landing page">
            <img
              src="https://mississaugaconvention.com/wp-content/uploads/2024/03/MCC-new.png"
              alt="Mississauga Convention Centre logo"
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            <a href="#venue">Venue</a>
            <a href="#gallery">Gallery</a>
            <a href="#packages">Packages</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="phone-link" href="tel:9055641920">
              Call (905) 564-1920
            </a>
            <a className="btn btn-solid" href="#quote">
              Request a Free Quote
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobilePanel"
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-panel${menuOpen ? " open" : ""}`} id="mobilePanel">
          <nav aria-label="Mobile">
            {[
              { href: "#venue", label: "Venue" },
              { href: "#gallery", label: "Gallery" },
              { href: "#packages", label: "Packages" },
              { href: "#faq", label: "FAQ" },
              { href: "#quote", label: "Request a Free Quote" }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="panel-phone" href="tel:9055641920" onClick={() => setMenuOpen(false)}>
              Call (905) 564-1920
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-slides" aria-hidden="true">
            <div className="hero-slide slide-one" />
            <div className="hero-slide slide-two" />
            <div className="hero-slide slide-three" />
          </div>
          <div className="hero-overlay" />

          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="kicker">Mississauga&apos;s Premier Wedding Venue</span>
              <h1>Where your wedding becomes a story guests never forget.</h1>
              <p>
                7 elegant halls. Up to 2,280 guests. 56 years of celebrations.
                One unforgettable day designed with warmth, polish, and the
                confidence of a venue that knows how to host once-in-a-lifetime
                moments.
              </p>

              <div className="hero-actions">
                <a className="btn btn-solid" href="#quote">
                  Request a Free Quote
                </a>
                <a
                  className="btn btn-outline"
                  href="https://mississaugaconvention.com/virtual-tour/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Take the Virtual Tour
                </a>
              </div>

              <div className="hero-proof">
                <span className="hero-stars">*****</span>
                <span>4.8 average on Google | Trusted by 1,000+ couples across the GTA</span>
              </div>
            </div>

            <aside className="hero-panel reveal" aria-label="Venue highlights">
              <p className="panel-label">A Tradition of Unparalleled Service</p>
              <h2>Luxury that still feels effortless.</h2>
              <p>
                Elegant halls, refined in-house hospitality, and a team
                experienced in grand celebrations, cultural traditions, and
                flawless wedding-day flow.
              </p>

              <ul className="panel-stats">
                <li>
                  <strong>7</strong>
                  <span>Elegant banquet halls with flexible layouts and room to personalize.</span>
                </li>
                <li>
                  <strong>56+</strong>
                  <span>Years of commitment to perfection in hospitality across the GTA.</span>
                </li>
                <li>
                  <strong>24h</strong>
                  <span>Fast custom quote turnaround once you share your date and guest count.</span>
                </li>
              </ul>

              <a className="panel-link" href="#packages">
                Compare the wedding packages
              </a>
            </aside>
          </div>
        </section>

        <section className="trust-strip" aria-label="Quick venue facts">
          <div className="container trust-grid">
            {stats.map((stat) => (
              <article className="trust-card reveal" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="venue">
          <div className="container story-grid">
            <div className="story-visual reveal">
              <div className="story-photo-primary">
                <img
                  src="https://mississaugaconvention.com/wp-content/uploads/2025/10/Mississauga-Convention-Centre-JDass-Corp-slide5.jpg"
                  alt="Wedding reception hall with a floral head table and elegant lighting"
                />
              </div>
              <div className="story-photo-secondary">
                <img
                  src="https://mississaugaconvention.com/wp-content/uploads/2025/09/Mississauga-Convention-Centre-JDass-Corp-Outdoor-Patio1.jpg"
                  alt="Outdoor patio ceremony area at Mississauga Convention Centre"
                />
              </div>
              <div className="story-badge">
                <strong>Designed for celebration</strong>
                <p>
                  Indoor elegance, outdoor ceremony options, and experienced
                  planning support from the first walk-through to the final
                  dance.
                </p>
              </div>
            </div>

            <div className="story-copy reveal">
              <span className="kicker">Your Vision, Our Expertise</span>
              <h2>Everything your wedding day needs under one roof.</h2>
              <p>
                From the first venue tour to the last dance, MCC brings together
                the space, culinary team, coordination, and hospitality needed
                to keep your day beautifully organized and deeply personal.
              </p>

              <div className="story-points">
                <article className="story-point">
                  <h3>One coordinated experience</h3>
                  <p>
                    Venue, catering, decor direction, AV support, and planning
                    guidance come together in one polished flow instead of
                    scattered vendors and overlapping timelines.
                  </p>
                </article>
                <article className="story-point">
                  <h3>Food your guests remember</h3>
                  <p>
                    In-house chefs create plated dinners, buffets, and cultural
                    menus that feel celebratory, generous, and tailored to the
                    traditions that matter to your families.
                  </p>
                </article>
                <article className="story-point">
                  <h3>Built for both elegance and scale</h3>
                  <p>
                    Whether you are planning a 120-guest reception or a 1,000+
                    guest event, the halls, parking, and service model are ready
                    for it.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section features">
          <div className="container">
            <div className="section-intro center reveal">
              <span className="kicker">Why Couples Choose MCC</span>
              <h2 className="section-title">Confident planning. Elegant execution.</h2>
              <p className="section-text">
                This page is built for couples comparing venues seriously. Here
                is what helps MCC stand apart when you are looking for beauty,
                practicality, and a team that understands complex celebrations.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-card reveal" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="container">
            <div className="section-intro center reveal">
              <span className="kicker">Moments of Redefined Luxury</span>
              <h2 className="section-title">A glimpse into your wedding day.</h2>
              <p className="section-text">
                Ceremonies, ballroom reveals, first dances, patio vows, dessert
                moments, and elegant tablescapes. Everything here is pulled from
                the live MCC visual language so the page feels like the parent
                brand.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <button
                  key={item.image}
                  className={`gallery-card reveal${item.className ? ` ${item.className}` : ""}`}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img src={item.image} alt={item.alt} />
                  <span>{item.caption}</span>
                </button>
              ))}
            </div>

            <div className="gallery-footer reveal">
              <a
                className="text-link"
                href="https://mississaugaconvention.com/virtual-tour/"
                target="_blank"
                rel="noreferrer"
              >
                Take the full virtual tour
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="container">
            <div className="section-intro center reveal">
              <span className="kicker">All-Inclusive Wedding Packages</span>
              <h2 className="section-title">Transparent packages. No surprises.</h2>
              <p className="section-text">
                Every package includes venue rental, multi-course in-house
                catering, decor baseline, AV support, and a dedicated wedding
                coordinator. Final pricing should be confirmed before publishing
                live pricing, so this design keeps the offer conversion-friendly
                without inventing numbers.
              </p>
            </div>

            <div className="packages-grid">
              {packages.map((item) => (
                <article
                  key={item.key}
                  className={`package-card reveal${item.featured ? " featured" : ""}`}
                >
                  {item.featured ? <span className="package-badge">Most Popular</span> : null}
                  <p className="package-tier">{item.tier}</p>
                  <h3 className="package-card-title">{item.name}</h3>
                  <p className="package-price">{item.price}</p>
                  <p>{item.intro}</p>
                  <ul className="package-features">
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className="package-footnote">{item.ideal}</p>
                  <a
                    className={`btn ${item.featured ? "btn-solid" : "btn-light"}`}
                    href="#quote"
                    onClick={() => setSelectedPackage(item.key)}
                  >
                    Get this quote
                  </a>
                </article>
              ))}
            </div>

            <p className="packages-note reveal">
              Every wedding is different. Tell MCC your date, guest count, and
              priorities, and the team can build a better-fit proposal within 24
              hours.
            </p>
          </div>
        </section>

        <section className="section journey">
          <div className="container">
            <div className="journey-shell">
              <div className="section-intro center reveal">
                <span className="kicker">A Simple Path to Your Perfect Day</span>
                <h2 className="section-title">
                  From first tour to &quot;I do&quot; - here is how it works.
                </h2>
                <p className="section-text">
                  This section reduces friction for paid traffic. The goal is to
                  make the process feel easy, guided, and obvious.
                </p>
              </div>

              <div className="journey-steps">
                <article className="journey-step reveal">
                  <strong>01</strong>
                  <h3>Get your free quote</h3>
                  <p>
                    Share your date, guest count, and wedding vision. MCC sends
                    a custom quote within 24 hours with no pressure and no
                    obligation.
                  </p>
                </article>
                <article className="journey-step reveal">
                  <strong>02</strong>
                  <h3>Tour the venue</h3>
                  <p>
                    Walk the halls in person or virtually, meet the team, review
                    menu direction, and see which room and package fit your day
                    best.
                  </p>
                </article>
                <article className="journey-step reveal">
                  <strong>03</strong>
                  <h3>Book your date</h3>
                  <p>
                    Once the fit feels right, lock in the date, finalize the
                    agreement, and move into planning with a team used to complex
                    wedding logistics.
                  </p>
                </article>
              </div>

              <div className="journey-footer reveal">
                <a className="text-link" href="#quote">
                  Start with a free quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section reviews">
          <div className="container">
            <div className="section-intro center reveal">
              <span className="kicker">Echoes of Unforgettable Moments</span>
              <h2 className="section-title">From our couples.</h2>
              <p className="section-text">
                These testimonials are drawn from the live MCC site and edited
                lightly for landing-page readability while preserving the
                original sentiment.
              </p>
            </div>

            <div className="review-score reveal">
              <span>*****</span>
              <span>4.8 on Google | 200+ verified reviews</span>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card reveal" key={review.name}>
                  <div className="review-mark">&quot;</div>
                  <p>{review.quote}</p>
                  <div className="review-meta">
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-shell">
            <aside className="faq-side reveal">
              <span className="kicker">Planning an Unforgettable Wedding?</span>
              <h2 className="section-title">Questions couples ask before they book.</h2>
              <p className="section-text">
                The page handles the most common objections before they become
                drop-off points: availability, cultural fit, guest count,
                catering, outdoor options, and what happens after the inquiry.
              </p>
              <ul>
                <li>Clarifies what is included in the packages.</li>
                <li>Shows MCC can handle cultural and religious wedding needs.</li>
                <li>Reinforces both intimate and high-capacity hosting.</li>
                <li>Reduces friction around tours, catering, and next steps.</li>
              </ul>
            </aside>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const open = activeFaq === index;
                return (
                  <article className={`faq-item reveal${open ? " open" : ""}`} key={faq.question}>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={open}
                      onClick={() => setActiveFaq(open ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon" aria-hidden="true" />
                    </button>
                    <div className="faq-answer">
                      <div className="faq-answer-inner">{faq.answer}</div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section cta-band" id="quote">
          <div className="container cta-grid">
            <div className="cta-copy reveal">
              <span className="kicker">Request Your Free Quote</span>
              <h2 className="section-title">Let&apos;s plan your perfect day.</h2>
              <p>
                Tell MCC a bit about your wedding - your date, guest count, and
                priorities - and the team can send back a tailored quote within
                24 hours. No pressure. No obligation.
              </p>

              <ul className="cta-trust">
                <li>24-hour quote turnaround</li>
                <li>No obligation while you compare options</li>
                <li>Dedicated coordinator from the beginning</li>
                <li>56 years of event and wedding hospitality experience</li>
              </ul>

              <div className="cta-callout">
                <strong>Prefer to talk?</strong>
                <span>
                  Call <a href="tel:9055641920">(905) 564-1920</a> | Mon-Sat, 9 AM-6 PM
                </span>
              </div>
            </div>

            <div className="form-shell reveal">
              {!formSubmitted ? (
                <form
                  id="quoteForm"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <h3>Request a Free Quote</h3>
                  <p className="form-intro">
                    We will get back to you within 24 hours with a custom quote
                    tailored to your wedding.
                  </p>

                  <input type="hidden" name="source" value="wedding-lp-google-ads" />
                  <input type="hidden" name="packagePrefill" value={selectedPackage} />

                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="fullName">Full Name *</label>
                      <input id="fullName" name="fullName" type="text" required placeholder="e.g. Priya Patel" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="(416) 555-1234" />
                    </div>
                    <div className="field">
                      <label htmlFor="weddingDate">Wedding Date</label>
                      <input id="weddingDate" name="weddingDate" type="date" />
                    </div>
                    <div className="field full">
                      <label htmlFor="guestCount">Estimated Guest Count</label>
                      <select id="guestCount" name="guestCount" defaultValue="">
                        <option value="">Select a range...</option>
                        <option>50-150</option>
                        <option>150-300</option>
                        <option>300-500</option>
                        <option>500-1,000</option>
                        <option>1,000+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="packageInterest">Package of Interest</label>
                      <select
                        id="packageInterest"
                        name="packageInterest"
                        value={selectedPackage}
                        onChange={(event) => setSelectedPackage(event.target.value)}
                      >
                        <option value="">Not sure yet</option>
                        {packages.map((item) => (
                          <option key={item.key} value={item.key}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="vision">Tell us about your wedding vision</label>
                      <textarea
                        id="vision"
                        name="vision"
                        placeholder="Tell us about traditions, menu needs, guest mix, or any must-have details."
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="referral">How did you hear about us?</label>
                      <select id="referral" name="referral" defaultValue="">
                        <option value="">Select...</option>
                        <option>Google Search</option>
                        <option>Friend or Family</option>
                        <option>Social Media</option>
                        <option>Attended an Event</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <label className="consent">
                    <input type="checkbox" required />
                    <span>
                      I agree to be contacted by Mississauga Convention Centre
                      about my wedding inquiry.
                    </span>
                  </label>

                  <button className="btn btn-solid form-submit" type="submit">
                    Request My Free Quote
                  </button>
                  <p className="form-privacy">
                    We only use your information to send your quote. No spam. No sharing.
                  </p>
                </form>
              ) : (
                <div className="form-success" id="formSuccess">
                  <div className="form-success-mark">sent</div>
                  <h4>Thank you.</h4>
                  <p>
                    Your inquiry has been captured for this prototype
                    experience. Wire the form to MCC&apos;s CRM or lead endpoint
                    before launch, and the page is ready to serve as the branded
                    landing page design.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="https://mississaugaconvention.com/wp-content/uploads/2024/03/MCC-new.png"
                alt="Mississauga Convention Centre logo"
              />
              <p>Crafting Events. Creating Memories.</p>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>
              <ul>
                <li>
                  <a href="https://mississaugaconvention.com/" target="_blank" rel="noreferrer">
                    Main Site
                  </a>
                </li>
                <li>
                  <a href="https://mississaugaconvention.com/about-us/" target="_blank" rel="noreferrer">
                    About
                  </a>
                </li>
                <li>
                  <a href="https://mississaugaconvention.com/venue/" target="_blank" rel="noreferrer">
                    Venue Photos
                  </a>
                </li>
                <li>
                  <a href="https://mississaugaconvention.com/virtual-tour/" target="_blank" rel="noreferrer">
                    Virtual Tour
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Events</h4>
              <ul>
                <li>
                  <a href="https://mississaugaconvention.com/social-events/" target="_blank" rel="noreferrer">
                    Social Events
                  </a>
                </li>
                <li>
                  <a href="https://mississaugaconvention.com/corporate-events/" target="_blank" rel="noreferrer">
                    Corporate Events
                  </a>
                </li>
                <li>
                  <a href="https://mississaugaconvention.com/contact-us/" target="_blank" rel="noreferrer">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mississaugaconvention/" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Visit</h4>
              <address>
                75 Derry Rd W
                <br />
                Mississauga, ON L5W 1G3
                <br />
                <a href="tel:9055641920">(905) 564-1920</a>
                <br />
                <a href="mailto:info@mississaugaconvention.com">info@mississaugaconvention.com</a>
                <br />
                Mon-Sat: 9 AM-6 PM
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; 2026 Mississauga Convention Centre | Wedding landing page concept</span>
            <span>Built to match MCC&apos;s live branding direction, logo, palette, and hospitality tone.</span>
          </div>
        </div>
      </footer>

      <div className="sticky-cta">
        <a className="btn btn-solid" href="#quote">
          Request a Free Quote
        </a>
      </div>

      {lightboxIndex !== null ? (
        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close image preview"
              onClick={() => setLightboxIndex(null)}
            >
              X
            </button>
            <div className="lightbox-media">
              <img
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].alt}
              />
            </div>
            <div className="lightbox-caption">{galleryItems[lightboxIndex].caption}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
