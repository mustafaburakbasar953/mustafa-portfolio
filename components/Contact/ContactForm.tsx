"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconSend } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_wff8wqo",
        "template_d2qe4t4",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "krKigqgc_5NVyutEM"
      );

      alert("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
    console.log("EMAILJS ERROR:", error);

    alert(
      `Status: ${error?.status}\nText: ${error?.text}\nMessage: ${
      error?.message || "Unknown error"
    }`
  );
  } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full resize-none rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.45)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <IconSend
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />

          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </motion.form>
  );
}