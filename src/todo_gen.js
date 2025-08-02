import { hasTitle, hasComplete, hasDueDate, hasPriority, hasDescription, hasNotes, hasChecklist, hasId } from "./comp_funcs";

const createTodoItem = ( title, complete, dueDate, description, priority, notes, checklist ) => {

  const TodoItem = {
    ...hasTitle( title ),
    ...hasComplete( complete ),
    ...hasDueDate( dueDate ),
    ...hasDescription( description ),
    ...hasPriority( priority ),
    ...hasNotes( notes ),
    ...hasChecklist( checklist ),
    ...hasId(),
  };
  
  return TodoItem;
};

export { createTodoItem }