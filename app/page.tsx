import { getTarefas } from "./tarefasSimuladas";
import NovaTarefa from "./components/NovaTarefa";


export default async function Page() {
  const tarefas = await getTarefas();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Minhas Tarefas</h1>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>

      <NovaTarefa />
    </main>
  );
}
