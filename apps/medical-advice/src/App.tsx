import React from "react";
import { MedicalAdvice } from "./components";

export function App() {
  return (
    <MedicalAdvice
      name="Programas de Salud Mental"
      onClick={() => alert("Microfrontend for medical advice")}
    />
  );
}
