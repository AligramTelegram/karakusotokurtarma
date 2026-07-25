import type { Block } from "@/lib/posts";

// Blog blok renderer — h2/p/ul/ol/table (featured snippet dostu).
export default function PostBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 font-display text-2xl font-bold uppercase text-ink"
              >
                {b.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="leading-relaxed text-slate-600">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2">
                {b.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {b.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand/15 text-xs font-bold text-brand">
                      {j + 1}
                    </span>
                    {it}
                  </li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div
                key={i}
                className="overflow-x-auto rounded-xl border border-slate-200"
              >
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-ink">
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j} className="px-4 py-3 font-bold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-600">
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
