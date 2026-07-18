import { mockAppointments } from "@/data/appointments";

export default function Home() {
  // We halen de afspraken voor vandaag op
  const appointments = mockAppointments;

  return (
    <div className="space-y-6">
      {/* HEADER VAN HET DASHBOARD */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dagplanning</h1>
          <p className="text-sm text-slate-500 mt-0.5">Overzicht van de zorgen voor vandaag</p>
        </div>
        <div className="text-sm font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
          {appointments.length} Bezoeken gepland
        </div>
      </div>

      {/* DE AGENDA/PLANNING LIJST */}
      <div className="flex flex-col gap-3">
        {appointments.map((appointment) => {
          // Bepaal de kleuren op basis van de status van het bezoek
          const isVoltooid = appointment.status === "voltooid";
          
          return (
            <div 
              key={appointment.id} 
              className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                isVoltooid 
                  ? "bg-slate-50/60 border-slate-200/60 opacity-75" 
                  : "bg-white border-slate-200 shadow-sm hover:border-slate-300"
              }`}
            >
              {/* LINKS: Tijdstip en Patiënt info */}
              <div className="flex items-center gap-6">
                {/* Tijdstip blokje */}
                <div className={`w-16 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                  isVoltooid ? "bg-slate-200 text-slate-500" : "bg-emerald-50 text-emerald-900 border border-emerald-100"
                }`}>
                  {appointment.time}
                </div>

                {/* Patiëntnaam en omschrijving van de zorg */}
                <div>
                  <h3 className={`font-bold text-sm ${isVoltooid ? "text-slate-500 line-through" : "text-slate-800"}`}>
                    {appointment.patientName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {appointment.description}
                  </p>
                </div>
              </div>

              {/* RECHTS: Status Badge */}
              <div>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  isVoltooid 
                    ? "bg-slate-200/80 text-slate-600" 
                    : "bg-amber-50 text-amber-800 border border-amber-100"
                }`}>
                  {appointment.status}
                </span>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}