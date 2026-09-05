import { Author } from "@/data/blog";

interface AuthorCardProps {
  author: Author;
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <aside className="my-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
      <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 p-1 flex items-center justify-center shrink-0">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-full h-full object-contain rounded-full brightness-0 invert"
        />
      </div>
      <div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 block mb-1">
          WRITTEN BY
        </span>
        <h4 className="text-base font-bold text-white mb-0.5">{author.name}</h4>
        <p className="text-xs text-white/50 mb-2">{author.role}</p>
        <p className="text-xs text-white/70 leading-relaxed max-w-xl">{author.bio}</p>
      </div>
    </aside>
  );
};

export default AuthorCard;
