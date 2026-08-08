"use client";

import { useActionState } from "react";
import { submitInterest, type InterestState } from "@/app/contact/actions";

const inputClass =
  "mt-1 w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 outline-none transition-colors focus:border-spark";

export default function InterestForm() {
  const [state, formAction, pending] = useActionState<InterestState, FormData>(
    submitInterest,
    null
  );

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-court-deep/30 bg-court/15 p-8 text-center">
        <p className="font-display text-xl font-bold text-ink">
          Thanks — we&apos;ve got your info!
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          We&apos;ll follow up by email about next steps and upcoming camp dates.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="parent_name" className="block text-sm font-bold">
            Your name
          </label>
          <input
            id="parent_name"
            name="parent_name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="parent_email" className="block text-sm font-bold">
            Your email
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
          Phone <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <input id="parent_phone" name="parent_phone" className={inputClass} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="camper_name" className="block text-sm font-bold">
            Camper&apos;s name
          </label>
          <input
            id="camper_name"
            name="camper_name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="camper_age" className="block text-sm font-bold">
            Camper&apos;s age
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
        <span className="block text-sm font-bold">Which camp?</span>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {[
            { value: "tennis", label: "Tennis" },
            { value: "running", label: "Running" },
            { value: "both", label: "Both" },
          ].map((option) => (
            <label
              key={option.value}
              className="cursor-pointer rounded-xl border-2 border-ink/15 px-4 py-2.5 text-center text-sm font-bold text-ink-soft transition-all has-checked:border-spark has-checked:bg-spark/10 has-checked:text-spark-deep"
            >
              <input
                type="radio"
                name="camp"
                value={option.value}
                defaultChecked={option.value === "tennis"}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-bold">
          Financial assistance
        </span>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {[
            { value: "full_price", label: "I can pay full price" },
            { value: "reduced", label: "I need a reduced rate" },
            { value: "free", label: "I need a free spot" },
          ].map((option) => (
            <label
              key={option.value}
              className="cursor-pointer rounded-xl border-2 border-ink/15 px-4 py-2.5 text-center text-sm font-bold text-ink-soft transition-all has-checked:border-court-deep has-checked:bg-court/20 has-checked:text-court-deep"
            >
              <input
                type="radio"
                name="assistance_level"
                value={option.value}
                defaultChecked={option.value === "full_price"}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-bold">
          Anything else we should know?{" "}
          <span className="font-normal text-ink-soft">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={inputClass}
        />
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
        {pending ? "Sending…" : "Sign up / get in touch"}
      </button>
    </form>
  );
}
