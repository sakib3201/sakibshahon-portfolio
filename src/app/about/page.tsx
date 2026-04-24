import Image from "next/image";
import LegacyNavbar from "../../app/components/LegacyNavbar";
import HomepageTimeLine from "../../app/components/HomepageTimeLine";
import HomepageContactMe from "../../app/components/HomepageContactMe";
import Footer from "../../app/components/Footer";

const principles = [
  {
    title: "STRUCTURAL INTEGRITY",
    description:
      "Form follows function. Every element must serve a purpose, anchored in a logical grid and clean architecture.",
  },
  {
    title: "DATA DENSITY",
    description:
      "Maximize signal, minimize noise. High-contrast interfaces and tight code for complex information systems.",
  },
  {
    title: "DIGITAL CRAFTSMANSHIP",
    description:
      "Reliable, fast, and intellectually deep. Built to withstand edge cases and evolve with requirements.",
  },
];

export default function About() {
  return (
    <main className="bg-background min-h-screen">
      <LegacyNavbar />

      <section className="pt-16 max-w-7xl mx-auto px-6 py-xl border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          <div className="md:col-span-8 flex flex-col gap-md justify-center">
            <span className="font-data-mono text-label-caps text-primary-fixed uppercase tracking-widest animate-glitch">
              {"// IDENTIFICATION"}
            </span>
            <h1 className="font-display-poetry text-display-poetry text-primary-fixed">
              Sakib Ahammed Shahon
            </h1>
            <p className="font-headline-lg text-[24px] text-on-surface-variant">
              {"Software Engineer // System Architect"}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Engineering reliable, high-performance software. Blending
              minimalist industrial rigor with precise technical execution.
              Currently building AI-integrated features at Arraytics.
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

      <HomepageTimeLine />

      <section className="max-w-7xl mx-auto px-6 py-lg border-b border-outline-variant">
        <div className="mb-lg">
          <span className="font-data-mono text-label-caps text-primary-fixed uppercase tracking-widest block mb-xs animate-glitch">
              {"// PROTOCOLS"}
            </span>
          <h2 className="font-headline-lg text-headline-lg text-primary-fixed">
            Operating Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {principles.map((p) => (
            <div
              key={p.title}
              className="bg-surface-container border border-outline-variant p-md flex flex-col gap-sm"
            >
              <h3 className="font-data-mono text-data-mono text-on-surface">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <HomepageContactMe />
      <Footer />
    </main>
  );
}
