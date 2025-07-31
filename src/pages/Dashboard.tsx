import { StatCard } from "@/components/StatCard";
import { AppointmentCard } from "@/components/AppointmentCard";
import { Calendar, Users, Clock, DollarSign, TrendingUp, AlertCircle } from "lucide-react";

export default function Dashboard() {
  const todayAppointments = [
    {
      time: "09:00",
      patientName: "María González",
      treatment: "Limpieza dental",
      status: "completed" as const,
      notes: "Paciente muy colaborativa. Próxima cita en 6 meses."
    },
    {
      time: "10:30",
      patientName: "Carlos Rodríguez",
      treatment: "Empaste dental",
      status: "completed" as const,
      notes: "Empaste en molar superior derecho completado."
    },
    {
      time: "14:00",
      patientName: "Ana Martínez",
      treatment: "Consulta de ortodoncia",
      status: "upcoming" as const,
      notes: "Primera consulta para evaluación de brackets."
    },
    {
      time: "15:30",
      patientName: "Pedro Silva",
      treatment: "Extracción dental",
      status: "upcoming" as const,
      notes: "Muela del juicio inferior izquierda."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          ¡Buen día, Dr. Layerenza!
        </h1>
        <p className="text-muted-foreground">
          Aquí tienes un resumen de tu jornada del {new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Pacientes hoy"
          value="4"
          subtitle="2 completados, 2 pendientes"
          icon={Users}
          trend="neutral"
          className="fade-in-delay-1"
        />
        <StatCard
          title="Próxima cita"
          value="14:00"
          subtitle="Ana Martínez - Ortodoncia"
          icon={Clock}
          trend="neutral"
          className="fade-in-delay-2"
        />
        <StatCard
          title="Ingresos del día"
          value="$2,850"
          subtitle="3 tratamientos facturados"
          icon={DollarSign}
          trend="up"
          trendValue="+15% vs ayer"
          className="fade-in-delay-3"
        />
        <StatCard
          title="Pacientes este mes"
          value="156"
          subtitle="23 nuevos pacientes"
          icon={TrendingUp}
          trend="up"
          trendValue="+8% vs mes anterior"
          className="fade-in-delay-3"
        />
      </div>

      {/* Today's Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="fade-in-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Citas de hoy</h2>
                <p className="text-sm text-muted-foreground">
                  {todayAppointments.length} citas programadas
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <AppointmentCard
                key={index}
                {...appointment}
                className={`fade-in-delay-${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions & Alerts */}
        <div className="space-y-6">
          <div className="fade-in-delay-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Recordatorios</h2>
                <p className="text-sm text-muted-foreground">Tareas pendientes</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="dental-card bg-warning/5 border-warning/20 fade-in-delay-2">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Inventario bajo</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Amalgama dental y anestesia local necesitan reposición
                  </p>
                </div>
              </div>
            </div>

            <div className="dental-card bg-primary/5 border-primary/20 fade-in-delay-3">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Confirmaciones pendientes</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    3 citas de mañana requieren confirmación telefónica
                  </p>
                </div>
              </div>
            </div>

            <div className="dental-card bg-success/5 border-success/20 fade-in-delay-3">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Meta mensual</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Has alcanzado el 78% de tu objetivo mensual de ingresos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}