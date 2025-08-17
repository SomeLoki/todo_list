const createDomElement = function( content = "", elementType = "div", classNames = [] ) {
  const element = document.createElement( elementType );
  element.textContent = content;
  element.classList.add(...classNames);
  return element;
}

function createContainer( classNames = [] ) {
  return createDomElement( undefined, undefined, [ ...classNames, "container" ] )
};


function createTitle( title, ElementType = "div", titleClasses = [], containerClasses = [] ){
  const titleContainer = createContainer( [ "title-container", ...containerClasses ] );
  const newTitle = createDomElement( title, ElementType, [ "title", ...titleClasses ] );
  titleContainer.appendChild( newTitle );
  return titleContainer;
};

function createPriority( priority, ElementType = "div", priorityClasses = [], containerClasses = [] ){
  const priorityContainer = createContainer( [ "priority-container", ...containerClasses ] );
  const newPriority = createDomElement( priority, ElementType, [ "priority", ...priorityClasses ] );
  priorityContainer.appendChild( newPriority );
  return priorityContainer;
};

function createDueDate( dueDate, ElementType = "div", dueDateClasses = [], containerClasses = [] ){
  const dueDateContainer = createContainer( [ "dueDate-container", ...containerClasses ] );
  const newDueDate = createDomElement( dueDate, ElementType, [ "dueDate", ...dueDateClasses ] );
  dueDateContainer.appendChild( newDueDate );
  return dueDateContainer;
};

function createCheckbox( checkedStatus, itemId ){
  const newCheckbox = createDomElement( undefined, "input", [ "checkbox" ] )
  newCheckbox.type = "checkbox";
  newCheckbox.id = itemId;
  newCheckbox.value = "completed";
  newCheckbox.checked = checkedStatus;
  return newCheckbox;
}

function createCompletion( checkedStatus = false, completionStatus, ElementType = "div", completionClasses = [], containerClasses = [], id ){
  const completionContainer = createContainer( [ "completion-container", ...containerClasses ] );
  const newCheckbox = createCheckbox( checkedStatus, id );
  const newCompletion = createDomElement( completionStatus, ElementType, [ "completion", ...completionClasses ] );
  completionContainer.append( newCheckbox,newCompletion );
  return completionContainer;
};

export { createContainer, createTitle, createPriority, createDueDate, createCompletion }



