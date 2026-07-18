export default function Home() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-950">Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Welkom terug! Dit is het overzicht voor vandaag.</p>
      </div>

      {/* Tijdelijke placeholder kaarten om te zien hoe de content erin past */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 border border-slate-100 rounded-xl bg-slate-50">
          <h3 className="font-semibold text-slate-700">Patiënten vandaag</h3>
          <p className="text-3xl font-bold text-sky-600 mt-2">12</p>
        </div>
        <div className="p-5 border border-slate-100 rounded-xl bg-slate-50">
          <h3 className="font-semibold text-slate-700">Ongelezen berichten</h3>
          <p className="text-3xl font-bold text-sky-600 mt-2">4</p>
        </div>
        <div className="p-5 border border-slate-100 rounded-xl bg-slate-50">
          <h3 className="font-semibold text-slate-700">Te factureren</h3>
          <p className="text-3xl font-bold text-emerald-600 mt-2">€ 450</p>
        </div>
      </div>
    </div>
  );
}