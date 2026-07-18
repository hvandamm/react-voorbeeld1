export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  rrn: string;
  birthDate: string;
  address: string;
  phone: string;
  careType: string; // Type zorg dat ze nodig hebben
}

export const mockPatients: Patient[] = [
  {
    id: "p1",
    firstName: "Jean",
    lastName: "Peeters",
    rrn: "55.05.12-123.45",
    birthDate: "12-05-1955",
    address: "Dorpstraat 14, 2000 Antwerpen",
    phone: "+32 475 12 34 56",
    careType: "Hygiënische zorg & Medicatie"
  },
  {
    id: "p2",
    firstName: "Marie",
    lastName: "Devos",
    rrn: "42.09.23-987.65",
    birthDate: "23-09-1942",
    address: "Kerkstraat 89, 9000 Gent",
    phone: "+32 486 98 76 54",
    careType: "Wondzorg (Post-operatief)"
  },
  {
    id: "p3",
    firstName: "Lucas",
    lastName: "Mertens",
    rrn: "88.11.30-456.78",
    birthDate: "30-11-1988",
    address: "Stationsstraat 5, 3000 Leuven",
    phone: "+32 497 45 67 89",
    careType: "Insuline-inspuiting"
  }
];