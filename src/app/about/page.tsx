import Image from "next/image";
import LegacyNavbar from "../components/LegacyNavbar";
import HomepageTimeLine from "../components/HomepageTimeLine";
import HomepageContactMe from "../components/HomepageContactMe";
import Footer from "../components/Footer";
import GlitchLabel from "../components/GlitchLabel";
import RevealOnScroll from "../components/RevealOnScroll";

const principles = [
  {
    title: "STRUCTURAL INTEGRITY",
    description:
      "I learned architecture the hard way: by building things that broke under load. Now every system I design starts from what it needs to do, not what would look impressive in a demo.",
  },
  {
    title: "DATA DENSITY",
    description:
      "Competitive programming taught me that the best solution communicates most clearly with the least overhead. I apply that principle to every codebase: maximum signal, minimum noise.",
  },
  {
    title: "DIGITAL CRAFTSMANSHIP",
    description:
      "Ship fast, but ship right. I optimize for the long game: code that other engineers can read, extend, and trust when the pressure is on.",
  },
];

export default function About() {
  return (
    <main className="bg-background min-h-screen">
      <LegacyNavbar />

      <section className="pt-16 max-w-7xl mx-auto px-6 py-xl border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          <div className="md:col-span-8 flex flex-col gap-md justify-center">
            <GlitchLabel className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest">
              {"// IDENTIFICATION"}
            </GlitchLabel>
            <h1 className="font-display-poetry text-display-poetry text-on-surface">
              Sakib Ahammed Shahon
            </h1>
            <p className="font-data-mono text-data-mono text-primary-container">
              Software Engineer & AI Architect
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Building AI-native systems at Arraytics. The path from a kid
              fascinated by a screen to an engineer shipping agentic features
              has been anything but straight.
            </p>
          </div>
          <div className="md:col-span-4 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary-container/5 border border-primary-container/20" />
            <Image
              src="/images/professional.webp"
              alt="Sakib Ahammed Shahon"
              width={400}
              height={400}
              className="w-full h-auto aspect-square object-cover opacity-80 grayscale mix-blend-luminosity border border-outline-variant relative z-10"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-lg border-b border-outline-variant">
        <GlitchLabel className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-xs">
          {"// ORIGIN"}
        </GlitchLabel>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg">
          The Path Here
        </h2>
        <div className="max-w-[65ch] flex flex-col gap-md">
          <RevealOnScroll>
            <p className="font-body-md text-body-md text-on-surface-variant">
              I was three when I first saw a computer. Not understood it, just
              saw it, and knew it was something extraordinary. By eleven I had
              written my first program in Python. By twelve I was building web
              interfaces with HTML and CSS. By fourteen, learning C had turned a
              curiosity into a conviction: this is what I was going to do with
              my life.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Computer Science at JKKNIU accelerated everything. Competitive
              programming sharpened my instincts through hundreds of problems and
              sleepless nights, surrounded by a community that thought the way I
              did. Then machine learning changed the question entirely: not how
              to build, but how to teach machines to learn. By 2023, what had
              been a passion became a profession, first as a freelance engineer,
              then full-time at Incevio.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Today I build AI-integrated features and agentic systems at
              Arraytics. My focus is practical: ship AI-first features that
              actually reduce cost and increase capability, not add intelligence
              where it isn&apos;t needed. Outside of work, I run the Mymensingh
              programmers community, helping the next generation find the same
              spark I found in 2003.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <HomepageTimeLine />

      <section className="max-w-7xl mx-auto px-6 py-lg border-b border-outline-variant">
        <div className="mb-lg">
          <GlitchLabel className="font-data-mono text-label-caps text-primary-container uppercase tracking-widest block mb-xs">
            {"// PROTOCOLS"}
          </GlitchLabel>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Operating Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {principles.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.1}>
              <div
                className="bg-surface-container border border-outline-variant p-md flex flex-col gap-sm"
              >
                <h3 className="font-data-mono text-data-mono text-on-surface">
                  {p.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  {p.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <HomepageContactMe />
      <Footer />
    </main>
  );
}
