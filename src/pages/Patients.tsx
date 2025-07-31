import { useState } from "react";
import { Search, Plus, Filter, User, Phone, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  lastVisit: string;
  nextAppointment?: string;
  treatmentHistory: string[];
  status: "active" | "inactive";
}

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const patients: Patient[] = [
    {
      id: "P001",
      name: "María González",
      phone: "+34 666 123 456",
      email: "maria.gonzalez@email.com",
      lastVisit: "2025-01-30",
      nextAppointment: "2025-02-15",
      treatmentHistory: ["Limpieza dental", "Empaste", "Revisión general"],
      status: "active"
    },
    {
      id: "P002",
      name: "Carlos Rodríguez",
      phone: "+34 677 234 567",
      email: "carlos.rodriguez@email.com",
      lastVisit: "2025-01-29",
      treatmentHistory: ["Extracción muela del juicio", "Limpieza dental"],
      status: "active"
    },
    {
      id: "P003",
      name: "Ana Martínez",
      phone: "+34 688 345 678",
      email: "ana.martinez@email.com",
      lastVisit: "2024-12-15",
      nextAppointment: "2025-02-01",
      treatmentHistory: ["Consulta ortodoncia", "Brackets"],
      status: "active"
    },
    {
      id: "P004",
      name: "Pedro Silva",
      phone: "+34 699 456 789",
      email: "pedro.silva@email.com",
      lastVisit: "2024-11-20",
      treatmentHistory: ["Revisión general"],
      status: "inactive"
    }
  ];

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.phone.includes(searchTerm) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || patient.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pacientes</h1>
          <p className="text-muted-foreground">
            Gestiona la información de todos tus pacientes
          </p>
        </div>
        <Button className="w-fit">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo paciente
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 fade-in-delay-1">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar por nombre, teléfono o email..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Activos</SelectItem>
            <SelectItem value="inactive">Inactivos</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Más filtros
        </Button>
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient, index) => (
          <div key={patient.id} className={`dental-card fade-in-delay-${index + 1}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{patient.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {patient.id}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                patient.status === "active" 
                  ? "bg-success/10 text-success border border-success/20" 
                  : "bg-muted text-muted-foreground border border-border"
              }`}>
                {patient.status === "active" ? "Activo" : "Inactivo"}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">{patient.phone}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">
                  Última visita: {new Date(patient.lastVisit).toLocaleDateString('es-ES')}
                </span>
              </div>

              {patient.nextAppointment && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">
                    Próxima cita: {new Date(patient.nextAppointment).toLocaleDateString('es-ES')}
                  </span>
                </div>
              )}

              <div className="pt-3 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Historial</span>
                </div>
                <div className="space-y-1">
                  {patient.treatmentHistory.slice(0, 2).map((treatment, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground">
                      • {treatment}
                    </p>
                  ))}
                  {patient.treatmentHistory.length > 2 && (
                    <p className="text-xs text-primary">
                      +{patient.treatmentHistory.length - 2} más...
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button size="sm" className="flex-1">Ver perfil</Button>
              <Button size="sm" variant="outline" className="flex-1">Agendar cita</Button>
            </div>
          </div>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <div className="text-center py-12 fade-in-delay-2">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">No se encontraron pacientes</h3>
          <p className="text-muted-foreground">
            Intenta ajustar los filtros de búsqueda o añade un nuevo paciente.
          </p>
        </div>
      )}
    </div>
  );
}