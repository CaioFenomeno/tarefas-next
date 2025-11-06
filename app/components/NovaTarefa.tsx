"use client";

import { useState } from "react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

export default function NovaTarefa() {
  const [titulo, setTitulo] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);
  const { contador, incrementar } = useContadorDeTarefas();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titulo.trim() === "") return;
    setTarefas([...tarefas, titulo]);
    incrementar();
    setTitulo("");
  };

  return (
    <div>
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <p>Total de tarefas: {contador}</p>

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
