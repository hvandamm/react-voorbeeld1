"use client";

import { useState } from "react";
import { mockPatients, Patient } from "@/data/patients";

export default function DossiersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter de dossiers op basis van de zoekbalk op de pagina zelf
  const filteredPatients = mockPatients.filter(
    (patient) =>
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.rrn.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* HEADER + INTERNE ZOEKBALK */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Patiëntendossiers</h1>
          <p className="text-sm text-slate-500 mt-0.5">Beheer en bekijk de medische fiches van cliënten</p>
        </div>

        {/* Extra zoekbalk specifiek voor de dossierslijst */}
        <div className="bg-white border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 shadow-sm w-full sm:w-64">
          <input
            type="text"
            placeholder="Dossier zoeken..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs outline-none bg-transparent text-slate-700 placeholder-slate-400"
          />
        </div>
      </div>

      {/* DOSSIERS LIJST (TABEL VORM) */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        {filteredPatients.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm">
            Geen dossiers gevonden die voldoen aan de zoekterm.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-semibold text-xs uppercase tracking-wider">
                  <th className="p-4">Patiënt</th>
                  <th className="p-4">Rijksregisternummer (RRN)</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-slate-50/50 transition-colors group">
                    {/* NAAM + AVATAR */}
                    <td className="p-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-850 font-bold text-xs">
                        {patient.firstName[0]}{patient.lastName[0]}
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 block group-hover:text-emerald-800 transition-colors">
                          {patient.firstName} {patient.lastName}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">Dossier ID: #{patient.id}</span>
                      </div>
                    </td>

                    {/* RRN */}
                    <td className="p-4 font-mono text-xs text-slate-600">
                      {patient.rrn}
                    </td>

                    {/* STATUS */}
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Actief
                      </span>
                    </td>

                    {/* ACTIE KNOP */}
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => alert(`Dossier van ${patient.firstName} openen...`)}
                        className="text-xs font-bold text-emerald-800 bg-white border border-emerald-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-emerald-50 hover:border-emerald-300 transition-all"
                      >
                        Inzien
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}