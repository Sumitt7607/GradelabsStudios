import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] }}
    variants={{ hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
