"use client";

import { useState } from "react";
import { mockCareTasks, CareTask } from "@/data/careTasks"; // Pas het pad aan naar waar jouw mockdata staat

export default function ZorgenPage() {
  const [tasks, setTasks] = useState<CareTask[]>(mockCareTasks);
  const [filter, setFilter] = useState<"alle" | "hoog" | "open">("alle");

  // Functie om een taak te voltooien of te heropenen
  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter de taken op basis van de gekozen knop
  const filteredTasks = tasks.filter((task) => {
    if (filter === "hoog") return task.urgency === "hoog" && !task.completed;
    if (filter === "open") return !task.completed;
    return true; // "alle"
  });

// Bepaal de kleur van het zorgtype badge (volledig in het groen/zeegroen thema)
  const getTypeBadgeColor = (type: CareTask["type"]) => {
    switch (type) {
      case "Medicatie": 
        // Subtiel diep-groen
        return "bg-emerald-50 text-emerald-800 border-emerald-100/80";
      case "Wondzorg": 
        // Het typische appelblauwzeegroen (Teal)
        return "bg-teal-50 text-teal-850 border-teal-100";
      case "Infuus": 
        // Iets fisser zeegroen/cyan voor technische handelingen
        return "bg-cyan-50 text-cyan-850 border-cyan-100";
      case "Hygiëne": 
        // Neutraal zacht leigrijs/blauw zodat het contrast met medische taken duidelijk blijft
        return "bg-slate-100/70 text-slate-700 border-slate-200/60";
      default: 
        return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Zorgtaken</h1>
          <p className="text-sm text-slate-500 mt-0.5">Specifieke verpleegkundige acties voor vandaag</p>
        </div>

        {/* INTERACTIEVE FILTERS */}
        <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 self-start sm:self-auto">
          <button 
            onClick={() => setFilter("alle")}
            className={`px-3 py-1.5 rounded-lg transition-all ${filter === "alle" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-900"}`}
          >
            Alle ({tasks.length})
          </button>
          <button 
            onClick={() => setFilter("open")}
            className={`px-3 py-1.5 rounded-lg transition-all ${filter === "open" ? "bg-white text-slate-900 shadow-sm" : "hover:text-slate-900"}`}
          >
            Open ({tasks.filter(t => !t.completed).length})
          </button>
          <button 
            onClick={() => setFilter("hoog")}
            className={`px-3 py-1.5 rounded-lg transition-all ${filter === "hoog" ? "bg-white text-rose-600 shadow-sm" : "hover:text-rose-600"}`}
          >
            ⚠️ Dringend ({tasks.filter(t => t.urgency === "hoog" && !t.completed).length})
          </button>
        </div>
      </div>

      {/* TAKENLIJST */}
      <div className="grid gap-3">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-200 text-slate-400 text-sm">
            Geen zorgen gevonden voor deze filter.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div 
              key={task.id}
              className={`flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm transition-all ${
                task.completed ? "opacity-60 bg-slate-50/50" : "hover:border-slate-300"
              }`}
            >
              {/* LINKS: Checkbox + Info */}
              <div className="flex items-center gap-4">
                <input 
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500 cursor-pointer h-5 w-5 accent-emerald-600"
                />
                
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className={`font-semibold text-sm ${task.completed ? "text-slate-400 line-through" : "text-slate-800"}`}>
                      {task.patientName}
                    </h3>
                    <span className="text-xs text-slate-400">• {task.time}</span>
                  </div>
                  
                  {/* Tags onder de naam */}
                  <div className="flex gap-2 mt-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getTypeBadgeColor(task.type)}`}>
                      {task.type}
                    </span>
                    
                    {task.urgency === "hoog" && !task.completed && (
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-805 border border-amber-200/60 px-2 py-0.5 rounded-md">
                        Dringend
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* RECHTS: Actieknop of Status */}
              <div>
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                    task.completed 
                      ? "bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200" 
                      : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  }`}
                >
                  {task.completed ? "Heropen" : "Voltooi"}
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}