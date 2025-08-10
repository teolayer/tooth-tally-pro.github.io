import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Phone, Mail, MapPin, Calendar, Heart, FileText, CreditCard } from "lucide-react";

export function NewPatientForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dni: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    
    // Medical Information
    medicalConditions: "",
    medications: "",
    allergies: "",
    previousTreatments: "",
    
    // Insurance Information
    hasInsurance: "",
    insuranceCompany: "",
    policyNumber: "",
    
    // Additional Notes
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Patient data:", formData);
    // Here you would typically save the data
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="fade-in">
        <h1 className="text-3xl font-bold text-foreground">Nuevo Paciente</h1>
        <p className="text-muted-foreground">
          Complete la información del paciente para crear un nuevo registro
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <Card className="fade-in-delay-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Información Personal
            </CardTitle>
            <CardDescription>
              Datos básicos del paciente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre *</Label>
                <Input 
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Ingrese el nombre"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellidos *</Label>
                <Input 
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Ingrese los apellidos"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dni">DNI/NIE *</Label>
                <Input 
                  id="dni"
                  value={formData.dni}
                  onChange={(e) => handleInputChange("dni", e.target.value)}
                  placeholder="12345678A"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate">Fecha de Nacimiento *</Label>
                <Input 
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Género</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Femenino</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefiero no decir</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="fade-in-delay-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input 
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+34 666 123 456"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="paciente@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Input 
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Calle, número, piso"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Ciudad</Label>
                <Input 
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Madrid"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Código Postal</Label>
                <Input 
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  placeholder="28001"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="fade-in-delay-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Contacto de Emergencia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyName">Nombre completo</Label>
                <Input 
                  id="emergencyName"
                  value={formData.emergencyName}
                  onChange={(e) => handleInputChange("emergencyName", e.target.value)}
                  placeholder="Nombre del contacto"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">Teléfono</Label>
                <Input 
                  id="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                  placeholder="+34 666 123 456"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyRelation">Relación</Label>
                <Select value={formData.emergencyRelation} onValueChange={(value) => handleInputChange("emergencyRelation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spouse">Cónyuge</SelectItem>
                    <SelectItem value="parent">Padre/Madre</SelectItem>
                    <SelectItem value="child">Hijo/Hija</SelectItem>
                    <SelectItem value="sibling">Hermano/Hermana</SelectItem>
                    <SelectItem value="friend">Amigo/Amiga</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Information */}
        <Card className="fade-in-delay-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Información Médica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="medicalConditions">Condiciones médicas</Label>
              <Textarea 
                id="medicalConditions"
                value={formData.medicalConditions}
                onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                placeholder="Diabetes, hipertensión, enfermedades cardíacas, etc."
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="medications">Medicamentos actuales</Label>
              <Textarea 
                id="medications"
                value={formData.medications}
                onChange={(e) => handleInputChange("medications", e.target.value)}
                placeholder="Liste todos los medicamentos que toma actualmente"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="allergies">Alergias</Label>
              <Textarea 
                id="allergies"
                value={formData.allergies}
                onChange={(e) => handleInputChange("allergies", e.target.value)}
                placeholder="Alergias a medicamentos, alimentos, materiales dentales, etc."
                rows={2}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="previousTreatments">Tratamientos dentales previos</Label>
              <Textarea 
                id="previousTreatments"
                value={formData.previousTreatments}
                onChange={(e) => handleInputChange("previousTreatments", e.target.value)}
                placeholder="Ortodoncia, implantes, extracciones, etc."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Insurance Information */}
        <Card className="fade-in-delay-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              Información del Seguro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hasInsurance">¿Tiene seguro dental?</Label>
              <Select value={formData.hasInsurance} onValueChange={(value) => handleInputChange("hasInsurance", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Sí</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {formData.hasInsurance === "yes" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="insuranceCompany">Compañía de seguros</Label>
                    <Input 
                      id="insuranceCompany"
                      value={formData.insuranceCompany}
                      onChange={(e) => handleInputChange("insuranceCompany", e.target.value)}
                      placeholder="Sanitas, Adeslas, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policyNumber">Número de póliza</Label>
                    <Input 
                      id="policyNumber"
                      value={formData.policyNumber}
                      onChange={(e) => handleInputChange("policyNumber", e.target.value)}
                      placeholder="Número de póliza"
                    />
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card className="fade-in-delay-6">
          <CardHeader>
            <CardTitle>Notas Adicionales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="notes">Observaciones</Label>
              <Textarea 
                id="notes"
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                placeholder="Cualquier información adicional relevante..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end fade-in-delay-6">
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button type="submit">
            Crear Paciente
          </Button>
        </div>
      </form>
    </div>
  );
}