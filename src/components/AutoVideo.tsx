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
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className={cn(
        "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]",
        "opacity-40 grayscale-[0.4] brightness-[0.7] scale-100", // Initial "dark/muted" state
        "md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:scale-105", // Desktop hover
        isCentered && "opacity-100 grayscale-0 brightness-100 scale-[1.03]", // Mobile/Scroll center focus
        isCentered && activeClassName,
        className
      )}
    />
  );
}
