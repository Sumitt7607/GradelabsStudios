import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Film, Camera, ShoppingBag } from "lucide-react";
import Reveal from "@/components/Reveal";
import AutoVideo from "@/components/AutoVideo";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Cat = "all" | "ecommerce" | "cinematic" | "short-form";

const projects: { title: string; cat: Exclude<Cat, "all">; desc: string; icon?: any; tone?: string; video?: string }[] = [
  { 
    title: "The 400 Roti Startup", 
    cat: "short-form", 
    desc: "Strategic podcast production for Purbi Podcast, focused on storytelling and high-retention editing.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922369/01_-_Purbi_Podcast_-_The_400_Roti_Startup_tidhon.mp4",
    tone: "from-zinc-800 to-black"
  },
  { 
    title: "Employment & Scaling", 
    cat: "short-form", 
    desc: "Deep-dive podcast episode management with professional audio mixing and multicam grading.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922320/02_-_Purbi_Podcast_-_Employment_and_Scaling_g6iku5.mp4",
    tone: "from-zinc-700 to-zinc-900"
  },
  { 
    title: "Regional Pride Animations", 
    cat: "cinematic", 
    desc: "Custom map animations and motion graphics for regional storytelling.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922276/05_-_Purbi_Podcast_-_Regional_Pride_Map_Animations_fhwlkm.mp4",
    tone: "from-sky-900/40 to-zinc-900"
  },
  { 
    title: "EduCollege AI Monster", 
    cat: "ecommerce", 
    desc: "AI-driven commercial video for educational tech platforms.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922220/EduCollege_Ai_video_monster_cip5iw.mp4",
    tone: "from-zinc-800 to-black"
  },
  { 
    title: "Tsuyosa UGC Reel", 
    cat: "ecommerce", 
    desc: "High-converting UGC short-form content for global DTC brands.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777922068/UGC_Tsuyosa_REEL_trg0qp.mp4",
    tone: "from-amber-900/40 to-zinc-900"
  },
  { 
    title: "Cinematic Brand Reel", 
    cat: "cinematic", 
    desc: "Dynamic brand storytelling featuring high-energy editing and precision color grading.", 
    video: "https://res.cloudinary.com/dthwzsl69/video/upload/v1777923843/Short_for_GL_Studios_Website_JP_New_year_riedrm.mp4",
    tone: "from-zinc-900 to-black"
  },
];

const filters: { id: Cat; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "ecommerce", label: "E-commerce Transformations" },
  { id: "cinematic", label: "Cinematic Product Shoots" },
  { id: "short-form", label: "Short-form & Content" },
];

const Portfolio = () => {
  const [cat, setCat] = useState<Cat>("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const filtered = cat === "all" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <div>
      <section className="pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">Selected Work</p>
            <h1 className="font-serif-display text-[2.4rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl md:leading-[1.02] max-w-5xl">
              A library of visual case studies.
            </h1>
            <p className="mt-8 md:mt-10 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Real projects across real estate, e-commerce and cinematic product work —
              shot, edited and finished entirely in-house.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 md:mt-12 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setCat(f.id)}
                  className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm transition-all border ${
                    cat === f.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-8 md:py-12">
        <div className="container">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (window.innerWidth >= 1024 && p.video) {
                      setSelectedVideo(p.video);
                    }
                  }}
                >
                  {/* Visual placeholder */}
                  <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.tone} overflow-hidden rounded-[var(--radius)] mb-4 border border-border`}>
                    {p.video ? (
                      <AutoVideo src={p.video} />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-40">
                        <Film className="h-12 w-12" strokeWidth={1.2} />
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <p className="text-sm text-background/80 leading-relaxed mb-3">{p.desc}</p>
                        <div className="inline-flex items-center gap-2 text-background text-sm">
                          {window.innerWidth >= 1024 ? "Watch video" : "View project"} <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{filters.find(f => f.id === p.cat)?.label}</p>
                      <h3 className="font-serif-display text-xl transition-all">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden aspect-video">
            {selectedVideo && (
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-32 surface-soft">
        <div className="container">
          <Reveal>
            <h2 className="font-serif-display text-3xl md:text-7xl leading-[1.05] max-w-4xl">
              Your project could be next.
            </h2>
            <p className="mt-5 md:mt-6 text-muted-foreground max-w-md text-sm md:text-base">
              We take on a small number of new clients each quarter to keep craft at the highest level.
            </p>
            <Link to="/contact" className="btn-primary mt-8 md:mt-10">
              Book a Pitch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
