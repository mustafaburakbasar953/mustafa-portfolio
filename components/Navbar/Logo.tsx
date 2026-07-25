export default function Logo() {
  return (
    <a
      href="#"
      className="group flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 font-bold text-cyan-400 transition duration-300 group-hover:rotate-6 group-hover:scale-105">
        MB
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          Mustafa Burak Başar
        </h1>

        <p className="text-xs text-slate-400">
          Electrical & Electronics Engineer
        </p>
      </div>
    </a>
  );
}