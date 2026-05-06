import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, Camera, ShoppingBag, Palette, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import VideoCard from "@/components/VideoCard";

const services = [
  { icon: Camera, num: "01", title: "Cinematography & Production", desc: "High-performance visuals start behind the camera. We offer dedicated cinematography services ranging from dynamic commercial product shoots to expansive real estate marketing reels." },
  { icon: Film, num: "02", title: "Premium Post-Production & Color Grading", desc: "We engineer visual narratives using advanced post-production workflows. Operating on dedicated monthly retainers, we handle high-end timeline management, professional-grade audio mixing, and precision color grading in DaVinci Resolve." },
  { icon: ShoppingBag, num: "03", title: "Precision Performance Marketing", desc: "Beautiful visuals mean nothing if no one sees them. We execute targeted Meta and Google Ad campaigns designed to capture high-intent leads and drive conversions." },
  { icon: ShoppingBag, num: "04", title: "E-commerce SEO & Marketplace Strategy", desc: "A premium product needs premium visibility. We bridge the gap between creative design and sales performance by managing complex e-commerce integrations and providing dedicated monthly SEO retainers." },
  { icon: Palette, num: "05", title: "Premium Web Development", desc: "Your digital storefront must reflect the caliber of your brand. We build clean, high-performance web applications focused on ultra-minimalist aesthetics." },
];

const testimonials = [
  { name: "Aisha Khan", role: "Marketing Director, Lumera", quote: "GradeLab elevated our pitch reels to a cinematic standard. The detail in their grading work is genuinely unmatched." },
  { name: "James O'Connor", role: "Founder, Northwind Realty", quote: "The team treats every shoot like a feature film. Our listings finally feel as premium as the homes we sell." },
  { name: "Maya Patel", role: "E-commerce Lead, Aetherwave", quote: "From cinematography to Amazon optimization — one cohesive partner. That alignment changed everything for us." },
];

const work = [
  { tag: "Podcast · Storytelling", title: "The 400 Roti Startup", video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922369/01_-_Purbi_Podcast_-_The_400_Roti_Startup_tidhon.mp4" },
  { tag: "DTC · UGC Reel", title: "Tsuyosa Skincare", video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922068/UGC_Tsuyosa_REEL_trg0qp.mp4" },
  { tag: "Motion · Pride Reel", title: "Regional Pride Animations", video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922276/05_-_Purbi_Podcast_-_Regional_Pride_Map_Animations_fhwlkm.mp4" },
  { tag: "Edu-Tech · Commercial", title: "EduCollege AI Monster", video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922220/EduCollege_Ai_video_monster_cip5iw.mp4" },
  { tag: "Podcast · Production", title: "Employment & Scaling", video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922320/02_-_Purbi_Podcast_-_Employment_and_Scaling_g6iku5.mp4" },
  { tag: "Cinematic · Brand Reel", title: "JP Brand Film", video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777923843/Short_for_GL_Studios_Website_JP_New_year_riedrm.mp4" },
];

const Home = () => {
  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* Ambient glows (Agenko signature) */}
      <div className="absolute top-0 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] ambient-glow green -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute top-20 right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] ambient-glow violet translate-x-1/3" />

      {/* HERO */}
      <section className="relative pt-10 pb-20 md:pt-20 md:pb-40">
        <div className="container">

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="font-serif-display text-[2.4rem] leading-[1.05] xs:text-5xl sm:text-6xl md:text-8xl lg:text-[8.5rem] md:leading-[0.98] tracking-tight max-w-6xl"
          >
            Cinematic Storytelling.<br />
            Measurable Growth.
          </motion.h1>

          <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              GradeLab Studios bridges high-end video production with strategic digital marketing to engineer digital presences that demand attention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-wrap gap-3 md:justify-end"
            >
              <a 
                href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Book a Pitch
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/portfolio" className="btn-ghost">
                View Work
                <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL PLACEHOLDER */}
      {/* <section className="pb-32 relative">
        <div className="container">
          <Reveal>
            <div className="aspect-[16/8] surface-soft rounded-sm overflow-hidden relative border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Film className="h-12 w-12 text-foreground/30 mx-auto mb-4" />
                  <p className="text-sm uppercase tracking-[0.2em] text-foreground/40">Showreel placeholder</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* CLIENT MARQUEE */}
      <section className="py-12 hairline-top hairline-bottom overflow-hidden">
        <div className="container mb-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by ambitious teams</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex marquee gap-16 whitespace-nowrap">
            {[..."NORTHWIND·LUMERA·AETHERWAVE·HILLTOP·OBSIDIAN·HELIX·KINETIC·VANTAGE·NORTHWIND·LUMERA·AETHERWAVE·HILLTOP·OBSIDIAN·HELIX·KINETIC·VANTAGE".split("·")].map((b, i) => (
              <span key={i} className="font-serif-display text-2xl md:text-3xl text-muted-foreground/60">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-32">
        <div className="container">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-20">
              <div className="md:col-span-4">
                <p className="eyebrow mb-4 md:mb-6">Services</p>
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif-display text-3xl md:text-6xl leading-[1.05]">
                  Unified Digital Architecture.<br />
                  Everything you need to scale, under one roof.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 hairline-top">
            {services.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`group p-6 md:p-10 hairline-bottom ${i % 2 === 0 ? "md:border-r md:border-border" : ""} hover:bg-muted/40 transition-colors duration-500`}>
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <span className="text-xs text-muted-foreground tracking-wider">{s.num}</span>
                    <s.icon className="h-5 w-5 text-foreground/70" strokeWidth={1.4} />
                  </div>
                  <h3 className="font-serif-display text-xl md:text-3xl mb-3 md:mb-4 leading-tight">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md text-sm">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 mt-6 md:mt-8 text-sm link-underline">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-16 md:py-32">
        <div className="container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16">
              <div>
                <p className="eyebrow mb-4 md:mb-6">Selected work</p>
                <h2 className="font-serif-display text-3xl md:text-6xl leading-[1.05]">
                  A glimpse behind the lens.
                </h2>
              </div>
              <Link to="/portfolio" className="text-sm link-underline">All Work →</Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {work.map((w, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <VideoCard 
                  video={w.video}
                  title={w.title}
                  subtitle={w.tag}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-32 surface-soft">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-8 md:mb-10">Kind words</p>
          </Reveal>
          <Reveal>
            <motion.div
              key={tIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <p className="font-serif-display text-2xl sm:text-3xl md:text-5xl leading-[1.2] md:leading-[1.15]">
                "{testimonials[tIndex].quote}"
              </p>
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-medium">{testimonials[tIndex].name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{testimonials[tIndex].role}</p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTIndex(i)}
                      className={`h-px transition-all ${i === tIndex ? "w-12 bg-foreground" : "w-6 bg-muted-foreground/40"}`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
