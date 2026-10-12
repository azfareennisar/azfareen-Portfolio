import { useState, useEffect } from "react";
import pfp from "@/imports/pfp.jpg";
import imgBizCapture from "@/imports/Capture.PNG";
import imgBizCaptcha from "@/imports/Captcha.PNG";
import imgBizStudy from "@/imports/study.PNG";
import imgBizThat from "@/imports/that.PNG";
import imgJewHero from "@/imports/jwellery.PNG";
import imgJewCollection from "@/imports/collection.PNG";
import imgJewExperience from "@/imports/experience.PNG";
import imgJewContact from "@/imports/Contact.PNG";
import brandPdf from "@/imports/woven-well-brand-guidelines__1_.pdf?url";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Web Design",
    desc: "Responsive landing pages, business websites and portfolios designed around clarity, hierarchy and conversion.",
    icon: "⬡",
  },
  {
    num: "02",
    title: "Brand Identity",
    desc: "Logos, colour systems, typography and brand guidelines that keep every touchpoint consistent.",
    icon: "◈",
  },
  {
    num: "03",
    title: "UI / UX Design",
    desc: "Wireframes, user flows and polished interfaces built in Figma, handed off ready for development.",
    icon: "◻",
  },
  {
    num: "04",
    title: "Print & Social",
    desc: "Posters, flyers, business cards, packaging and social media creatives with a considered visual voice.",
    icon: "◫",
  },
];

type WorkItem = {
  id: number;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  year: string;
  type: "pdf" | "gallery" | "image";
  pdf?: string;
  images?: string[];
  img?: string;
  captions?: string[];
};

const WORK: WorkItem[] = [
  {
    id: 1,
    title: "Brand Identity Suite",
    category: "Branding",
    tags: ["Logo", "Palette", "Guidelines"],
    desc: "Complete brand system for Woven Well — custom logomark, colour palette, typography stack and detailed usage guidelines ensuring every touchpoint stays consistent.",
    year: "2024",
    type: "pdf",
    pdf: brandPdf,
  },
  {
    id: 2,
    title: "Business Website",
    category: "Web Design",
    tags: ["Multi-page", "Responsive", "UI"],
    desc: "Multi-page responsive business website for an interior design studio — editorial photography treatment, clean grid system and conversion-focused layout across five sections.",
    year: "2024",
    type: "gallery",
    images: [imgBizCapture, imgBizCaptcha, imgBizStudy, imgBizThat],
    captions: ["Hero — Studio philosophy", "Room browser with filter system", "Selected work gallery", "Process & how we work"],
  },
  {
    id: 3,
    title: "Product Landing Page",
    category: "Product Design",
    tags: ["Landing Page", "Luxury", "UI"],
    desc: "High-end landing page for Aurélia Fine Jewellery — quiet-luxury aesthetic, editorial product photography, commission flow and hand-crafted brand voice across every section.",
    year: "2024",
    type: "gallery",
    images: [imgJewHero, imgJewCollection, imgJewExperience, imgJewContact],
    captions: ["Hero — Quiet luxury, cast in gold", "Selected pieces collection grid", "The Atelier — craft story", "Commission & contact section"],
  },
];

