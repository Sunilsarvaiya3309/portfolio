"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiSend,
  FiArrowUpRight,
  FiMessageCircle,
  FiAlertCircle,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

// ======================================================
// ANIMATION VARIANTS
// ======================================================

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ======================================================
// TOAST TYPE
// ======================================================

type ToastType = "success" | "error";

interface ToastState {
  message: string;
  type: ToastType;
}

// ======================================================
// CONTACT
// ======================================================

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Custom toast state
  const [toast, setToast] = useState<ToastState | null>(null);

  // ====================================================
  // SHOW TOAST
  // ====================================================

  const showToast = (message: string, type: ToastType = "success") => {
    setToast({
      message,
      type,
    });
  };

  // ====================================================
  // AUTO HIDE TOAST
  // ====================================================

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [toast]);

  // ====================================================
  // WHATSAPP
  // ====================================================

  const handleWhatsApp = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("Please fill in all fields.", "error");
      return;
    }

    const phoneNumber = "919727808076";

    const text = `Hello, my name is ${name}.

Email: ${email}

Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    showToast("Opening WhatsApp...", "success");

    setTimeout(() => {
      window.open(url, "_blank");
    }, 500);
  };

  return (
    <>
      {/* ==================================================
          CUSTOM TOAST
      ================================================== */}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              x: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              x: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
        fixed
        right-4
        top-4
        z-[9999]
        w-[calc(100%-2rem)]
        max-w-sm
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/20
        bg-[#061018]/95
        shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(34,211,238,0.08)]
        backdrop-blur-xl
      "
          >
            {/* ==================================================
          CYAN GLOW
      ================================================== */}

            <div
              className="
          pointer-events-none
          absolute
          -left-10
          -top-10
          h-28
          w-28
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
            />

            {/* ==================================================
          BLUE GLOW
      ================================================== */}

            <div
              className="
          pointer-events-none
          absolute
          -bottom-12
          -right-12
          h-24
          w-24
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
            />

            {/* ==================================================
          CONTENT
      ================================================== */}

            <div className="relative flex items-center gap-3 p-4">
              {/* Icon */}

              <motion.div
                initial={{
                  scale: 0.8,
                  rotate: -10,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                }}
                className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/20
            bg-cyan-400/[0.06]
            text-cyan-300
            shadow-[0_0_20px_rgba(34,211,238,0.08)]
          "
              >
                {toast.type === "success" ? (
                  <FiCheckCircle className="text-xl" />
                ) : (
                  <FiAlertCircle className="text-xl" />
                )}
              </motion.div>

              {/* Message */}

              <div className="min-w-0 flex-1">
                <p
                  className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-cyan-400/80
            "
                >
                  {toast.type === "success"
                    ? "Message Sent"
                    : "Required Fields"}
                </p>

                <p className="mt-1 text-sm leading-5 text-slate-300">
                  {toast.message}
                </p>
              </div>

              {/* Close */}

              <button
                type="button"
                onClick={() => setToast(null)}
                className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-lg
            text-slate-600
            transition-all
            duration-300
            hover:bg-cyan-400/[0.06]
            hover:text-cyan-300
          "
              >
                <FiX />
              </button>
            </div>

            {/* ==================================================
          PROGRESS BAR
      ================================================== */}

            <div className="relative h-[2px] w-full bg-white/[0.03]">
              <motion.div
                initial={{
                  width: "100%",
                }}
                animate={{
                  width: "0%",
                }}
                transition={{
                  duration: 3,
                  ease: "linear",
                }}
                className="
            h-full
            bg-gradient-to-r
            from-cyan-400
            via-cyan-300
            to-blue-500
            shadow-[0_0_10px_rgba(34,211,238,0.6)]
          "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================================================
          CONTACT SECTION
      ================================================== */}

      <section
        id="contact"
        className="
          relative
          overflow-hidden
          bg-[#030508]
          px-6
          py-28
          text-white
          sm:px-10
          lg:px-16
        "
      >
        {/* ==================================================
            BACKGROUND
        ================================================== */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#0b1c2d_0%,#050a11_40%,#030508_80%)]" />

        {/* Cyan Orb */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-cyan-400/[0.055]
            blur-[130px]
          "
        />

        {/* Blue Orb */}

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 70, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            bottom-10
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-blue-500/[0.05]
            blur-[140px]
          "
        />

        {/* Small Indigo Orb */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/3
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-indigo-500/[0.035]
            blur-[110px]
          "
        />

        {/* ==================================================
            GRID
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          }}
        />

        {/* Vignette */}

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />

        {/* ==================================================
            FLOATING ICONS
        ================================================== */}

        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-5
            top-24
            hidden
            text-5xl
            text-cyan-400/[0.12]
            sm:block
            md:left-12
            md:text-7xl
          "
        >
          <FiMail />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-20
            right-5
            hidden
            text-5xl
            text-blue-400/[0.12]
            sm:block
            md:right-12
            md:text-7xl
          "
        >
          <FiPhone />
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            right-10
            top-32
            hidden
            text-6xl
            text-indigo-400/[0.1]
            md:block
            md:text-8xl
          "
        >
          <FiLinkedin />
        </motion.div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* ==================================================
              HEADER
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-16 text-center"
          >
            {/* Label */}

            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-cyan-400 sm:w-12" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-400/70 sm:text-[10px]">
                06 / Contact
              </span>

              <span className="h-px w-8 bg-cyan-400 sm:w-12" />
            </div>

            {/* Title */}

            <h2
              className="
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              {"Let's Connect".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                    rotateX: -60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -7,
                    color: "#67e8f9",
                    textShadow: "0 0 25px rgba(34,211,238,0.6)",
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-slate-500
                sm:text-base
              "
            >
              Have a project in mind, an idea to discuss, or simply want to say
              hello? Let&apos;s build something great together.
            </motion.p>
          </motion.div>

          {/* ==================================================
              MAIN GRID
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          >
            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <motion.div
              variants={leftVariants}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-6
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Top Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-cyan-400/[0.06]
                  blur-[80px]
                "
              />

              <div className="relative z-10">
                {/* Mini Heading */}

                <div className="mb-8 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.05]
                      text-cyan-300
                    "
                  >
                    <FiMessageCircle />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Let&apos;s talk
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                      Available for opportunities
                    </p>
                  </div>
                </div>

                {/* Description */}

                <p
                  className="
                    max-w-md
                    text-sm
                    leading-7
                    text-slate-500
                    sm:text-base
                  "
                >
                  I&apos;m always interested in discussing new projects,
                  creative ideas, freelance opportunities and frontend
                  development work.
                </p>

                {/* Contact Cards */}

                <div className="mt-8 space-y-3">
                  <ContactCard
                    icon={<FiMail />}
                    label="Email"
                    value="sunilsarvaiya7989@gmail.com"
                    href="mailto:sunilsarvaiya7989@gmail.com"
                  />

                  <ContactCard
                    icon={<FiPhone />}
                    label="Mobile"
                    value="+91 9727808076"
                    href="tel:+919727808076"
                  />

                  <ContactCard
                    icon={<FiLinkedin />}
                    label="LinkedIn"
                    value="View Profile"
                    href="https://www.linkedin.com/in/sunil-sarvaiya-4b9702277"
                    external
                  />
                </div>

                {/* Status */}

                <div className="mt-8 border-t border-white/[0.05] pt-6">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-emerald-400
                        shadow-[0_0_10px_rgba(52,211,153,0.7)]
                      "
                    />

                    <span className="text-xs text-slate-500">
                      Currently open to new opportunities
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ==================================================
                RIGHT FORM
            ================================================== */}

            <motion.form
              variants={rightVariants}
              onSubmit={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-6
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Form Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -left-20
                  -top-20
                  h-56
                  w-56
                  rounded-full
                  bg-blue-400/[0.05]
                  blur-[80px]
                "
              />

              <div className="relative z-10">
                {/* Form Header */}

                <div className="mb-8">
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]
                      text-cyan-400/60
                    "
                  >
                    Send a message
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-slate-100
                    "
                  >
                    Start a conversation
                  </h3>
                </div>

                {/* Name */}

                <AnimatedInput
                  label="Name"
                  placeholder="Your name"
                  value={name}
                  onChange={setName}
                  type="text"
                />

                {/* Email */}

                <AnimatedInput
                  label="Email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={setEmail}
                  type="email"
                />

                {/* Message */}

                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    Message
                  </label>

                  <motion.textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    whileFocus={{
                      borderColor: "rgba(34,211,238,0.5)",
                      boxShadow: "0 0 25px rgba(34,211,238,0.06)",
                    }}
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      px-4
                      py-3
                      text-sm
                      text-slate-200
                      outline-none
                      placeholder:text-slate-700
                      transition-all
                      duration-300
                      focus:bg-cyan-400/[0.02]
                    "
                  />
                </div>

                {/* Button */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 35px rgba(34,211,238,0.15)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative
                    flex
                    w-full
                    cursor-pointer
                    items-center
                    justify-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-cyan-400/30
                    bg-cyan-400/[0.06]
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-cyan-300
                    transition-all
                    duration-300
                    hover:border-cyan-400/60
                    hover:bg-cyan-400/[0.1]
                  "
                >
                  {/* Shine */}

                  <motion.span
                    initial={{
                      x: "-150%",
                    }}
                    whileHover={{
                      x: "150%",
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    className="
                      absolute
                      inset-y-0
                      w-20
                      skew-x-[-20deg]
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                    "
                  />

                  <FiSend className="relative z-10" />

                  <span className="relative z-10">Send via WhatsApp</span>

                  <FiArrowUpRight
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </motion.button>

                <p className="mt-4 text-center text-[9px] text-slate-700">
                  Your message will open directly in WhatsApp.
                </p>
              </div>
            </motion.form>
          </motion.div>

          {/* ==================================================
              BOTTOM LINE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-16
              h-px
              max-w-3xl
              origin-center
              bg-gradient-to-r
              from-transparent
              via-cyan-400/20
              to-transparent
            "
          />
        </div>
      </section>
    </>
  );
}

// ======================================================
// CONTACT CARD
// ======================================================

function ContactCard({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{
        x: 6,
        borderColor: "rgba(34,211,238,0.3)",
        backgroundColor: "rgba(34,211,238,0.025)",
      }}
      className="
        group
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.015]
        p-4
        transition-all
        duration-300
      "
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.07]
            bg-white/[0.025]
            text-cyan-400
            transition-colors
            duration-300
            group-hover:border-cyan-400/20
            group-hover:bg-cyan-400/[0.05]
          "
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
            {label}
          </p>

          <p className="mt-1 truncate text-sm text-slate-300">{value}</p>
        </div>
      </div>

      <FiArrowUpRight
        className="
          shrink-0
          text-slate-700
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-cyan-400
        "
      />
    </motion.a>
  );
}

// ======================================================
// ANIMATED INPUT
// ======================================================

function AnimatedInput({
  label,
  placeholder,
  value,
  onChange,
  type,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
}) {
  return (
    <div className="mb-5">
      <label
        className="
          mb-2
          block
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-slate-500
        "
      >
        {label}
      </label>

      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        whileFocus={{
          borderColor: "rgba(34,211,238,0.5)",
          boxShadow: "0 0 25px rgba(34,211,238,0.06)",
        }}
        className="
          w-full
          rounded-xl
          border
          border-white/[0.08]
          bg-black/20
          px-4
          py-3.5
          text-sm
          text-slate-200
          outline-none
          placeholder:text-slate-700
          transition-all
          duration-300
          focus:bg-cyan-400/[0.02]
        "
      />
    </div>
  );
}
