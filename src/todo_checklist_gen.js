import { hasTitle, hasComplete, hasDueDate, hasPriority, hasId } from "./comp_funcs";

const createChecklistItem = ( title, complete, dueDate, priority, ) => {

  const checklistItem = {
    ...hasTitle( title ),
    ...hasComplete( complete ),
    ...hasDueDate( dueDate ),
    ...hasPriority( priority ),
    ...hasId(),
  };
  
  return checklistItem;
};

export { createChecklistItem }