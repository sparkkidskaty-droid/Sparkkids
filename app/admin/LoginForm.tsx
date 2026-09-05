"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    login,
    null
  );

  return (
    <form
      action={formAction}
      className="mx-auto mt-10 max-w-sm rounded-2xl border border-ink/10 bg-white p-8 shadow-sm"
    >
      <h1 className="font-display text-2xl font-extrabold text-ink">
        Staff login
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        Enter the admin password to view camp signups.
      </p>
      <input
        type="password"
        name="password"
        required
        autoFocus
        placeholder="Admin password"
        className="mt-6 w-full rounded-lg border border-ink/15 bg-cream px-4 py-2.5 text-ink outline-none focus:border-spark"
      />
      {state?.error ? (
        <p className="mt-2 text-sm font-medium text-red-600">{state.error}</p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="mt-4 w-full rounded-full bg-spark px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-spark-deep disabled:opacity-60"
      >
        {pending ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}
