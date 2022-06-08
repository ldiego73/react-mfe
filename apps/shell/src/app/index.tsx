import React, { Suspense } from "react";
import { lazily } from "react-utils";

const { Home } = lazily(() => import("home/index"));
const { Appointment } = lazily(() => import("appointment/index"));
const { MedicalAdvice } = lazily(() => import("medical_advice/index"));

export function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home title="This a title" description="This a description" />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Appointment patientId={1} country="PE" />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MedicalAdvice
          name="Programas de Salud Mental"
          onClick={() => alert("Microfrontend for medical advice")}
        />
      </Suspense>
    </>
  );
}
