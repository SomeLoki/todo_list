import { createProject } from "./project_gen";
import { createTodoItem } from "./todo_gen";
import { createChecklistItem } from "./todo_checklist_gen";

window.createProject = createProject;
window.createTodoItem = createTodoItem;
window.createChecklistItem = createChecklistItem;

console.log([createProject(), "createProject"]);
console.log([createProject("test"), "checklist"]);

console.log([createTodoItem(), "createTodoItem"]);
console.log([createTodoItem("test"), "createTodoItem"]);

console.log([createChecklistItem(), "checklist"]);
console.log([createChecklistItem("test"), "checklist"]);