import React, { Suspense } from "react";
import { lazily } from "react-utils";

const { MyHealth } = lazily(() => import("my_health/index"));

export interface MedicalAdviceProps {
  name: string;
  onClick: () => void;
}

export function MedicalAdvice({ name, onClick }: MedicalAdviceProps) {
  return (
    <div style={{ background: "#e6f8fa", padding: 16 }}>
      <h1>{name}</h1>
      <button onClick={onClick}>Click me</button>
      <Suspense fallback={<div>Loading...</div>}>
        <MyHealth title="Mi salud" description="Revisar la salud" />
      </Suspense>
    </div>
  );
}
