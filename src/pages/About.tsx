import { Link } from "react-router-dom";
import { ArrowUpRight, Zap, Shield, Globe2, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";

const timeline = [
  { year: "2019", title: "The studio is born", desc: "Started as a small team focused on premium video editing for boutique brands." },
  { year: "2021", title: "Cinematography expansion", desc: "Added in-house production crew — first feature-grade real estate reels delivered." },
  { year: "2023", title: "E-commerce craft added", desc: "Brought Amazon SEO & marketplace strategy under one roof for end-to-end clients." },
  { year: "2025", title: "Cohesive presences, globally", desc: "A senior pod of editors, cinematographers, strategists and brand designers." },
];

const usp = [
  { icon: Zap, t: "Cinematic-first", d: "Every frame is treated like a feature-film moment." },
  { icon: Shield, t: "Senior-only team", d: "No juniors, no handoffs — the people you meet do the work." },
  { icon: Globe2, t: "Global perspective", d: "Working with brands across the USA, UK and beyond." },
  { icon: Heart, t: "Founder-aligned", d: "We work like creative partners, not vendors." },
];

const About = () => {
  return (
    <div>
      <section className="pt-10 pb-16 md:pt-12 md:pb-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">The GradeLab Philosophy</p>
            <h1 className="font-serif-display text-[2.4rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl md:leading-[1.02] max-w-5xl">
              Beautiful visuals should drive measurable growth.
            </h1>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              GradeLab Studios was founded on a simple principle: beautiful visuals should drive measurable growth. Operating as an independent, highly specialized studio, we avoid cookie-cutter templates and bloated agency processes. Whether we are engineering precision color grades for a commercial shoot, executing targeted Google Ad campaigns, or developing a seamless web presence, our goal remains the same: we build digital identities that perform.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 md:py-20 hairline-top">
        <div className="container grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow mb-5 md:mb-6">Vision</p>
              <h3 className="font-serif-display text-2xl md:text-5xl leading-tight mb-4 md:mb-5">
                Make great craft profitable.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
                Cinematic quality shouldn't be a luxury — it should be the most efficient
                growth lever you have. We prove that with every engagement.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="eyebrow mb-5 md:mb-6">Mission</p>
              <h3 className="font-serif-display text-2xl md:text-5xl leading-tight mb-4 md:mb-5">
                Build cohesive digital presences.
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md text-sm md:text-base">
                Every brand we touch should look sharper, feel more considered, and convert
                better than before they met us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-16 md:py-24 surface-soft">
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
              <div className="aspect-[4/5] max-w-[240px] md:max-w-none bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-[var(--radius)] border border-border" />
              <div>
                <p className="eyebrow mb-5 md:mb-6">Founder & Director</p>
                <h3 className="font-serif-display text-3xl md:text-6xl leading-tight mb-5 md:mb-6">Ayush Mahato</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-lg max-w-xl">
                  GradeLab Studios was built on a foundation of dual expertise: high-performance cinematography and strategic marketplace growth. Led by Ayush Mahato, the studio operates on the belief that a premium aesthetic must be backed by measurable performance. From executing advanced post-production and DaVinci Resolve color grading for commercial shoots, to structuring high-converting SEO strategies for Amazon and global DTC brands, Ayush ensures that every project is crafted to elevate the brand and dominate the digital storefront.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      {/* <section className="py-32">
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-8 mb-16">
              <div className="md:col-span-4">
                <p className="eyebrow mb-6">Journey</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05]">
                  Six years, <em>one focus.</em>
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="hairline-top max-w-4xl ml-auto">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid grid-cols-[100px_1fr] gap-8 py-10 hairline-bottom">
                  <p className="font-serif-display text-2xl">{t.year}</p>
                  <div>
                    <h4 className="font-serif-display text-2xl mb-2">{t.title}</h4>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* USP */}
      <section className="py-16 md:py-32 surface-soft">
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
              <div className="md:col-span-4">
                <p className="eyebrow mb-4 md:mb-6">Why GradeLab</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif-display text-3xl md:text-6xl leading-[1.05]">
                  Built different. On purpose.
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {usp.map((u, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div>
                  <u.icon className="h-6 w-6 mb-4 md:mb-5 text-foreground/70" strokeWidth={1.4} />
                  <h4 className="font-serif-display text-lg md:text-xl mb-2 md:mb-3">{u.t}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{u.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32">
        <div className="container">
          <Reveal>
            <h2 className="font-serif-display text-3xl md:text-7xl leading-[1.05] max-w-4xl">
              Let's build something worth watching.
            </h2>
            <Link to="/contact" className="btn-primary mt-8 md:mt-10">
              Explore a Partnership <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
