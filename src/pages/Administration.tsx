import { DollarSign, TrendingUp, Calendar, Building2, Package, AlertTriangle } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function Administration() {
  const dailyMovements = [
    { type: "Ingreso", description: "Limpieza dental - María González", amount: "+$450", time: "09:15" },
    { type: "Ingreso", description: "Empaste - Carlos Rodríguez", amount: "+$680", time: "10:45" },
    { type: "Gasto", description: "Material dental - Amalgama", amount: "-$120", time: "12:30" },
    { type: "Ingreso", description: "Consulta - Ana Martínez", amount: "+$200", time: "14:20" },
  ];

  const bankAccounts = [
    { name: "Cuenta Principal", bank: "BBVA", balance: "$45,320", type: "Corriente" },
    { name: "Cuenta Ahorros", bank: "Santander", balance: "$12,850", type: "Ahorros" },
    { name: "Cuenta Nómina", bank: "CaixaBank", balance: "$8,500", type: "Nómina" },
  ];

  const providers = [
    { name: "Dental Supply Co.", category: "Material dental", lastOrder: "2025-01-28", amount: "$1,250" },
    { name: "Equipment Medical", category: "Equipamiento", lastOrder: "2025-01-15", amount: "$3,500" },
    { name: "Lab Prótesis", category: "Laboratorio", lastOrder: "2025-01-30", amount: "$850" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">Administración</h1>
        <p className="text-muted-foreground">
          Gestiona las finanzas y operaciones de tu clínica dental
        </p>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Saldo del día"
          value="$1,210"
          subtitle="3 ingresos, 1 gasto"
          icon={DollarSign}
          trend="up"
          trendValue="+$210 vs ayer"
          className="fade-in-delay-1"
        />
        <StatCard
          title="Facturación mensual"
          value="$28,450"
          subtitle="156 tratamientos"
          icon={TrendingUp}
          trend="up"
          trendValue="+12% vs mes anterior"
          className="fade-in-delay-2"
        />
        <StatCard
          title="Gastos mensuales"
          value="$8,920"
          subtitle="Material y equipamiento"
          icon={Package}
          trend="down"
          trendValue="-5% vs mes anterior"
          className="fade-in-delay-3"
        />
        <StatCard
          title="Margen neto"
          value="68%"
          subtitle="$19,530 beneficio"
          icon={Building2}
          trend="up"
          trendValue="+3% vs mes anterior"
          className="fade-in-delay-3"
        />
      </div>

      {/* Daily Cash Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="fade-in-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Caja diaria</h2>
                <p className="text-sm text-muted-foreground">
                  Movimientos del {new Date().toLocaleDateString('es-ES')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {dailyMovements.map((movement, index) => (
              <div key={index} className={`dental-card fade-in-delay-${index + 2}`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        movement.type === "Ingreso" 
                          ? "bg-success/10 text-success border border-success/20"
                          : "bg-destructive/10 text-destructive border border-destructive/20"
                      }`}>
                        {movement.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{movement.time}</span>
                    </div>
                    <p className="font-medium text-foreground">{movement.description}</p>
                  </div>
                  <div className={`text-lg font-bold ${
                    movement.type === "Ingreso" ? "text-success" : "text-destructive"
                  }`}>
                    {movement.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Accounts & Providers */}
        <div className="space-y-6">
          <div className="fade-in-delay-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Cuentas bancarias</h2>
                <p className="text-sm text-muted-foreground">Estado de tus cuentas</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {bankAccounts.map((account, index) => (
              <div key={index} className={`dental-card fade-in-delay-${index + 3}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{account.name}</p>
                    <p className="text-sm text-muted-foreground">{account.bank} • {account.type}</p>
                  </div>
                  <div className="text-lg font-bold text-foreground">{account.balance}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="fade-in-delay-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                <Package className="h-4 w-4 text-warning" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Proveedores</h3>
            </div>
          </div>

          <div className="space-y-3">
            {providers.map((provider, index) => (
              <div key={index} className={`dental-card fade-in-delay-${index + 4}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground">{provider.name}</p>
                    <p className="text-sm text-muted-foreground">{provider.category}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Último pedido: {new Date(provider.lastOrder).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-foreground">{provider.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="dental-card bg-warning/5 border-warning/20 fade-in-delay-2">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">Inventario bajo detectado</p>
            <p className="text-sm text-muted-foreground mt-1">
              Los siguientes productos necesitan reposición: Amalgama dental, Anestesia local, Guantes nitrilo (caja).
              Se recomienda realizar pedido antes del fin de semana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}