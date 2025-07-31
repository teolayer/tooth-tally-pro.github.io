import { Clock, User, FileText } from "lucide-react";

interface AppointmentCardProps {
  time: string;
  patientName: string;
  treatment: string;
  status: "upcoming" | "completed" | "cancelled";
  notes?: string;
  className?: string;
}

export function AppointmentCard({
  time,
  patientName,
  treatment,
  status,
  notes,
  className = ""
}: AppointmentCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed": return "bg-success/10 text-success border-success/20";
      case "cancelled": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed": return "Completado";
      case "cancelled": return "Cancelado";
      default: return "Programado";
    }
  };

  return (
    <div className={`dental-card fade-in ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-lg font-semibold text-foreground">{time}</p>
              <div className="flex items-center gap-2 mt-1">
                <User className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">{patientName}</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{treatment}</p>
              {notes && (
                <div className="flex items-start gap-2 mt-2">
                  <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{notes}</p>
                </div>
              )}
            </div>
            
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
              {getStatusText()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}