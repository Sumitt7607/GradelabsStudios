import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AutoVideoProps {
  src: string;
  className?: string;
  activeClassName?: string;
}

export default function AutoVideo({ src, className, activeClassName }: AutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCentered, setIsCentered] = useState(false);

  useEffect(() => {
    // Intersection Observer to detect when the video is in the center of the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
        
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Handle potential autoplay restrictions
              console.log("Autoplay blocked or failed");
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        // rootMargin: top, right, bottom, left
        // -40% top and bottom means we only trigger in the middle 20% of the viewport
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-zinc-900/40">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none",
          "opacity-50 scale-100", // Slightly higher base opacity
          "md:group-hover:opacity-100 md:group-hover:scale-105", // Hover effect
          isCentered && "opacity-100 scale-[1.03]", // Active state
          isCentered && activeClassName,
          className
        )}
      />
    </div>
  );
}
