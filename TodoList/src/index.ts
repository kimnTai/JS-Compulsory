import removeAndCheckbox from "./components/removeAndCheckbox";
import removeAll from "./components/removeAll";
import changeTab from "./components/changeTab";
import addTodo from "./components/addTodo";

function init(): void {
  const todoData: ITodoData[] = [];
  addTodo(todoData);
  changeTab(todoData);
  removeAll(todoData);
  removeAndCheckbox(todoData);
}
init();
