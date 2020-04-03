const TASK_COUNT = 3;

const mainBlock = document.querySelector(`.main`);
const controlElement = document.querySelector(`.main__control`);

const Positions = {
  BEFORE_BEGIN: `beforebegin`,
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

import {createMenuTemplate} from "./components/site-menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskEditTemplate} from "./components/taskEditor.js";
import {createTaskTemplate} from "./components/task.js";
import {createLoadMoreButtonTemplate} from "./components/moreButton.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(controlElement, createMenuTemplate(), Positions.BEFORE_END);
render(mainBlock, createFilterTemplate(), Positions.BEFORE_END);
render(mainBlock, createBoardTemplate(), Positions.BEFORE_END);

const boardBlock = document.querySelector(`.board`);
const tasksElement = boardBlock.querySelector(`.board__tasks`);

render(tasksElement, createTaskEditTemplate(), Positions.BEFORE_END);

for (let i = 0; i < TASK_COUNT; i++) {
  render(tasksElement, createTaskTemplate(), Positions.BEFORE_END);
}

render(boardBlock, createLoadMoreButtonTemplate(), Positions.BEFORE_END);
