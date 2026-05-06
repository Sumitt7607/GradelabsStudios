import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube,
  Check,
  Facebook,
  Twitter,
  Phone,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gradelabstudios@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            business: form.business,
            message: form.message,
          }),
        }
      );

      if (response.ok) {
        setSubmitted(true);

        toast.success("We'll be in touch within 24 hours.");

        setForm({
          name: "",
          email: "",
          business: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="pt-10 pb-12 md:pt-12 md:pb-16">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-6 md:mb-8">Contact</p>

            <h1 className="font-serif-display text-[2.4rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl md:leading-[1.02] max-w-5xl">
              Tell us about <em>your</em> project.
            </h1>

            <p className="mt-8 md:mt-10 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We respond within 24 hours and book a complimentary 30-minute
              pitch call to walk through the brief together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-8 md:py-12">
        <div className="container grid lg:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 hairline-top pt-12 md:pt-16">
          {/* FORM */}
          <Reveal>
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12"
                >
                  <div className="w-14 h-14 rounded-full border border-foreground flex items-center justify-center mb-8">
                    <Check className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-serif-display text-4xl mb-3">
                    Message received.
                  </h3>

                  <p className="text-muted-foreground">
                    We'll be in touch within 24 hours,{" "}
                    {form.name.split(" ")[0]}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-2">
                  <p className="eyebrow mb-8">Project enquiry</p>

                  <div className="grid sm:grid-cols-2 gap-x-6 md:gap-x-8">
                    <Field label="Name *">
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="input"
                        placeholder="Jane Doe"
                      />
                    </Field>

                    <Field label="Email *">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="input"
                        placeholder="jane@company.com"
                      />
                    </Field>
                  </div>

                  <Field label="Business type">
                    <input
                      value={form.business}
                      onChange={(e) =>
                        setForm({ ...form, business: e.target.value })
                      }
                      className="input"
                      placeholder="Real estate · DTC · Agency · Other"
                    />
                  </Field>

                  <Field label="Tell us about your project *">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="input resize-none"
                      placeholder="Goals, timeline, deliverables..."
                    />
                  </Field>

                  <div className="pt-8">
                    <button type="submit" className="btn-primary">
                      Book a Pitch
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground pt-6">
                    By submitting, you agree to our terms. We never share your
                    data.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* SIDE */}
          <div className="space-y-12">
            {/* DIRECT CONTACT */}
            <Reveal delay={0.15}>
              <div className="hairline-top pt-12">
                <h4 className="font-serif-display text-2xl mb-5">
                  Reach us directly
                </h4>

                <div className="space-y-4 text-sm">
                  <a
                    href="mailto:gradelabstudios@gmail.com"
                    className="flex items-center gap-3 hover:text-foreground transition-colors"
                  >
                    <Mail
                      className="h-4 w-4 text-foreground/60"
                      strokeWidth={1.5}
                    />
                    <span>gradelabstudios@gmail.com</span>
                  </a>

                  <a
                    href="tel:+919911990332"
                    className="flex items-center gap-3 hover:text-foreground transition-colors"
                  >
                    <Phone
                      className="h-4 w-4 text-foreground/60"
                      strokeWidth={1.5}
                    />
                    <span>+91 9911990332</span>
                  </a>
                </div>

                <a
                  href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability"
                  className="mt-6 btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* SOCIALS */}
            <Reveal delay={0.2}>
              <div className="hairline-top pt-12">
                <h4 className="font-serif-display text-2xl mb-5">
                  Follow us
                </h4>

                <div className="flex gap-2">
                  {[
                    {
                      Icon: Twitter,
                      href: "https://x.com/GradeLabStudios",
                    },
                    {
                      Icon: Linkedin,
                      href: "https://www.linkedin.com/company/gradelab-studios/",
                    },
                    {
                      Icon: Instagram,
                      href: "https://www.instagram.com/gradelabstudios?igsh=MThvcTdleGJsOXRlZg==",
                    },
                    {
                      Icon: Facebook,
                      href: "https://www.facebook.com/share/1Hv2WinQpC/",
                    },
                    {
                      Icon: Youtube,
                      href: "https://youtube.com/@gradelabstudios?si=KVfFyOFsd-xDtM5r",
                    },
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 md:py-32 mt-10 md:mt-16 surface-soft">
        <div className="container">
          <Reveal>
            <h2 className="font-serif-display text-3xl md:text-7xl leading-[1.05] max-w-5xl">
              Great brands aren't built by waiting. <em>Let's start.</em>
            </h2>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <label className="block pt-6">
    <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
      {label}
    </span>
    {children}
  </label>
);

export default Contact;