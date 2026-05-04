import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex items-center gap-2 bg-foreground text-background rounded-full pl-4 pr-5 py-3 text-sm font-medium hover:bg-background hover:text-foreground border border-foreground transition-all shadow-lg">
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Let's talk</span>
      </span>
    </motion.a>
  );
};

export default FloatingCTA;
