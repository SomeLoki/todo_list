const title = ( title ) => ({
  getTitle: () => title,
  setTitle: ( newTitle ) => ( title = newTitle ),
});

const complete = ( complete = false ) => ({
  getComplete: () => complete,
  toggleComplete: () => ( complete = !complete),
});

const dueDate = ( dueDate ) => ({
  getDueDate: () => dueDate,
  setDueDate: ( newDueDate ) => ( dueDate = newDueDate),
});

const priority = ( priority = "low" ) => ({
  getPriority: () => priority,
  setPriority: ( newPriority ) => ( priority = newPriority ),
});

const description = ( description ) => ({
  getDescription: () => description,
  setDescription: ( newDescription ) => ( description = newDescription ),
});

const notes = ( notes ) => ({
  getNotes: () => notes,
  setNotes: ( newNotes ) => ( notes = newNotes ),
});

const checklist = ( checklist = [] ) => ({
  getChecklist: () => checklist,
  setChecklist: ( newChecklist ) => ( checklist = newChecklist ),
});