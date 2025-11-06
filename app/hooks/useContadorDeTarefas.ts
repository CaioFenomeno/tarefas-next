"use client";
import { useState } from "react";

export function useContadorDeTarefas() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador((prev) => prev + 1);
  }

  return { contador, incrementar };
}
