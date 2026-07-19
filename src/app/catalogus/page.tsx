"use client";

import { useState } from "react";

// Mock data voor de catalogus (zorgactiviteiten/nomenclatuur)
const catalogItems = [
  { id: "101", code: "421111", title: "Wekelijks toilet", category: "Hygiëne", price: 24.50, description: "Volledige lichaamsverzorging inclusief hulp bij aankleden." },
  { id: "102", code: "425112", title: "Complexe wondzorg", category: "Wondzorg", price: 32.10, description: "Verzorging van post-operatieve wonden of chronische ulcera." },
  { id: "103", code: "423135", title: "Medicatie klaarzetten", category: "Medicatie", price: 12.80, description: "Wekelijkse voorbereiding van de pillendoos volgens voorschrift." },
  { id: "104", code: "427115", title: "Subcutane injectie", category: "Specifiek", price: 18.90, description: "Toediening van insuline, bloedverdunners of andere medicatie." },
  { id: "105", code: "421155", title: "Dagelijks toilet", category: "Hygiëne", price: 21.00, description: "Dagelijkse basishygiëne en ondersteuning." },
  { id: "106", code: "425134", title: "Compressietherapie", category: "Wondzorg", price: 15.40, description: "Aanleggen van steunkousen of compressieverbanden." },
];

export default function CatalogusPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("alle");

  const categories = ["alle", "Hygiëne", "Wondzorg", "Medicatie", "Specifiek"];

  // Filter logica
  const filteredItems = catalogItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.code.includes(searchTerm);
    const matchesCategory = activeCategory === "alle" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* HEADER & ZOEKBALK */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-slate-100 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Zorgcatalogus</h1>
          <p className="text-sm text-slate-500 mt-0.5">Overzicht van nomenclatuur en standaardhandelingen</p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Zoek op naam of RIZIV-code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-emerald-500 transition-all shadow-sm pl-10"
          />
          <span className="absolute left-3.5 top-2.5 text-slate-400">🔍</span>
        </div>
      </div>

      {/* CATEGORIE FILTERS */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
              activeCategory === cat
                ? "bg-emerald-800 text-white border-emerald-800 shadow-md"
                : "bg-white text-slate-500 border-slate-200 hover:border-emerald-300 hover:text-emerald-800"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* CATALOGUS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredItems.length === 0 ? (
          <div className="col-span-full py-20 text-center text-slate-400 text-sm italic">
            Geen handelingen gevonden die voldoen aan je zoekopdracht.
          </div>
        ) : (
          filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-teal-400 transition-all shadow-sm group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">
                  #{item.code}
                </span>
                <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                  item.category === 'Wondzorg' ? 'bg-teal-50 text-teal-700' :
                  item.category === 'Medicatie' ? 'bg-cyan-50 text-cyan-700' :
                  'bg-emerald-50 text-emerald-700'
                }`}>
                  {item.category}
                </span>
              </div>
              
              <h3 className="font-bold text-slate-800 group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-5 pt-4 border-t border-slate-50 flex justify-between items-center">
                <div className="text-emerald-900 font-black text-sm">
                  € {item.price.toFixed(2)}
                </div>
                <button className="text-[11px] font-bold text-teal-700 hover:underline">
                  Details bekijken →
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* FOOTER INFO */}
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4">
        <p className="text-[11px] text-emerald-800 leading-relaxed text-center">
          De prijzen en nomenclatuurcodes in deze catalogus worden automatisch gesynchroniseerd met de laatste <span className="font-bold">RIZIV-richtlijnen</span>. 
          Laatste update: 01-07-2024.
        </p>
      </div>
    </div>
  );
}