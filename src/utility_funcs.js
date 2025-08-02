import { createProject } from "./project_gen";
import { createTodoItem } from "./todo_gen";
import { createChecklistItem } from "./todo_checklist_gen";

//container for allprojects
const allProjects = createProject( "DEFAULT-ALL", undefined, undefined, "DEFAULT-ALL", "THIS SHOULD NEVER DISPLAY - CONTAINER ONLY", undefined );

//catch all container for default display
const mainProject = addNewProject( "Main", undefined, undefined, "Default display for all todo items", undefined, undefined, undefined );


function error( msg ) {
  console.log(msg);
  return;
}

function isInvalidProjectTodo( projectOrTodo ){
  if ( ( typeof( projectOrTodo ) !== "object" ) || projectOrTodo === null || ( !Object.keys( projectOrTodo ).includes( "addChecklistItem" ) )) {
    error( "projectOrTodo either is not an object or does not contain addChecklistItem as a key." );
    return true;
  };
  return false;
}

function addItemToChecklist( projectOrTodo, item ) {
  if ( isInvalidProjectTodo( projectOrTodo )) {
    return;
  };
  projectOrTodo.addChecklistItem( item );
};


function addNewProject(title, complete = false, dueDate, description = undefined, priority = "low", notes = undefined, checklist = [] ) {
  if (!title) {
    error("Error: title is required for projects");
    return;
  };
  const newProject = createProject( title, complete, dueDate, description, priority, notes, checklist );
  addItemToChecklist( allProjects, newProject );

  return newProject;
};

function addNewTodo(title, complete = false, dueDate, description = undefined, priority = "low", notes = undefined, checklist = [] ) {
  if (!title) {
    error("Error: title is required for Todo Items");
    return;
  };
  const newTodo = createTodoItem( title, complete, dueDate, description, priority, notes, checklist );
  addItemToChecklist( mainProject, newTodo );

  return newTodo;
};

function addNewChecklistItem( title, complete = false, dueDate, priority = "low" ) {
  if (!title) {
    error("Error: title is required for Checklist Items");
    return;
  };
  const newChecklistItem = createChecklistItem( title, complete, dueDate, priority );

  return newChecklistItem;
};

function removeFromAllProjects( itemIdToRemove ) {
allProjects.getChecklist()
    .filter( ( project )  => {
        return project.getChecklist()
        .some( ( todo ) => todo.getId() === itemIdToRemove )
    })
    .forEach( ( project ) => { project.  removeChecklistItem( itemIdToRemove )
    });

};

function removeFromChecklist( projectOrTodo, itemIdToRemove ) {
  if ( isInvalidProjectTodo( projectOrTodo )) {
    return;
  };
  projectOrTodo.removeChecklistItem( itemIdToRemove );
}

export { addItemToChecklist, addNewProject, addNewTodo, addNewChecklistItem, removeFromAllProjects, removeFromChecklist }


