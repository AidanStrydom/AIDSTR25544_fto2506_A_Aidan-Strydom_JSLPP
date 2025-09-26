import {
  pullFromStorage,
  saveTasksToStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "../ui/render.js";
import { resetForm } from "./formUtils.js";

export function addNewTask() {
  const title = document.getElementById("title-input").value.trim();
  const description = document.getElementById("desc-input").value.trim();
  const status = document.getElementById("select-status").value;
  const priority = document.getElementById("select-priority").value;
  const overlay = document.querySelector(".modal-overlay");

  if (!title) return;

  const tasks = pullFromStorage();
  const newTask = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    title: title,
    description: description,
    status: status,
    priority: priority,
  };

  tasks.push(newTask);
  // const updatedTasks = [...tasks, newTask];
  saveTasksToStorage(tasks);
  const updatedTasks = pullFromStorage();
  clearExistingTasks();
  renderTasks(updatedTasks);
  resetForm();
  overlay.close();
}

export function updateExistingTask() {
  const taskId = parseInt(document.getElementById("task-id").textContent);
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value.trim();
  const status = document.getElementById("task-status").value;
  const dialog = document.querySelector("task-modal");

  if (!title) return;

  const tasks = pullFromStorage();
  const updatedTask = {
    id: taskId,
    title: title,
    description: description,
    status: status,
    priority: 'low', // Default priority; adjust as needed
  };
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask; // Update existing task
  }

  saveTasksToStorage(tasks);
  const updatedTasks = pullFromStorage();

  clearExistingTasks();
  renderTasks(updatedTasks);
  // dialog.close();
}

export function deleteTask() {
  var reply = confirm("Are you sure you want to delete this task?");
  if (reply) {
    const taskId = parseInt(document.getElementById("task-id").textContent);
    var tasks = pullFromStorage();
    var remainingTasks = tasks.filter(t => t.id !== taskId);
    saveTasksToStorage(remainingTasks);
    clearExistingTasks();
    renderTasks(remainingTasks);
  } 
}