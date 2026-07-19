"use client";

import { useState } from "react";

export default function RapportenPage() {
  const [tijdlijn, setTijdlijn] = useState("maand");

  // Mock data voor de zorgstatistieken
  const zorgVerdeling = [
    { type: "Medicatie", aantal: 142, percentage: 45, color: "bg-emerald-600" },
    { type: "Wondzorg", aantal: 94, percentage: 30, color: "bg-teal-600" },
    { type: "Hygiëne", aantal: 47, percentage: 15, color: "bg-teal-750" },
    { type: "Infuus", aantal: 31, percentage: 10, color: "bg-slate-400" },
  ];

  // Mock data voor de maandelijkse evolutie (bezoeken)
  const maandelijksOverzicht = [
    { maand: "Maart", bezoeken: 210 },
    { maand: "April", bezoeken: 245 },
    { maand: "Mei", bezoeken: 280 },
    { maand: "Juni", bezoeken: 314 }, // Hoogste punt
  ];

  const maxBezoeken = Math.max(...maandelijksOverzicht.map(m => m.bezoeken));

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Rapporten & Statistieken</h1>
          <p className="text-sm text-slate-500 mt-0.5">Visuele inzichten in prestaties en zorgbelasting</p>
        </div>

        {/* TIJDLIJN TOGGLE */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 self-start sm:self-auto">
          {["week", "maand", "jaar"].map((t) => (
            <button
              key={t}
              onClick={() => setTijdlijn(t)}
              className={`px-3 py-1.5 rounded-lg transition-all capitalize ${
                tijdlijn === t ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-900"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RECHTS: VERDELING TYPE ZORG (Horizontal Progress Bars) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Verdeling Zorgtypes</h3>
            <p className="text-xs text-slate-400 mt-0.5">Meest uitgevoerde handelingen deze {tijdlijn}</p>
          </div>

          <div className="space-y-4">
            {zorgVerdeling.map((zorg) => (
              <div key={zorg.type} className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">{zorg.type}</span>
                  <span className="text-slate-400">
                    {zorg.aantal}x <span className="text-slate-600 font-bold ml-1">({zorg.percentage}%)</span>
                  </span>
                </div>
                {/* Custom strakke progress bar */}
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${zorg.color} rounded-full transition-all duration-500`}
                    style={{ width: `${zorg.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINKS: EVOLUTIE GEPLANDE BEZOEKEN (Pure Tailwind Barchart) */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Evolutie Bezoeken</h3>
            <p className="text-xs text-slate-400 mt-0.5">Totaal aantal patiëntenbezoeken per maand</p>
          </div>

          {/* De Grafiek */}
          <div className="flex items-end justify-between h-40 pt-4 px-2 border-b border-slate-100">
            {maandelijksOverzicht.map((m) => {
              // Bereken de hoogte relatief ten opzichte van het maximum
              const barchartHeight = (m.bezoeken / maxBezoeken) * 100;

              return (
                <div key={m.maand} className="flex flex-col items-center flex-1 group">
                  {/* Tooltip cijfer boven de bar bij hover */}
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-100/70 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity mb-2">
                    {m.bezoeken}
                  </span>
                  {/* De daadwerkelijke staaf */}
                  <div
                    className="w-8 bg-teal-50 hover:bg-emerald-600 border border-teal-100 rounded-t-md transition-all duration-300 cursor-pointer flex items-end"
                    style={{ height: `${barchartHeight}%` }}
                  />
                  <span className="text-xs text-slate-400 font-medium mt-2">{m.maand}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RECENTE HIGHLIGHTS */}
      <div className="bg-slate-50/60 rounded-xl border border-slate-200/60 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-base">📈</span>
          <p className="text-xs text-slate-600 font-medium">
            <span className="font-bold text-slate-800">Inzicht:</span> De zorgbelasting voor <span className="font-bold text-emerald-800">Medicatie</span> is deze maand met 8% gestegen. Plan indien mogelijk extra tijd in de ochtendroutes.
          </p>
        </div>
      </div>
    </div>
  );
}