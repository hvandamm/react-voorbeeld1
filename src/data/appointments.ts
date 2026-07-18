export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  time: string; // Tijdstip van bezoek
  description: string;
  status: "gepland" | "voltooid" | "gemist";
}

export const mockAppointments: Appointment[] = [
  {
    id: "a1",
    patientId: "p1",
    patientName: "Jean Peeters",
    time: "08:15",
    description: "Ochtendtoilet + klaarzetten wekelijkse medicatie",
    status: "voltooid"
  },
  {
    id: "a2",
    patientId: "p3",
    patientName: "Lucas Mertens",
    time: "11:30",
    description: "Bloedsuikercontrole + insuline administratie",
    status: "voltooid"
  },
  {
    id: "a3",
    patientId: "p2",
    patientName: "Marie Devos",
    time: "14:00",
    description: "Complex verband wisselen rechterbeen",
    status: "gepland"
  },
  {
    id: "a4",
    patientId: "p1",
    patientName: "Jean Peeters",
    time: "19:30",
    description: "Avondronde: Toedienen oogdruppels",
    status: "gepland"
  }
];