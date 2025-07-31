import { useState } from "react";
import { Calendar, Clock, Filter, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AppointmentCard } from "@/components/AppointmentCard";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const appointments = [
    {
      time: "09:00",
      patientName: "María González",
      treatment: "Limpieza dental",
      status: "completed" as const,
      notes: "Paciente muy colaborativa"
    },
    {
      time: "09:30",
      patientName: "Carlos Rodríguez",
      treatment: "Empaste dental",
      status: "completed" as const,
    },
    {
      time: "10:00",
      patientName: "Ana Martínez",
      treatment: "Consulta de ortodoncia",
      status: "upcoming" as const,
    },
    {
      time: "10:30",
      patientName: "Pedro Silva",
      treatment: "Extracción dental",
      status: "upcoming" as const,
    },
    {
      time: "11:00",
      patientName: "Lucía Torres",
      treatment: "Limpieza dental",
      status: "upcoming" as const,
    },
    {
      time: "11:30",
      patientName: "Miguel Fernández",
      treatment: "Revisión general",
      status: "upcoming" as const,
    },
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00"
  ];

  const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
  const currentWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agenda de turnos</h1>
          <p className="text-muted-foreground">
            Gestiona y visualiza todas las citas programadas
          </p>
        </div>
        <Button className="w-fit">
          <Plus className="h-4 w-4 mr-2" />
          Nueva cita
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 fade-in-delay-1">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar paciente..." 
              className="pl-10"
            />
          </div>
        </div>
        <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Todas las especialidades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las especialidades</SelectItem>
            <SelectItem value="general">Odontología general</SelectItem>
            <SelectItem value="orthodontics">Ortodoncia</SelectItem>
            <SelectItem value="surgery">Cirugía oral</SelectItem>
            <SelectItem value="endodontics">Endodoncia</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>

      {/* Week Navigator */}
      <div className="dental-card fade-in-delay-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">
            {new Date().toLocaleDateString('es-ES', { 
              month: 'long', 
              year: 'numeric' 
            })}
          </h3>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">←</Button>
            <Button variant="outline" size="sm">Hoy</Button>
            <Button variant="outline" size="sm">→</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {currentWeek.map((date, index) => (
            <div
              key={index}
              className={`p-3 text-center rounded-lg border transition-colors cursor-pointer ${
                index === 0 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'hover:bg-accent border-border'
              }`}
            >
              <div className="text-xs font-medium opacity-70">
                {weekDays[index]}
              </div>
              <div className="text-lg font-bold mt-1">
                {date.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time Slots */}
        <div className="dental-card fade-in-delay-3">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Horarios disponibles
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => {
              const hasAppointment = appointments.some(apt => apt.time === time);
              return (
                <button
                  key={time}
                  className={`p-3 text-sm rounded-lg border transition-colors ${
                    hasAppointment
                      ? 'bg-muted border-border text-muted-foreground cursor-not-allowed'
                      : 'bg-background border-border hover:bg-accent text-foreground'
                  }`}
                  disabled={hasAppointment}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground flex items-center gap-2 fade-in-delay-3">
            <Calendar className="h-5 w-5 text-primary" />
            Citas del día
          </h3>
          <div className="space-y-3">
            {appointments.map((appointment, index) => (
              <AppointmentCard
                key={index}
                {...appointment}
                className={`fade-in-delay-${index + 3}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}