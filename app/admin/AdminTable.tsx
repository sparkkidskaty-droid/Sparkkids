"use client";

import { useMemo, useState } from "react";

export type Submission = {
  id: string;
  parent_name: string;
  parent_email: string;
  parent_phone: string | null;
  camper_name: string;
  camper_age: number;
  notes: string | null;
  lang: string;
  created_at: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "America/Los_Angeles",
});

export default function AdminTable({ rows }: { rows: Submission[] }) {
  const [query, setQuery] = useState("");
  const [langFilter, setLangFilter] = useState<"all" | "en" | "zh">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out = rows.filter((r) => {
      if (langFilter !== "all" && r.lang !== langFilter) return false;
      if (!q) return true;
      return [r.parent_name, r.parent_email, r.camper_name, r.notes ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
    return out;
  }, [rows, query, langFilter]);

  const selectClass =
    "rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-spark";

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email, camper…"
          className="w-64 rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-spark"
        />
        <select
          value={langFilter}
          onChange={(e) =>
            setLangFilter(e.target.value as "all" | "en" | "zh")
          }
          className={selectClass}
        >
          <option value="all">All languages</option>
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
        <span className="text-sm font-medium text-ink-soft">
          {filtered.length} of {rows.length} signups
        </span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10 bg-white shadow-sm">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/10 bg-cream text-xs uppercase tracking-wide text-ink-soft">
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Parent</th>
              <th className="px-4 py-3 font-semibold">Contact</th>
              <th className="px-4 py-3 font-semibold">Camper</th>
              <th className="px-4 py-3 font-semibold">Lang</th>
              <th className="px-4 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b border-ink/5 last:border-0">
                <td className="whitespace-nowrap px-4 py-3 text-ink-soft">
                  {dateFormatter.format(new Date(r.created_at))}
                </td>
                <td className="px-4 py-3 font-semibold text-ink">
                  {r.parent_name}
                </td>
                <td className="px-4 py-3 text-ink-soft">
                  <a
                    href={`mailto:${r.parent_email}`}
                    className="text-spark hover:underline"
                  >
                    {r.parent_email}
                  </a>
                  {r.parent_phone ? (
                    <span className="block text-ink-soft">{r.parent_phone}</span>
                  ) : null}
                </td>
                <td className="px-4 py-3 text-ink">
                  {r.camper_name}
                  <span className="text-ink-soft"> · age {r.camper_age}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-cream px-2 py-0.5 text-xs font-bold uppercase text-ink-soft">
                    {r.lang}
                  </span>
                </td>
                <td className="max-w-xs px-4 py-3 text-ink-soft">
                  {r.notes ? (
                    <span className="line-clamp-3 whitespace-pre-wrap">
                      {r.notes}
                    </span>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-ink-soft"
                >
                  No signups match.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
