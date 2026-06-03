import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    (e.target as HTMLFormElement).reset();
    toast.success(t.contact.thanks);
  };
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-luxury"
    >
      <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">{t.contact.subtitle}</h3>
      <p className="mt-3 text-sm text-muted-foreground italic">{t.contact.message}</p>
      <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-5 sm:grid-cols-2">
        <Field label={t.contact.name} name="name" required />
        <Field label={t.contact.email} name="email" type="email" required />
        <Field label={t.contact.phone} name="phone" type="tel" />
        <Field label={t.contact.lookingFor} name="category" placeholder={language === "en" ? "e.g. Villa in Lonavala" : "जैसे मुंबई में विला"} />
      </div>
      <div className="mt-5">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {t.contact.yourMessage}
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-primary outline-none focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-7 sm:mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-royal px-7 py-3.5 text-sm font-semibold text-white shadow-luxury transition-transform hover:scale-[1.03] disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {sending ? t.contact.sending : t.contact.send}
      </button>
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-border bg-secondary/40 px-4 text-sm text-primary outline-none focus:border-accent"
      />
    </div>
  );
}
