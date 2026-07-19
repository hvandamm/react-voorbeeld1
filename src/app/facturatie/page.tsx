"use client";

import { useState } from "react";

const mockInvoices = [
  { id: "INV-2024-001", patient: "Jeanine Peeters", amount: 145.50, date: "2024-07-12", status: "betaald" },
  { id: "INV-2024-002", patient: "Lucas Maes", amount: 88.20, date: "2024-07-14", status: "openstaand" },
  { id: "INV-2024-003", patient: "Maria Devos", amount: 210.00, date: "2024-07-15", status: "betaald" },
  { id: "INV-2024-004", patient: "Albert Janssens", amount: 45.00, date: "2024-07-01", status: "te laat" },
  { id: "INV-2024-005", patient: "Emma Willems", amount: 120.00, date: "2024-07-18", status: "openstaand" },
];

export default function FacturatiePage() {
  const [filter, setFilter] = useState("alle");

  const filteredInvoices = mockInvoices.filter(inv => 
    filter === "alle" ? true : inv.status === filter
  );

  const totalPaid = mockInvoices.filter(i => i.status === "betaald").reduce((acc, curr) => acc + curr.amount, 0);
  const totalOpen = mockInvoices.filter(i => i.status === "openstaand").reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-4">
        <h1 className="text-2xl font-bold text-slate-900">Facturatie & Inkomsten</h1>
        <p className="text-sm text-slate-500 mt-0.5">Beheer je facturen en monitor je cashflow</p>
      </div>

      {/* KPI KAARTEN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Totaal Betaald</p>
          <p className="text-2xl font-bold text-emerald-700 mt-1">€ {totalPaid.toFixed(2)}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Openstaand</p>
          {/* Aangepast naar jouw diepe teal/zeegroen */}
          <p className="text-2xl font-bold text-teal-800 mt-1">€ {totalOpen.toFixed(2)}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Facturen deze maand</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">{mockInvoices.length}</p>
        </div>
      </div>

      {/* FILTER & ACTIES */}
      <div className="flex justify-between items-center bg-slate-50/80 p-2 rounded-xl border border-slate-200/60">
        <div className="flex gap-1 text-xs font-semibold">
          {["alle", "betaald", "openstaand", "te laat"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-lg transition-all capitalize ${
                filter === s ? "bg-white text-emerald-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 transition-colors">
          + Nieuwe Factuur
        </button>
      </div>

      {/* FACTUREN TABEL */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
            <tr>
              <th className="p-4">Factuur ID</th>
              <th className="p-4">Patiënt</th>
              <th className="p-4">Datum</th>
              <th className="p-4">Bedrag</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Acties</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filteredInvoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50/30 transition-colors">
                <td className="p-4 font-mono text-xs text-slate-400">{inv.id}</td>
                <td className="p-4 font-bold text-slate-800">{inv.patient}</td>
                <td className="p-4 text-slate-500">{inv.date}</td>
                <td className="p-4 font-bold text-slate-800">€ {inv.amount.toFixed(2)}</td>
                <td className="p-4">
                  {/* NIEUWE SUBTIELE BADGES ZONDER GEEL/ROOD */}
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase border ${
                    inv.status === "betaald" 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                    inv.status === "openstaand" 
                      ? "bg-teal-50 text-teal-800 border-teal-100/70" :
                      /* Te laat: Rustig gedempt grijs, valt op door styling ipv kleur */
                        "bg-slate-100 text-slate-600 border-slate-200/80 font-black"
                  }`}>
                    {inv.status === "te laat" ? "• over tijd" : inv.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                   <button className="text-slate-400 hover:text-emerald-700 transition-colors text-xs font-semibold">
                     Inzien
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}