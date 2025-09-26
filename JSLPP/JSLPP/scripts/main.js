import { loadTasksFromStorage } from "./utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./ui/render.js";
import {
  setupEditModalHandler,
  setupNewTaskModalHandler,
  setupThemeToggleHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  loadTasksFromStorage().then(tasks => {
    clearExistingTasks();
    renderTasks(tasks);
    setupEditModalHandler();
    setupNewTaskModalHandler();
    setupThemeToggleHandler();
  });
}

document.addEventListener("DOMContentLoaded", initTaskBoard);