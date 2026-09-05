"use client";

import { useEffect, useState, useActionState } from "react";
import { submitInterest, type InterestState } from "@/app/contact/actions";
import { issueFormToken } from "@/app/contact/actions";
import { dictionaries, type Lang } from "@/lib/translations";

const inputClass =
  "mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 outline-none transition-colors focus:border-spark";

export default function InterestForm({ lang }: { lang: Lang }) {
  const t = dictionaries[lang].form;
  const [state, formAction, pending] = useActionState<InterestState, FormData>(
    submitInterest,
    null
  );

  // Server-signed issue time; bots that post instantly get bounced, humans never notice.
  const [formToken, setFormToken] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    issueFormToken().then((token) => {
      if (active) setFormToken(token);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (state?.token) setFormToken(state.token);
  }, [state]);

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-court-deep/30 bg-court/15 p-8 text-center">
        <p className="font-display text-xl font-bold text-ink">
          {t.successTitle}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="lang" value={lang} />
      {formToken ? (
        <input key={formToken} type="hidden" name="form_token" value={formToken} />
      ) : null}

      {/* Honeypot: hidden from humans, irresistible to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="parent_name" className="block text-sm font-bold">
            {t.yourName}
          </label>
          <input id="parent_name" name="parent_name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="parent_email" className="block text-sm font-bold">
            {t.yourEmail}
          </label>
          <input
            id="parent_email"
            name="parent_email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="parent_phone" className="block text-sm font-bold">
          {t.phone}{" "}
          <span className="font-normal text-ink-soft">{t.optional}</span>
        </label>
        <input id="parent_phone" name="parent_phone" className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="camper_name" className="block text-sm font-bold">
            {t.camperName}
          </label>
          <input id="camper_name" name="camper_name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="camper_age" className="block text-sm font-bold">
            {t.camperAge}
          </label>
          <input
            id="camper_age"
            name="camper_age"
            type="number"
            min={3}
            max={18}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-bold">
          {t.notes}{" "}
          <span className="font-normal text-ink-soft">{t.optional}</span>
        </label>
        <textarea id="notes" name="notes" rows={3} className={inputClass} />
      </div>

      {state?.error && (
        <p className="rounded-xl bg-spark/10 px-4 py-3 text-sm font-medium text-spark-deep">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-spark px-6 py-3.5 font-bold text-white shadow-sm transition-colors hover:bg-spark-deep disabled:opacity-60"
      >
        {pending ? t.sending : t.submit}
      </button>
    </form>
  );
}
