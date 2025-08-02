const hasTitle = ( initialTitle ) => {
  
  let state = { title: initialTitle };

  return {
    getTitle: () => state.title,
    setTitle: ( newTitle ) => state.title = newTitle,
  };
};

const hasComplete = ( initialComplete = false ) => {
  let state = { complete: initialComplete };

  return {
    getComplete: () => state.complete,
    toggleComplete: () => state.complete = !state.complete,
  };
};

const hasDueDate = ( initialDueDate ) => {
  let state = { dueDate: initialDueDate };

  return {
    getDueDate: () => state.dueDate,
    setDueDate: ( newDueDate ) => state.dueDate = newDueDate,
  }
};

const hasPriority = ( initialPriority = "low" ) => {
  let state = { priority: initialPriority };

  return {
    getPriority: () => state.priority,
    setPriority: ( newPriority ) => state.priority = newPriority,
  }
};

const hasDescription = ( initialDescription = undefined ) => {
  let state = { description: initialDescription };

  return {
    getDescription: () => state.description,
    setDescription: ( newDescription ) => state.description = newDescription,
  };
};

const hasNotes = ( initialNotes = undefined ) => {
  let state = { notes: initialNotes };

  return {
    getNotes: () => state.notes,
    setNotes: ( newNotes ) => state.notes = newNotes,
  };
};

const hasChecklist = ( initialChecklist = [] ) => {
  let state = { checklist: initialChecklist };

  return {
    getChecklist: () => [ ...state.checklist],
    addChecklistItem: ( newItem ) => state.checklist.push ( newItem ),
    removeChecklistItem( itemIdToRemove ){
      state.checklist = state.checklist.filter(( item ) => item.getId() !== itemIdToRemove );
    },
  };
};

const hasId = () => {
  let state = { id: crypto.randomUUID() };

  return {
    getId: () => state.id,
  };
};

export { hasTitle, hasComplete, hasDueDate, hasPriority, hasDescription, hasNotes, hasChecklist, hasId }


