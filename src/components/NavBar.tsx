export default function Navbar() {
  return (
    <header className="h-16 w-full bg-white rounded-xl flex items-center justify-between px-4 shrink-0 shadow-sm text-sm">
      
      {/* LINKS: Logo, Profiel & Zoeken */}
      <div className="flex items-center gap-4">
        {/* Abstract Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
            Ω
        </div>
        </div>
          {/*</div>
          <span className="font-bold text-slate-900 hidden sm:inline">CareDash</span>
        </div>*/}

        {/* Scheidingslijn */}
        <div className="h-6 w-[1px] bg-slate-200" />

        {/* Profiel & Geblurde Naam */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-600 font-medium">
            U
          </div>
          {/* Gesimuleerde geblurde tekst */}
          <span className="font-bold">gebruiker</span>
        </div>

        {/* Scheidingslijn */}
        <div className="h-6 w-[1px] bg-slate-200" />

        {/* Zoeksectie met de ronde "Patiënten" knop */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full pl-1 pr-3 py-1">
          <button className="px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm text-xs font-semibold text-slate-700">
            Patiënten
          </button>
          <input 
            type="text" 
            placeholder="Naam of RRN..." 
            className="bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 w-32 focus:w-48 transition-all duration-200 text-xs"
          />
        </div>
      </div>

      {/* MIDDEN/RECHTS: Donkergroen Hoofdmenu */}
      <nav className="hidden lg:flex items-center gap-5 font-medium text-emerald-800">
        <a href="#" className="hover:text-emerald-600 transition-colors border-b-2 border-emerald-600 pb-1 pt-1">Planning</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Zorgen</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Dossiers</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Facturatie</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Rapporten</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Catalogus</a>
      </nav>

      {/* RECHTS: Taal-toggle & Wafel-menu */}
      <div className="flex items-center gap-4">
        {/* NL/FR Toggle */}
        <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600">
          <button className="px-2 py-1 bg-white rounded-md shadow-sm text-slate-900">NL</button>
          <button className="px-2 py-1 hover:text-slate-900">FR</button>
        </div>

        {/* 3x3 Braille/Wafel Menu Icoon met pure Tailwind */}
        <button className="p-2 hover:bg-slate-50 rounded-lg flex flex-col justify-center items-center gap-0.5 group w-8 h-8" title="App launcher">
          <div className="grid grid-cols-3 gap-0.5 w-3.5 h-3.5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-slate-500 rounded-full group-hover:bg-slate-800 transition-colors" />
            ))}
          </div>
        </button>
      </div>

    </header>
  );
}