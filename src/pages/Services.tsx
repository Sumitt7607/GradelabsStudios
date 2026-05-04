import { Link } from "react-router-dom";
import { Film, Camera, ShoppingBag, Palette, Check, X, ArrowUpRight, Search, Pencil, Send, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Camera,
    num: "01",
    title: "Cinematography & Production",
    desc: "High-performance visuals start behind the camera. We offer dedicated cinematography services ranging from dynamic commercial product shoots to expansive real estate marketing reels. By focusing on intentional lighting, premium framing, and smooth camera movement, we capture raw assets that naturally exude quality and professionalism.",
    benefits: ["Cinema-grade camera packages", "Lighting & gimbal teams", "Real estate walkthroughs", "Brand commercials"],
  },
  {
    icon: Film,
    num: "02",
    title: "Premium Post-Production & Color Grading",
    desc: "We engineer visual narratives using advanced post-production workflows. Operating on dedicated monthly retainers, we handle high-end timeline management, professional-grade audio mixing, and precision color grading in DaVinci Resolve. Our pipeline transforms raw footage into pristine 4K commercial edits and rapid-fire short-form content optimized for maximum viewer retention.",
    benefits: ["DaVinci Resolve color grading", "4K & 6K master delivery", "Sound design & mixing", "Multi-format exports"],
  },
  {
    icon: ShoppingBag,
    num: "03",
    title: "Precision Performance Marketing",
    desc: "Beautiful visuals mean nothing if no one sees them. We execute targeted Meta and Google Ad campaigns designed to capture high-intent leads and drive conversions. We handle the entire ad pipeline—from creative split-testing to budget scaling—ensuring your return on ad spend (ROAS) is consistently maximized.",
    benefits: ["Listing optimization", "Variant & parent-child structure", "Keyword & title research", "A+ content & storefronts"],
  },
  {
    icon: ShoppingBag,
    num: "04",
    title: "E-commerce SEO & Marketplace Strategy",
    desc: "A premium product needs premium visibility. We bridge the gap between creative design and sales performance by managing complex e-commerce integrations and providing dedicated monthly SEO retainers. We handle end-to-end marketplace optimization—including precise Amazon listing management, variant structuring, and keyword dominance—ensuring your brand ranks higher and converts faster in competitive markets.",
    benefits: ["Logo & wordmark", "Visual identity system", "Brand guidelines", "Launch & social assets"],
  },
  {
    icon: Palette,
    num: "05",
    title: "Premium Web Development",
    desc: "Your digital storefront must reflect the caliber of your brand. We build clean, high-performance web applications focused on ultra-minimalist aesthetics, intuitive user experiences, and seamless integrations. We engineer digital environments that don't just look luxurious, but are strategically structured to scale.",
    benefits: ["Ultra-minimalist UI/UX", "High-performance builds", "Seamless third-party integrations", "Scalable architecture"],
  },
];

const compare = [
  ["Dedicated Creative Pod", true, false],
  ["Cinematic-First Approach", true, false],
  ["Integrated E-commerce Strategy", true, false],
  ["Color-grading specialists in-house", true, false],
  ["Transparent reporting", true, false],
  ["Generic stock-style edits", false, true],
  ["Outsourced production teams", false, true],
];

const Services = () => {
  return (
    <div>
      {/* HERO */}
      <section className="pt-10 pb-16 md:pt-12 md:pb-24">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">Services</p>
            <h1 className="font-serif-display text-[2.4rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl md:leading-[1.02] max-w-5xl">
              Unified Digital Architecture. Everything you need to scale, under one roof.
            </h1>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Four core offerings, designed to work together. Pick a single service or run the
              full creative + commerce stack with us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="hairline-top">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-16 hairline-bottom group">
                  <div className="md:col-span-2">
                    <span className="text-xs text-muted-foreground tracking-wider">{s.num}</span>
                  </div>
                  <div className="md:col-span-5">
                    <s.icon className="h-6 w-6 mb-4 md:mb-6 text-foreground/70" strokeWidth={1.4} />
                    <h3 className="font-serif-display text-2xl md:text-5xl leading-tight mb-4 md:mb-5">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg text-sm md:text-base">{s.desc}</p>
                  </div>
                  <div className="md:col-span-5">
                    <ul className="space-y-3 mb-6 md:mb-8">
                      {s.benefits.map((b, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm">
                          <Check className="h-4 w-4 text-foreground/60 shrink-0" strokeWidth={1.5} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
               <a 
  href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-sm link-underline"
>
  Explore a Partnership <ArrowUpRight className="h-3.5 w-3.5" />
</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 surface-soft">
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
              <div className="md:col-span-4">
                <p className="eyebrow mb-4 md:mb-6">Our process</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif-display text-3xl md:text-6xl leading-[1.05]">
                  A four-step creative rhythm.
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">
            {[
              { icon: Search, t: "Discover", d: "Deep dive into your brand, audience and current assets." },
              { icon: Pencil, t: "Pre-production", d: "Mood-boards, shot lists, scripts and listing strategy." },
              { icon: Send, t: "Production & Edit", d: "Capture, grade, sound design and marketplace assets." },
              { icon: Sparkles, t: "Launch & Refine", d: "Deliver, publish and iterate based on real performance." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div>
                  <div className="text-xs text-muted-foreground tracking-wider mb-6">0{i + 1}</div>
                  <p.icon className="h-6 w-6 mb-5 text-foreground/70" strokeWidth={1.4} />
                  <h4 className="font-serif-display text-2xl mb-3">{p.t}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-16 md:py-32">
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-10 md:mb-16">
              <div className="md:col-span-4">
                <p className="eyebrow mb-4 md:mb-6">The difference</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif-display text-3xl md:text-6xl leading-[1.05]">
                  Why founders pick us.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full max-w-4xl overflow-x-auto">
              <div className="min-w-[520px]">
                <div className="grid grid-cols-3 py-5 hairline-bottom text-sm">
                  <span className="text-muted-foreground">Capability</span>
                  <span className="flex justify-center">
                    <img src="/logo.png" alt="GradeLab Studios" className="h-6 md:h-8 w-auto mix-blend-screen" />
                  </span>
                  <span className="text-center text-muted-foreground">Average studio</span>
                </div>
                {compare.map(([label, us, them], i) => (
                  <div key={i} className="grid grid-cols-3 py-4 md:py-5 hairline-bottom items-center text-sm">
                    <span className="pr-4">{label as string}</span>
                    <span className="text-center">
                      {us ? <Check className="h-4 w-4 mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}
                    </span>
                    <span className="text-center">
                      {them ? <Check className="h-4 w-4 text-muted-foreground mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
