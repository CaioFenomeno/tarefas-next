import { render, screen } from "@testing-library/react";
import Page from "../page";

test("renderiza lista de tarefas da página", async () => {
  render(await Page());
  expect(screen.getByText("Minhas Tarefas")).toBeInTheDocument();
});
