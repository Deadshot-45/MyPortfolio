"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const sender = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a new contact"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\n${message}`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-[var(--foreground)]">
          <span>Name</span>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-2xl border border-[var(--border-strong)]/80 bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-[var(--foreground)]">
          <span>Email</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-2xl border border-[var(--border-strong)]/80 bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-[var(--foreground)]">
        <span>Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-[1.5rem] border border-[var(--border-strong)]/80 bg-[var(--surface-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
          placeholder="Tell me about the product, role, or collaboration."
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
      >
        Send message
      </button>
      {sent ? (
        <p className="text-sm text-[var(--muted-foreground)]">
          Your email client should open with the message draft ready.
        </p>
      ) : null}
    </form>
  );
}
