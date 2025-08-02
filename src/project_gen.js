import { hasTitle, hasComplete, hasDueDate, hasPriority, hasDescription, hasNotes, hasChecklist, hasId } from "./comp_funcs";

const createProject = ( title, complete, dueDate, description, priority , notes , checklist ) => {

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
  
  return project;
};

export { createProject }