const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const date = new Date();

const generateObject = (localName, localTasks) => {
  let localCounter;

  switch (localName) {
    case `all`:
      localCounter = localTasks.length;
      break;
    case `overdue`:
      localCounter = localTasks.slice().filter((obj) => obj.dueDate > date).length;
      break;
    case `today`:
      localCounter = localTasks.slice().filter((obj) => ((obj.dueDate !== null) && (obj.dueDate.getDate() === date.getDate()) && (obj.dueDate.getMonth() === date.getMonth()) && (obj.dueDate.getYear() === date.getYear()))).length;
      break;
    case `favorites`:
      localCounter = localTasks.slice().filter((obj) => obj.isFavorite === true).length;
      break;
    case `repeating`:
      localCounter = localTasks.slice().filter((obj) => obj.repeatingDays !== ``).length;
      break;
    case `archive`:
      localCounter = localTasks.slice().filter((obj) => obj.isArchive === true).length;
      break;
    default:
      localCounter = 0;
      break;
  }

  return {
    name: localName,
    count: localCounter,
  };
};

const generateFilters = (tasks) => {
  return filterNames.map((it) => generateObject(it, tasks));
};

export {generateFilters};
