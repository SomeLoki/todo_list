class TodoItem {
  #title;
  #complete;
  #dueDate;
  #priority;
  #description;
  #notes;
  #checklist;
  #id;
  constructor( title, dueDate, priority = "low", description = undefined, notes = undefined, checklist = [] ) {
    this.#title = title;
    this.#complete = false;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#description = description;
    this.#notes = notes;
    this.#checklist = checklist;
    this.#id = crypto.randomUUID();
  }
  get title() {
    return this.#title;
  };
  set title( newTitle ) {
    this.#title = newTitle;
  };
  get isComplete() {
    return this.#complete;
  };
  toggleComplete() {
     this.#complete = !this.#complete;
  };
  get dueDate() {
    return this.#dueDate;
  };
  set dueDate( newDueDate ) {
    this.#dueDate = newDueDate;
  };
  get priority() {
    return this.#priority;
  };
  set priority( newPriority ) {
    this.#priority = newPriority;
  };
  get description() {
    return this.#description;
  };
  set description ( newDescription ) {
    this.#description = newDescription;
  };
  get notes() {
    return this.#notes;
  };
  set notes( newNotes ) {
    this.#notes = newNotes;
  };
  get checklist() {
    return [...this.#checklist];
  };
  addChecklistItem( newItem ) {
    this.#checklist.push( newItem );
  };
  removeChecklistItem( itemToRemove ) {
    this.#checklist = this.#checklist.filter( ( item ) => item !== itemToRemove );
  };
  get id() {
    return this.#id;
  };

}

const testTodo = new TodoItem( "test", "Sept 5th", undefined , undefined , undefined , ["test", "array"], );
console.log( testTodo );

export { TodoItem };