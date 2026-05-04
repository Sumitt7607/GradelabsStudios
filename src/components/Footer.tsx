import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, ArrowUpRight, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 md:mt-32 hairline-top">
      <div className="container py-14 md:py-20">
        {/* Closing CTA */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <p className="eyebrow mb-5 md:mb-6">Let's collaborate</p>
          <h3 className="font-serif-display text-3xl sm:text-5xl md:text-7xl leading-[1.05] mb-6 md:mb-8">
            Have a story <em>worth</em> telling?
          </h3>
          <a 
            href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Explore a Partnership
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 hairline-top pt-10 md:pt-12">
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="block">
              <img 
                src="/logo.png" 
                alt="GradeLab Studios" 
                className="h-14 md:h-20 w-auto object-contain mix-blend-screen contrast-[1.1] brightness-[1.05]" 
              />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mt-4 text-sm">
              GradeLab Studios bridges high-end video production with strategic
              marketplace optimization to build cohesive digital presences.
            </p>
            <div className="flex gap-2 mt-6">
              {[
                { Icon: Twitter, href: "https://x.com/GradeLabStudios" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/gradelab-studios/" },
                { Icon: Instagram, href: "https://www.instagram.com/gradelabstudios?igsh=MThvcTdleGJsOXRlZg==" },
                { Icon: Facebook, href: "https://www.facebook.com/share/1Hv2WinQpC/" },
                { Icon: Youtube, href: "https://youtube.com/@gradelabstudios?si=KVfFyOFsd-xDtM5r" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="link-underline">About</Link></li>
              <li><Link to="/services" className="link-underline">Services</Link></li>
              <li><Link to="/portfolio" className="link-underline">Work</Link></li>
              <li><Link to="/contact" className="link-underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">Reach us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="mailto:gradelabstudios@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 opacity-70" strokeWidth={1.5} />
                  gradelabstudios@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919911990332" className="flex items-center gap-3 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 opacity-70" strokeWidth={1.5} />
                  +91 9911990332
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 hairline-top flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} GradeLab Studios. All rights reserved.</p>
          <p>Cinematic storytelling. Measurable growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
