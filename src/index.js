import { createProject } from "./project_gen";
import { createTodoItem } from "./todo_gen";
import { createChecklistItem } from "./todo_checklist_gen";
import { createPageHeader } from "./ui_header";
import "./style.css";

const testHeader = createPageHeader( "test", "low", "today", false, "not done yet", "00001" );

const header = document.querySelector("header")

header.append( testHeader );