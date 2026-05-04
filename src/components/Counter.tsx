import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = "", prefix = "", duration = 2000 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

export default Counter;
