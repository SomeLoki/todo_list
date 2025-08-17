import { createContainer, createTitle, createPriority, createDueDate, createCompletion } from "./ui_funcs";

function createPageHeader( pageTitle, pagePriority, pageDueDate, pageCompleteStatus, pageCheckedstatus, pageId ){
  const headerContainer = createContainer( [ "page-header", "header" ] );
  const subtitleContainer = createContainer( [ "subtitle-header", "subtitle" ] );
  const title = createTitle( pageTitle, "h1",  [], [ "title-header", ], );
  const priority = createPriority( pagePriority, undefined, [ "priority-header" ], [] );
  const dueDate = createDueDate( pageDueDate, undefined, [ "dueDate-header" ], [] )
  const complete = createCompletion( pageCheckedstatus, pageCompleteStatus, undefined, [ "complete-header" ], [ "completion-header" ], pageId );
  subtitleContainer.append( dueDate, complete );
  headerContainer.append( priority, title, subtitleContainer );
  return headerContainer;
};

export { createPageHeader };