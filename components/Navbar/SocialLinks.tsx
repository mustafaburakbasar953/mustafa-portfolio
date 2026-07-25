import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";

export default function SocialLinks() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <a
        href="https://github.com/"
        target="_blank"
        className="rounded-xl border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <IconBrandGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/mustafa-burak-ba%C5%9Far"
        target="_blank"
        className="rounded-xl border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <IconBrandLinkedin size={20} />
      </a>

      <a
        href="/CV.pdf"
        className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-300"
      >
        <IconDownload size={18} />
        CV
      </a>
    </div>
  );
}