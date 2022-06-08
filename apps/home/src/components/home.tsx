import React from "react";

export interface HomeProps {
  title: string;
  description: string;
}

export function Home({ title, description }: HomeProps) {
  return (
    <div style={{ background: "#f5f7fa", padding: 16 }}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
