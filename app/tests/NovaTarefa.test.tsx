import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

describe("Componente <NovaTarefa />", () => {
  it("renderiza input e botão", () => {
    render(<NovaTarefa />);
    expect(screen.getByPlaceholderText("Digite o nome da tarefa")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
  });

  it("adiciona uma nova tarefa", () => {
    render(<NovaTarefa />);
    const input = screen.getByPlaceholderText("Digite o nome da tarefa");
    const button = screen.getByRole("button", { name: /adicionar/i });

    fireEvent.change(input, { target: { value: "Nova tarefa" } });
    fireEvent.click(button);

    expect(screen.getByText("Nova tarefa")).toBeInTheDocument();
  });

  it("não adiciona tarefa vazia", () => {
    render(<NovaTarefa />);
    fireEvent.click(screen.getByRole("button", { name: /adicionar/i }));
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
