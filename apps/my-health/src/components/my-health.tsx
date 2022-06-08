import React from "react";

export interface MyHealthProps {
  title: string;
  description: string;
}

export function MyHealth({ title, description }: MyHealthProps) {
  return (
    <div style={{ background: "#00b0ca", padding: 16, color: "white", marginTop: 16 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
