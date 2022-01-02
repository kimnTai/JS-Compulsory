import renderTodo from "./renderTodo";

/**刪除全部 */
export default function removeAll(todoData: ITodoData[]): void {
  const button = document.querySelector(".list_footer") as HTMLElement;
  button.addEventListener("click", () => {
    todoData.splice(0);
    renderTodo(todoData);
  });
}
