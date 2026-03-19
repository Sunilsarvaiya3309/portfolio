"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const phoneNumber = "919727808076"; // without + sign
    const text = `Hello, my name is ${name}.

    Email: ${email}.

    Message: ${message}`;

    const encodedText = encodeURIComponent(text);

    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(url, "_blank");
  };
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 relative overflow-hidden"
    >
      {/* floating background icons (hidden on mobile) */}
      {/* floating background icons */}

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="
        absolute 
        top-10 left-4
        md:top-20 md:left-10
        text-red-500 opacity-40 
        text-4xl md:text-6xl
        "
      >
        <FiMail />
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="
        absolute 
        bottom-10 right-4
        md:bottom-20 md:right-10
        text-red-500 opacity-40 
        text-4xl md:text-6xl
        "
      >
        <FiPhone />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="
        absolute
        top-20 right-6
        md:top-40 md:right-20
        text-red-500 opacity-30
        text-5xl md:text-7xl
        "
      >
        <FiLinkedin />
      </motion.div>
      <div className="max-w-6xl mx-auto px-5">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-red-500 mb-12 md:mb-16 text-center"
        >
          <FiSend className="text-2xl md:text-3xl animate-pulse" />
          Let's Connect
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-base md:text-lg">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:sunilsarvaiya7989@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 border border-red-500/40 p-4 rounded-lg hover:border-red-500 transition"
            >
              <FiMail className="text-red-500 text-xl md:text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="break-all">sunilsarvaiya7989@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+919727808076"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 border border-red-500/40 p-4 rounded-lg hover:border-red-500 transition"
            >
              <FiPhone className="text-red-500 text-xl md:text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Mobile</p>
                <p>+91 9727808076</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sunil-sarvaiya-4b9702277"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 border border-red-500/40 p-4 rounded-lg hover:border-red-500 transition"
            >
              <FiLinkedin className="text-red-500 text-xl md:text-2xl" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p>View Profile</p>
              </div>
            </motion.a>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-3 bg-zinc-900 border border-red-500/40 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-3 bg-zinc-900 border border-red-500/40 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={4}
                placeholder="How can I help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 p-3 bg-zinc-900 border border-red-500/40 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <motion.button
              onClick={handleWhatsApp}
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="w-full md:w-auto cursor-pointer flex justify-center items-center gap-2 bg-red-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition"
            >
              <FiSend />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
