import React from "react";

export interface AppointmentProps {
  country: string;
  patientId: number;
}

export function Appointment({ country, patientId }: AppointmentProps) {
  return (
    <div style={{ background: "#e6effa", padding: 16 }}>
      <h1>Appointment</h1>
      <p>
        Appointment for patient with id: {patientId} in {country}
      </p>
    </div>
  );
}
