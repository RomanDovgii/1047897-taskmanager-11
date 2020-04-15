const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const date = new Date();

const isEqual = (dateOne) => {
  let result;

  if (dateOne !== null) {
    if ((dateOne.getDate() === date.getDate()) && (dateOne.getMonth() === date.getMonth()) && (dateOne.getYear() === date.getYear())) {
      result = true;
    }
  } else {
    result = false;
  }

  return result;
};

const generateFilters = (tasks) => {

  return filterNames.map((it) => {
    let filtersObjElement;
    switch (it) {
      case `all`:
        filtersObjElement = {
          name: it,
          count: tasks.length,
        };
        break;
      case `overdue`:
        filtersObjElement = {
          name: it,
          count: tasks.slice().filter((obj) => obj.dueDate > date).length,
        };
        break;
      case `today`:
        filtersObjElement = {
          name: it,
          count: tasks.slice().filter((obj) => isEqual(obj.dueDate)).length,
        };
        break;
      case `favorites`:
        filtersObjElement = {
          name: it,
          count: tasks.slice().filter((obj) => obj.isFavorite === true).length,
        };

        break;
      case `repeating`:
        filtersObjElement = {
          name: it,
          count: tasks.slice().filter((obj) => obj.repeatingDays !== ``).length,
        };

        break;
      case `archive`:
        filtersObjElement = {
          name: it,
          count: tasks.slice().filter((obj) => obj.isArchive === true).length,
        };

        break;
      default:

    }
    return filtersObjElement;

  });
};

export {generateFilters};
