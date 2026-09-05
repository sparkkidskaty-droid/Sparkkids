import { cookies } from "next/headers";
import { logout } from "./actions";
import { ADMIN_COOKIE, sessionToken } from "./session";
import LoginForm from "./LoginForm";
import AdminTable, { type Submission } from "./AdminTable";

export const metadata = {
  title: "Admin | Spark Kids",
  robots: { index: false, follow: false },
}

async function fetchSubmissions(): Promise<{
  rows: Submission[];
  error?: string;
  missingEnv?: boolean;
}> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { rows: [], missingEnv: true };
  try {
    const res = await fetch(
      `${url}/rest/v1/camp_interest?select=*`,
      {
        headers: { apikey: key, Authorization: `Bearer ${key}` },
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return { rows: [], error: `Supabase REST returned ${res.status}` };
    }
    const rows = (await res.json()) as Submission[];
    rows.sort((a, b) => b.created_at.localeCompare(a.created_at));
    return { rows };
  } catch (err) {
    return {
      rows: [],
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

function SetupNotes() {
  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-ink/10 bg-cream-dark/40 p-6 text-sm leading-relaxed text-ink-soft">
      <p className="font-semibold text-ink">One-time setup needed</p>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li>
          Add <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs text-ink">ADMIN_PASSWORD</code>{" "}
          — any strong passphrase you choose — to <code>.env.local</code>{" "}
          locally and to Vercel (Settings → Environment Variables).
        </li>
        <li>
          Add <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs text-ink">SUPABASE_SERVICE_ROLE_KEY</code>{" "}
          from Supabase (Project Settings → API → service_role). It bypasses row
          security, so it must stay server-side only — never prefix it with
          NEXT_PUBLIC_.
        </li>
        <li>Restart the dev server (or redeploy on Vercel).</li>
      </ol>
    </div>
  );
}

export default async function AdminPage() {
  const store = await cookies();
  const authed = store.get(ADMIN_COOKIE)?.value === sessionToken();

  if (!authed) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-12">
        <LoginForm />
        <SetupNotes />
      </div>
    );
  }

  const { rows, error, missingEnv } = await fetchSubmissions();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl font-extrabold text-ink">
          Camp signups
        </h1>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-cream"
          >
            Log out
          </button>
        </form>
      </div>

      {missingEnv ? (
        <SetupNotes />
      ) : error ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Could not load signups: {error}
        </p>
      ) : (
        <div className="mt-8">
          <AdminTable rows={rows} />
        </div>
      )}
    </div>
  );
}
