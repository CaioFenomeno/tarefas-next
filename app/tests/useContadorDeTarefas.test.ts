import { renderHook, act } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe("Hook useContadorDeTarefas", () => {
  test("contador começa em 0", () => {
    const { result } = renderHook(() => useContadorDeTarefas());
    expect(result.current.contador).toBe(0);
  });

  test("incrementa corretamente", () => {
    const { result } = renderHook(() => useContadorDeTarefas());
    act(() => {
      result.current.incrementar();
      result.current.incrementar();
    });
    expect(result.current.contador).toBe(2);
  });
});
