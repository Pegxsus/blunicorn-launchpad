interface ArticleTableProps {
  headers: string[];
  rows: string[][];
}

export const ArticleTable = ({ headers, rows }: ArticleTableProps) => {
  return (
    <div className="my-10 w-full overflow-x-auto rounded-2xl border border-white/10 bg-[#050510]">
      <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.02]">
            {headers.map((h, i) => (
              <th key={i} className="p-4 font-mono font-bold uppercase text-white/50 text-[11px] tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className={`p-4 text-white/80 ${cIdx === 0 ? "font-bold text-white" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
