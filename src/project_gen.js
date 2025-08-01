import { hasTitle, hasComplete, hasDueDate, hasPriority, hasDescription, hasNotes, hasChecklist, hasId } from "./comp_funcs";

const createProject = ( title, complete = false, dueDate, description = undefined, priority = "low", notes = undefined, checklist = [] ) => {
  if (!title) {
    console.log("Error title is required for projects");
    return;
  };

  const project = {
    ...hasTitle( title ),
    ...hasComplete( complete ),
    ...hasDueDate( dueDate ),
    ...hasDescription( description ),
    ...hasPriority( priority ),
    ...hasNotes( notes ),
    ...hasChecklist( checklist ),
    ...hasId(),
  };
  
  return project
};

export { createProject }