const SKILLS = [
  "Figma", "Adobe Photoshop", "Adobe Illustrator", "Canva",
  "Wireframing", "Typography", "Colour Theory", "Responsive Layout",
  "Logo Design", "Brand Systems", "UI Prototyping", "Social Graphics",
  "Grid Systems", "Design Thinking", "User Research",
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "Understanding your goals, audience and competitors before a single pixel moves." },
  { num: "02", title: "Define", desc: "Synthesising research into a clear creative brief, mood board and direction." },
  { num: "03", title: "Design", desc: "Concepts, layouts and iterations shared openly until the direction feels right." },
  { num: "04", title: "Deliver", desc: "Final files, guidelines and support so the work lives well after handoff." },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,9,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-lg font-light tracking-wide text-white">
          AN<span style={{ color: "#3b7bff" }}>.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-light tracking-widest uppercase transition-colors duration-200"
                style={{ color: "#6b7585", letterSpacing: "0.12em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8eaf0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7585")}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
              style={{ background: "#3b7bff", color: "#fff" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Hire me
            </a>
          </li>
        </ul>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px" style={{ background: menuOpen ? "#3b7bff" : "#e8eaf0", transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
          <span className="block w-5 h-px" style={{ background: "#e8eaf0", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span className="block w-5 h-px" style={{ background: menuOpen ? "#3b7bff" : "#e8eaf0", transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: "rgba(7,9,15,0.98)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-light tracking-widest uppercase" style={{ color: "#9aa3b2" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium px-5 py-2 rounded-full text-center" style={{ background: "#3b7bff", color: "#fff" }}>
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,123,255,0.18) 0%, transparent 70%), #07090f",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-32 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="block w-8 h-px" style={{ background: "#3b7bff" }} />
              <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#3b7bff" }}>
                Web & Graphic Designer
              </span>
            </div>

            <h1
              className="font-serif leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", fontWeight: 300, color: "#e8eaf0" }}
            >
              Azfareen
              <br />
              <em style={{ fontStyle: "italic", color: "#3b7bff" }}>Nisar</em>
            </h1>

            <p className="text-base leading-relaxed max-w-lg" style={{ color: "#6b7585", fontWeight: 300 }}>
              I design clean, professional digital and print experiences — from brand identities to fully responsive websites that people actually enjoy using.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="text-sm font-medium px-7 py-3 rounded-full transition-all duration-200"
                style={{ background: "#3b7bff", color: "#fff" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 32px rgba(59,123,255,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="text-sm font-medium px-7 py-3 rounded-full transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "#e8eaf0" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(59,123,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              >
                View work ↓
              </a>
            </div>

            <div className="flex gap-8 pt-4">
              {[["4+", "Years exp."], ["20+", "Projects"], ["100%", "Remote-ready"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-2xl font-serif font-light" style={{ color: "#e8eaf0" }}>{val}</div>
                  <div className="text-xs mt-1 font-mono tracking-wider uppercase" style={{ color: "#6b7585" }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(59,123,255,0.35) 0%, transparent 70%)", transform: "scale(1.15)" }}
                aria-hidden="true"
              />
              <img
                src={pfp}
                alt="Portrait of Azfareen Nisar, web and graphic designer"
                className="relative object-cover"
                style={{ width: 260, height: 260, border: "1px solid rgba(59,123,255,0.4)", borderRadius: 0, boxShadow: "rgba(0,0,0,0.25) 0px 4px 4px 0px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #07090f)" }}
        aria-hidden="true"
      />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28" style={{ background: "#07090f" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#3b7bff" }}>About</span>
            <h2 className="font-serif mt-3 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#e8eaf0" }}>
              Designing with
              <br />
              <em style={{ fontStyle: "italic" }}>intention</em>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-base leading-relaxed" style={{ color: "#9aa3b2", fontWeight: 300, fontSize: "1.05rem" }}>
              I'm Azfareen Nisar, a designer working across the web and graphic space. My approach is simple: understand the problem, remove the noise, and build something that communicates with confidence. I care about grid, spacing and typography as much as I care about the idea behind the work.
            </p>
            <div
              className="grid sm:grid-cols-2 gap-6 pt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                ["Education", "Bachelor of Science"],
                ["Focus", "Web & Graphic Design"],
                ["Availability", "Open to freelance"],
                ["Languages", "English, Urdu"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-mono tracking-[0.2em] uppercase mb-1" style={{ color: "#3b7bff" }}>{label}</dt>
                  <dd className="text-sm" style={{ color: "#e8eaf0" }}>{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden" }}>
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="p-8 space-y-4 transition-colors duration-200 group"
                style={{ background: "#0d1120" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#111827")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d1120")}
              >
                <div className="text-xs font-mono" style={{ color: "#3b7bff" }}>{s.num}</div>
                <h3 className="text-base font-medium" style={{ color: "#e8eaf0" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7585" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageCarousel({ images, captions, title }: { images: string[]; captions?: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); };

  return (
    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="relative" style={{ background: "#0a0c14" }}>
        <img
          src={images[idx]}
          alt={captions?.[idx] ?? title}
          className="w-full object-contain"
          style={{ display: "block", margin: "0 auto", width: "fit-content" }}
        />
        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-150"
              style={{ background: "rgba(7,9,15,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#e8eaf0" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,123,255,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(7,9,15,0.8)")}
              aria-label="Previous image"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-150"
              style={{ background: "rgba(7,9,15,0.8)", border: "1px solid rgba(255,255,255,0.1)", color: "#e8eaf0" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,123,255,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(7,9,15,0.8)")}
              aria-label="Next image"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  className="rounded-full transition-all duration-200"
                  style={{ width: i === idx ? 20 : 6, height: 6, background: i === idx ? "#3b7bff" : "rgba(255,255,255,0.25)" }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* Caption + counter */}
      <div className="px-5 py-4 flex items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-xs font-mono" style={{ color: "#6b7585" }}>
          {captions?.[idx] ?? ""}
        </p>
        <span className="text-xs font-mono shrink-0" style={{ color: "#3b7bff" }}>
          {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>
      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 px-5 pb-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className="rounded overflow-hidden shrink-0 transition-all duration-150"
              style={{
                width: 64, height: 44,
                border: `1.5px solid ${i === idx ? "#3b7bff" : "rgba(255,255,255,0.08)"}`,
                opacity: i === idx ? 1 : 0.5,
                ...(i === 0 ? { borderRadius: 16 } : {}),
              }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function PdfViewer({ src, title }: { src: string; title: string }) {
  return (
    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ background: "#0a0c14", height: 520 }}>
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          style={{ border: "none", display: "block" }}
        />
      </div>
      <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-xs font-mono" style={{ color: "#6b7585" }}>Brand guidelines document — scroll to explore</p>
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="py-28" style={{ background: "#0a0c14" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#3b7bff" }}>Selected Work</span>
            <h2 className="font-serif mt-3 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#e8eaf0" }}>
              Projects
            </h2>
          </div>
          <p className="text-sm hidden md:block" style={{ color: "#6b7585" }}>
            Full case studies available on request
          </p>
        </div>

        <div className="space-y-4">
          {WORK.map((p, i) => (
            <article
              key={p.id}
              className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: active === i ? "#111827" : "#0d1120",
                border: `1px solid ${active === i ? "rgba(59,123,255,0.25)" : "rgba(255,255,255,0.06)"}`,
              }}
              onClick={() => setActive(active === i ? null : i)}
            >
              {/* Row header */}
              <div className="p-6 flex flex-wrap items-center gap-4 justify-between">
                <div className="flex items-center gap-5 min-w-0">
                  <span className="text-xs font-mono shrink-0" style={{ color: "#3b7bff" }}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <h3 className="text-base font-medium" style={{ color: "#e8eaf0" }}>{p.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-full font-mono" style={{ background: "rgba(59,123,255,0.1)", color: "#3b7bff" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-mono hidden sm:block" style={{ color: "#6b7585" }}>{p.year}</span>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.04)", color: "#9aa3b2" }}>{p.category}</span>
                  <svg
                    className="transition-transform duration-300"
                    style={{ transform: active === i ? "rotate(180deg)" : "rotate(0deg)", color: "#6b7585" }}
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Expanded content */}
              {active === i && (
                <div className="px-6 pb-6 space-y-4" onClick={(e) => e.stopPropagation()}>
                  <p className="text-sm leading-relaxed" style={{ color: "#9aa3b2" }}>{p.desc}</p>

                  {p.type === "pdf" && p.pdf && (
                    <PdfViewer src={p.pdf} title={p.title} />
                  )}

                  {p.type === "gallery" && p.images && (
                    <ImageCarousel images={p.images} captions={p.captions} title={p.title} />
                  )}

                  {p.type === "image" && p.img && (
                    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                      <img src={p.img} alt={p.title} className="w-full object-cover" style={{ maxHeight: 380, background: "#111827" }} />
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-28" style={{ background: "#07090f" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[280px_1fr] gap-16 items-start">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#3b7bff" }}>Toolkit</span>
            <h2 className="font-serif mt-3 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#e8eaf0" }}>
              Skills &<br /><em style={{ fontStyle: "italic" }}>Tools</em>
            </h2>
          </div>
          <div>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-sm px-4 py-2 rounded-full font-light transition-all duration-200 cursor-default"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#9aa3b2", background: "#0d1120" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(59,123,255,0.4)";
                    e.currentTarget.style.color = "#3b7bff";
                    e.currentTarget.style.background = "rgba(59,123,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#9aa3b2";
                    e.currentTarget.style.background = "#0d1120";
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-16 grid sm:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              {PROCESS.map((p) => (
                <div key={p.num} className="p-6 space-y-3" style={{ background: "#0d1120" }}>
                  <div className="text-xs font-mono" style={{ color: "#3b7bff" }}>{p.num}</div>
                  <h3 className="font-medium text-sm" style={{ color: "#e8eaf0" }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7585" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate a brief delay then mark sent
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  const inputStyle = {
    background: "#0d1120",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#e8eaf0",
    borderRadius: 8,
    padding: "12px 16px",
    fontSize: 14,
    fontFamily: "DM Sans, sans-serif",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "#07090f" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,123,255,0.1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="space-y-6">
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "#3b7bff" }}>Contact</span>
            <h2 className="font-serif leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#e8eaf0" }}>
              Let's work<br /><em style={{ fontStyle: "italic" }}>together</em>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7585", fontWeight: 300 }}>
              Have a project in mind? Send a short brief and I'll get back to you within a day.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href="mailto:azfinisar@gmail.com"
                className="flex items-center gap-3 group"
                style={{ color: "#9aa3b2", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8eaf0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa3b2")}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(59,123,255,0.12)", border: "1px solid rgba(59,123,255,0.2)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="#3b7bff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-sm">azfinisar@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(59,123,255,0.12)", border: "1px solid rgba(59,123,255,0.2)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="5" stroke="#3b7bff" strokeWidth="1.2" />
                    <path d="M8 3v5l3 3" stroke="#3b7bff" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm" style={{ color: "#9aa3b2" }}>Response within 24 hours</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{ background: "#0d1120", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(59,123,255,0.15)", border: "1px solid rgba(59,123,255,0.3)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5 9-9" stroke="#3b7bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl" style={{ color: "#e8eaf0" }}>Message sent!</h3>
                <p className="text-sm" style={{ color: "#6b7585" }}>I'll be in touch within a day. Thanks for reaching out.</p>
                <button
                  className="text-sm px-5 py-2 rounded-full mt-2"
                  style={{ background: "rgba(59,123,255,0.1)", color: "#3b7bff", border: "1px solid rgba(59,123,255,0.25)" }}
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", project: "", message: "" }); }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono tracking-wider uppercase block mb-2" style={{ color: "#6b7585" }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(59,123,255,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono tracking-wider uppercase block mb-2" style={{ color: "#6b7585" }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(59,123,255,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider uppercase block mb-2" style={{ color: "#6b7585" }}>Project Type</label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" as const }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,123,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  >
                    <option value="" style={{ background: "#0d1120" }}>Select a service…</option>
                    <option value="web" style={{ background: "#0d1120" }}>Web Design</option>
                    <option value="brand" style={{ background: "#0d1120" }}>Brand Identity</option>
                    <option value="ui" style={{ background: "#0d1120" }}>UI / UX Design</option>
                    <option value="print" style={{ background: "#0d1120" }}>Print & Social Graphics</option>
                    <option value="other" style={{ background: "#0d1120" }}>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono tracking-wider uppercase block mb-2" style={{ color: "#6b7585" }}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "none" as const }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(59,123,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full text-sm font-medium py-3 rounded-full transition-all duration-200"
                  style={{ background: "#3b7bff", color: "#fff", opacity: status === "sending" ? 0.7 : 1 }}
                  onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(59,123,255,0.4)"; }}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-xs font-mono" style={{ color: "#6b7585" }}>
          © 2026 Azfareen Nisar — Web & Graphic Designer
        </p>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#07090f" }}>
      <NavBar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}
