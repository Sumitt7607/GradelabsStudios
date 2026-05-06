import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Film } from "lucide-react";

interface VideoCardProps {
  video?: string;
  title: string;
  subtitle: string;
  desc?: string;
  tone?: string;
  aspectRatio?: string;
}

const VideoCard = ({ 
  video, 
  title, 
  subtitle, 
  desc, 
  tone = "from-zinc-800 to-black", 
  aspectRatio = "aspect-[3/4]" 
}: VideoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Detection for mobile scroll highlight: trigger when element is in the vertical center of viewport
  const isInView = useInView(ref, { 
    margin: "-40% 0px -40% 0px",
    amount: "some"
  });

  const [isHovered, setIsHovered] = useState(false);

  // Play/Pause logic based on visibility/active state
  useEffect(() => {
    if (videoRef.current) {
      if (isInView || isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        // Optionally pause when not in view/hovered to save resources
        // videoRef.current.pause();
      }
    }
  }, [isInView, isHovered]);

  return (
    <div 
      ref={ref} 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${aspectRatio} bg-gradient-to-br ${tone} overflow-hidden rounded-[var(--radius)] mb-4 border border-border`}>
        {video ? (
          <motion.video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ 
              opacity: (isInView || isHovered) ? 1 : 0.5,
              scale: (isInView || isHovered) ? 1.05 : 1,
              filter: (isInView || isHovered) ? "brightness(1)" : "brightness(0.7)"
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.65, 0, 0.35, 1] 
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <Film className="h-12 w-12" strokeWidth={1.2} />
          </div>
        )}
        
        {/* Hover overlay for desktop - reveals description */}
        {desc && (
          <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 hidden md:flex">
            <div>
              <p className="text-sm text-background/80 leading-relaxed mb-3">{desc}</p>
              <div className="inline-flex items-center gap-2 text-background text-sm">
                View project <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{subtitle}</p>
          <h3 className="font-serif-display text-xl md:text-2xl transition-all group-hover:text-primary transition-colors duration-300">{title}</h3>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
      </div>
    </div>
  );
};

export default VideoCard;
