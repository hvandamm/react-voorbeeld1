"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full flex flex-col gap-3 shrink-0">
      
      {/* 2. RECHTHOEK MET RONDE KNOP */}
      <div className="h-20 w-full bg-white rounded-xl flex items-center justify-center p-4 shadow-sm">
        <button className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow transition-colors">
          <span className="text-xl font-bold">+</span>
        </button>
      </div>

      {/* 3. MENU COLUMN */}
      <nav className="flex-1 bg-white rounded-xl p-5 overflow-y-auto shadow-sm text-sm">
        {/* Sectie-titel */}
        <div className="text-xs font-bold text-[rgb(20,108,142)] uppercase tracking-widest mb-4">
          Administratie
        </div>

        {/* De 3 keuzes onder elkaar */}
        <div className="flex flex-col gap-1">
          <a href="#" className="p-2 text-[rgb(20,108,142)] hover:bg-slate-50 rounded-lg cursor-pointer font-semibold transition-colors">
            Patiëntenoverzicht
          </a>
          <a href="#" className="p-2 text-[rgb(20,108,142)] hover:bg-slate-50 hover:text-slate-900 rounded-lg cursor-pointer font-semibold transition-colors">
            Contactpersonen
          </a>
          <a href="#" className="p-2 text-[rgb(20,108,142)] hover:bg-slate-50 hover:text-slate-900 rounded-lg cursor-pointer font-semibold transition-colors">
            Meldingen
          </a>
        </div>
      </nav>

    </aside>
  );
}